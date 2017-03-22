# -*- coding:utf-8 -*-

from flask import Flask, request
from flask_assets import Environment, Bundle

app = Flask(__name__, static_url_path='/static')
app.config['TEMPLATES_AUTO_RELOAD'] = True
assets = Environment(app)

css = Bundle(
	'css/mealMaker.css',
	output='css_all.css'
		)
js = Bundle(
	'js/functionnalty.js', 'js/mealMaker.js',
	output='js_all.js'
	)
assets.register('css_all', css)
assets.register('js_all', js)
@app.route('/')
def index():
	return app.send_static_file('index.html')
	
if __name__=='__main__':
	app.run(debug=True, host="0.0.0.0")

