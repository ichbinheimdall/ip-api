<div align="center">

# 🌍 IP API

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://ip.hmddevs.org)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![GitHub Stars](https://img.shields.io/github/stars/ichbinheimdall/ip-api?style=social)](https://github.com/ichbinheimdall/ip-api)

**A lightning-fast, privacy-focused IP geolocation API**

[Live Demo](https://ip.hmddevs.org) · [Report Bug](https://github.com/ichbinheimdall/ip-api/issues) · [Request Feature](https://github.com/ichbinheimdall/ip-api/issues)

---

</div>

## ✨ Features

- 🚀 **Blazing Fast** — Powered by Vercel's edge network for sub-100ms responses
- 🔒 **Privacy First** — No logging, no tracking, no data storage
- 🌐 **Global Coverage** — Accurate geolocation data for IPs worldwide
- 📦 **Zero Config** — Works out of the box, no API keys required
- 🆓 **100% Free** — Open source and free to use forever
- ⚡ **Lightweight** — Minimal response payload for efficient bandwidth usage

## 🎯 Quick Start

### Make a Request

```bash
curl https://ip.hmddevs.org
```

### Response

```json
{
  "ip": "8.8.8.8",
  "country": "US"
}
```

## 📖 API Documentation

### Endpoint

```
GET https://ip.hmddevs.org/
```

### Response Fields

| Field     | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `ip`      | `string` | The client's public IP address                   |
| `country` | `string` | ISO 3166-1 alpha-2 country code (e.g., `US`, `DE`, `JP`) |

### HTTP Status Codes

| Code  | Description           |
|-------|-----------------------|
| `200` | Successful response   |

## 💻 Usage Examples

### JavaScript (Fetch)

```javascript
fetch('https://ip.hmddevs.org')
  .then(response => response.json())
  .then(data => {
    console.log(`IP: ${data.ip}`);
    console.log(`Country: ${data.country}`);
  });
```

### JavaScript (Async/Await)

```javascript
const getLocation = async () => {
  const response = await fetch('https://ip.hmddevs.org');
  const { ip, country } = await response.json();
  return { ip, country };
};
```

### Python

```python
import requests

response = requests.get('https://ip.hmddevs.org')
data = response.json()
print(f"IP: {data['ip']}, Country: {data['country']}")
```

### cURL

```bash
curl -s https://ip.hmddevs.org | jq
```

### PHP

```php
<?php
$response = file_get_contents('https://ip.hmddevs.org');
$data = json_decode($response, true);
echo "IP: " . $data['ip'] . ", Country: " . $data['country'];
?>
```

### Go

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type IPResponse struct {
    IP      string `json:"ip"`
    Country string `json:"country"`
}

func main() {
    resp, _ := http.Get("https://ip.hmddevs.org")
    defer resp.Body.Close()

    var data IPResponse
    json.NewDecoder(resp.Body).Decode(&data)
    fmt.Printf("IP: %s, Country: %s\n", data.IP, data.Country)
}
```

### Ruby

```ruby
require 'net/http'
require 'json'

uri = URI('https://ip.hmddevs.org')
response = Net::HTTP.get(uri)
data = JSON.parse(response)
puts "IP: #{data['ip']}, Country: #{data['country']}"
```

### Rust

```rust
use reqwest;
use serde::Deserialize;

#[derive(Deserialize)]
struct IpResponse {
    ip: String,
    country: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let resp: IpResponse = reqwest::get("https://ip.hmddevs.org")
        .await?
        .json()
        .await?;
    println!("IP: {}, Country: {}", resp.ip, resp.country);
    Ok(())
}
```

## 🛠️ Self-Hosting

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- [Vercel CLI](https://vercel.com/cli) (optional, for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/ichbinheimdall/ip-api.git

# Navigate to the project directory
cd ip-api

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:3000` to test locally.

### Deploy to Vercel

#### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ichbinheimdall/ip-api)

#### Option 2: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Domains**
4. Add your custom domain
5. Configure DNS records as instructed

## 🏗️ Project Structure

```
ip-api/
├── api/
│   └── index.js          # Main API handler
├── test/
│   └── api.test.js       # Unit tests
├── .github/
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   ├── workflows/        # GitHub Actions (CI/CD)
│   └── dependabot.yml    # Automated dependency updates
├── .editorconfig         # Editor configuration
├── eslint.config.js      # ESLint configuration
├── jsconfig.json         # JavaScript project configuration
├── openapi.yaml          # OpenAPI 3.1 specification
├── package.json          # Project configuration
├── vercel.json           # Vercel configuration
├── CHANGELOG.md          # Version history
├── LICENSE               # MIT License
├── CONTRIBUTING.md       # Contribution guidelines
├── CODE_OF_CONDUCT.md    # Community guidelines
├── SECURITY.md           # Security policy
└── README.md             # Documentation
```

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test

# Deploy to production
npm run deploy
```

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 🔒 Security

Found a security vulnerability? Please report it responsibly. See our [Security Policy](SECURITY.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MaxMind GeoLite2](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) for geolocation data
- [geoip-lite](https://github.com/geoip-lite/node-geoip) for the Node.js geolocation library
- [Vercel](https://vercel.com) for hosting and edge network

## 📬 Contact

**HMD Developments, Inc.**

- Website: [hmddevs.org](https://hmddevs.org)
- GitHub: [@ichbinheimdall](https://github.com/ichbinheimdall)
- Project: [github.com/ichbinheimdall/ip-api](https://github.com/ichbinheimdall/ip-api)

---

<div align="center">

Copyright © 2025 [HMD Developments, Inc.](https://hmddevs.org) — All rights reserved.

</div>
