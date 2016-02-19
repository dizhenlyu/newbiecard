#! /usr/bin/env python
# class = 'l tl' // i.e. ebay

import scrapy
import json

class Spider(scrapy.Spider):
	name = "cashbackmonitor"
	start_urls = [
		"http://www.cashbackmonitor.com/",
	]


	def parse(self, response):
		# item = Item()
		stores = {}
		for sel in response.xpath('//div[@class="fl c"]/table/tr'):
			# store = Store()
			index = ''
			for td in sel.xpath('td'):
				# print td.xpath('[@class, "c"]/text()').extract()
				class_name = str(td.xpath('@class').extract()[0])
				if 'c' == class_name:
					text = td.xpath('text()').extract()
					if text != []:
						index = str(text[0])
				elif 'l tl' == class_name:
					href = str(td.xpath('a/@href').extract()[0])
					url = response.urljoin(href)
					stores[index] = url

		print stores

		# for store in stores:
		# 	yield scrapy.Request(store, callback = self.parse_dir_contents)


	# def parse_dir_contents(self, response):
	# 	for sel in response.xpath('//table/tbody/tr').extract():
	# 		# item = Item()
	# 		# item['name']
	# 		print sel
	# 		for td in sel:
	# 			print td
	# 			exit(0)



	# def parse(self, response):
	# 	filename = response.url.split("/")[-2] + '.html'
	# 	with open(filename, 'wb') as f:
	# 		f.write(response.body)
