# Deploy na Contabo (Ubuntu) + funkčný formulár

## 1) Príprava servera

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

## 2) Deploy aplikácie

```bash
cd /var/www
sudo mkdir -p /var/www/mdfoto.sk
sudo chown -R $USER:$USER /var/www/mdfoto.sk
cd /var/www/mdfoto.sk

# buď git clone, alebo git pull
git clone <YOUR_REPO_URL> .
npm install
npm run build
```

## 3) Nastavenie env premenných pre formulár

Vytvor `.env.production` v koreňovom priečinku projektu:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM="MDFOTO Web <noreply@mdfoto.sk>"
SMTP_TO=mdfoto.sk@gmail.com
```

Poznámka: pri porte `465` sa používa secure SMTP.

## 4) Systemd service (auto-start po reštarte)

Vytvor súbor:
`/etc/systemd/system/mdfoto.service`

```ini
[Unit]
Description=MDFOTO Next.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/mdfoto.sk
Environment=NODE_ENV=production
EnvironmentFile=/var/www/mdfoto.sk/.env.production
ExecStart=/usr/bin/npm run start -- -p 3000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Aktivuj službu:

```bash
sudo chown -R www-data:www-data /var/www/mdfoto.sk
sudo systemctl daemon-reload
sudo systemctl enable mdfoto
sudo systemctl start mdfoto
sudo systemctl status mdfoto
```

## 5) Nginx reverse proxy

Vytvor súbor:
`/etc/nginx/sites-available/mdfoto.sk`

```nginx
server {
    listen 80;
    server_name mdfoto.sk www.mdfoto.sk;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktivácia:

```bash
sudo ln -s /etc/nginx/sites-available/mdfoto.sk /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 6) SSL certifikát (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d mdfoto.sk -d www.mdfoto.sk
```

## 7) Overenie formulára

1. Otvor `/kontakt`
2. Vyplň formulár a odošli
3. Over email v schránke `SMTP_TO`
4. Pri problémoch:

```bash
sudo journalctl -u mdfoto -f
```

Najčastejší problém: nesprávne SMTP údaje alebo blokovaný odchádzajúci port u provider-a.
