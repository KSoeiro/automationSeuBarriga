const config = {
    use: {
      baseURL: 'https://seubarriga.wcaquino.me/login',
      headless: true,
      screenshot: 'only-on-failure', 
    },
    
    projects: [
      {
        name: 'Firefox_1280x720',
        use: {
          browserName: 'firefox',
          viewport: { width: 1280, height: 720 },
        },
      },
      {
        name: 'Chromium_1280x720',
        use: {
          browserName: 'chromium',
          viewport: { width: 1280, height: 720 },
        },
      },
    ],
  }
  
  module.exports = config