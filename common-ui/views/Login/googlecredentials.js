module.exports = {
	OAUTHURL    :   'https://accounts.google.com/o/oauth2/auth?',
	VALIDURL    :   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=',
	SCOPE       :  [
						'https://www.googleapis.com/auth/userinfo.profile',
						'https://www.googleapis.com/auth/userinfo.email'
				   ],
	CLIENT_ID   :  '858093863410-j9ma1i7lgapupip1ckegc61plrlledtq.apps.googleusercontent.com',
	CLIENT_SECRET :  'ulF8YMRown0GYmbWCN7ancF7',
	REDIRECT_URL   : 'http://localhost:8080/api/auth/success/google',
	TYPE        :   'token'
};
