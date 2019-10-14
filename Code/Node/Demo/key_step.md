### tls/ssl 密钥生成
- 1 生成私钥
  - openssl genrsa -out ryans-key.pem 2048
- 2 生成csr
  - openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem
- 3 生成一个自签名或ca签名证书
  - openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
-4 证书被生成以后，它又能用来生成一个 .pfx 或者 .p12 文件：  
  - openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
