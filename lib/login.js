const ip = require('ip');

function login(app) {
  return app.getCookies()
    .then(() => app.api.post('/Athena/WebServlet', app.conformJSONtoRequest({
      Password: app.password,
      CyotahttpAcceptEncoding: 'gzip',
      IssuerId: '1',
      CyotahttpAcceptLanguage: 'en-US',
      SubEvent: 'login',
      VirtualAcctVersion: 'DOWNLOAD',
      CyotaDevicePrint: 'version%253D2%2526pm_fpua%253Dmozilla%2F4.0%2520%2528compatible%253B%2520msie%25207.0%253B%2520windows%2520nt%25206.2%253B%2520wow64%253B%2520trident%2F7.0%253B%2520.net4.0e%253B%2520.net4.0c%253B%2520.net%2520clr%25203.5.30729%253B%2520.net%2520clr%25202.0.50727%253B%2520.net%2520clr%25203.0.30729%2529%257C4.0%2520%2528compatible%253B%2520MSIE%25207.0%253B%2520Windows%2520NT%25206.2%253B%2520WOW64%253B%2520Trident%2F7.0%253B%2520.NET4.0E%253B%2520.NET4.0C%253B%2520.NET%2520CLR%25203.5.30729%253B%2520.NET%2520CLR%25202.0.50727%253B%2520.NET%2520CLR%25203.0.30729%2529%257CWin32%257C0%257Cx86%257Cen-US%257C18739%2526pm_fpsc%253D32%257C1920%257C1080%257C1080%2526pm_fpsw%253Dabk%253D6%252C3%252C9600%252C17415%257Cdht%253D11%252C0%252C9600%252C18739%257Cieh%253D11%252C0%252C9600%252C18739%257Ciee%253D6%252C3%252C9600%252C18739%257Cwmp%253D12%252C0%252C9600%252C18438%257Cobp%253D11%252C0%252C9600%252C18739%257Coex%253D6%252C3%252C9600%252C17415%2526pm_fptz%253D-4%2526pm_fpln%253Dlang%253Den-US%257Csyslang%253Den-US%257Cuserlang%253Den-US%2526pm_fpjv%253D1%2526pm_fpco%253D1%2526pm_fpasw%253D%2526pm_fpan%253DMicrosoft%2520Internet%2520Explorer%2526pm_fpacn%253DMozilla%2526pm_fpol%253Dtrue%2526pm_fposp%253D%2526pm_fpup%253D%2526pm_fpsaw%253D1920%2526pm_fpspd%253D%2526pm_fpsbd%253D0%2526pm_fpsdx%253D96%2526pm_fpsdy%253D96%2526pm_fpslx%253D96%2526pm_fpsly%253D96%2526pm_fpsfse%253Dtrue%2526pm_fpsui%253D0',
      CyotahttpReferrer: '',
      iOvationBlackbox: '0400nyhffR%252BvPCUNf94lis1ztslx6CM6kh71EwmdU5pwECEO41dOg52P6CTlL%252FqCwCuqnCA2AVXtfyB09goHrD3QuUK5xp%252BHG9GE7tjCQkotdjQw5xWQZwLvBK3AVNJ9bSaWDIKINVrQrNLcRehbfBGuV3dYcifmtkxPuZFchGeVJ9QNczN14q3lywh3sf2PehRXzxRh3xo8sP3xwUJvdekrQjmYH7238d1UhH63W0JS9EmFAlPKT0bZ0hatzkWpnWI7wTbkqlmBR5MF6EZzbXoGNN59HEXmMHxLwBvzVf%252FkqtLd5LTcBxyXSOlqWhTCsvxKYuRKa4SnVmrDJHzHkD8s4INYU%252FTI6xDHIk58X3QGmlnCzrg4rEj1eSa2WrIxc0W3ToPDFOCOlaWD7zl7KVjHLwrtlZ3ZPYc61DwawH2AMLQpTOKngml6yQZLhqCKRUOm0Zo3B7DT%252FkGDRtHpihj4KszV7Y8%252FQweFQh28S34xskSFa2zpuxtfRg4mmYKxVbRr77A%252FAHthzIQI07p4tGGHBe8mR20%252FoWqfhp3GWZvlfT%252FAqvQx%252F6iBZk5svk%252FNHrqcwWvElLVZ9TJJ%252BTczhBMKpdT16TeM5diEHf7WUtiodkRiAwV4KReA9dTaDGl5PEgyxKmKi0E5mbItH5CLMJiFqNsezWDjDReYZ3ickyxF24hP4ehBV15lxEJ9p9DAJOHN%252BsnP9%252BSWhwxVxvHWf%252FuK445lNi%252BcovQlQ6y%252F%252BXfUDxdOq87auE3RWwyPd429Hc3XdHevRMsQLV98QdbSEOzcFuJafdvdDoYMHj6A4Tcw%252F50G6zloCUZZHzyeVqoVts3c7lsEFJXsZtNN9udxoITTbiz8nSCU2KD2n3qkM%252B8stAl7efp%252BNjoxvg7ycAS4aoAe%252BOYeNGYFn8Zui1Avp7zeygF7dmSFCZofxesfxXV871ILuV2UGFOpoPjmHjRmBZ%252FG%252BhRusOQCRRHHveWpqXQBjvetIl8o4OkdnJhw%252F5Aifauo6HA%252FvCd7wG5ogZ6Ep%252FKlKYu3FTTPsnmSBBWhu07LmRdt5U4CpewIj2qku3ZkvznZVzOB5EWm0d59HEXmMHxLwBvzVf%252FkqtLd5LTcBxyXSOlqWhTCsvxKYuRKa4SnVmrDJHzHkD8s4INYU%252FTI6xDHIk58X3QGmlnCzrg4rEj1eSa2WrIxc0W3ToPDFOCOlaVByXXGibnU2eshaHYP8Oq6k%252BcVXJiV2yKAmeNHH6%252Bw6tpN0b70hfiDbOot0O2YyhRZdK5Fm%252FQIrJkVxx0yPT7Vqo5T5eNyazcwQYiAwHWFlO8x8NmYNxb%252FNMQMtN4n5npNj6UjGfXLoVq44NyGTZasfYs6ZVAotR3xVajijX%252FolNaNWTFA98K1RZ7hgn53zo3l%252B0b4vf7xh4aDM05YG1%252FHe34vRamSkybNP%252B3fQNqB1B9qRtrgJ79NlU99UoH2xklIc%252Fw4WKV7Fr80sU7WXPzI6TmrPLx%252BjAuRcSQpdLa5%252F31hL1iiG6hM8L27AT1LPr7maXtSl2UmmkzwyBQB1XB6kCEXU1KksDScbq6F4grLRiMiVJIpn96N',
      CyotaIPAddress: ip.address(),
      Request: 'Authentication',
      Locale: 'en',
      CyotaDeviceTokenFSO: '',
      CyotaUserAgent: 'Mozilla%252F4.0%2B%2528compatible%253B%2BMSIE%2B7.0%253B%2BWindows%2BNT%2B6.2%253B%2BWOW64%253B%2BTrident%252F7.0%253B%2B.NET4.0E%253B%2B.NET4.0C%253B%2B.NET%2BCLR%2B3.5.30729%253B%2B.NET%2BCLR%2B2.0.50727%253B%2B.NET%2BCLR%2B3.0.30729%2529',
      User: app.username,
      CyotahttpAccept: '*%252F*',
      CyotaDeviceTokenCookie: '1',
      WebcardType: 'SLIM',
      CyotahttpAcceptChars: ''
    })))
    .then(() => {
      return app.getCreditCards();
    });
}

module.exports = login;