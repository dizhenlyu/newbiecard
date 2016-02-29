#! /usr/bin/env python
# class = 'l tl' // i.e. ebay

import scrapy
import json
import sys
import time

class Spider(scrapy.Spider):
	name = "cashbackmonitor"
	start_urls = [
		"http://www.cashbackmonitor.com/",
	]

	store_title_path = '//div[@style="width:100%;text-align:center;"]/h1/span[@class="font2 s22"]/text()'
	front_page_store_path = '//div[@class="fl c"]/table/tr'
	def parse(self, response):
		# item = Item()
		stores = {}
		for sel in response.xpath(front_page_store_path):
			# store = Store()
			rate = ''
			name = ''
			url = ''
			for td in sel.xpath('td'):
				class_name = str(td.xpath('@class').extract()[0])
				if 'c' == class_name:
					text = td.xpath('text()').extract()
					if text == []:
						rate = str(td.xpath('a/text()').extract()[0])
						stores[name] = {'name': name, 'url': url, 'rate': rate}
				elif 'l tl' == class_name:
					href = str(td.xpath('a/@href').extract()[0])
					url = response.urljoin(href)
					name = str(td.xpath('a/text()').extract()[0])


		for store in stores.values():
			yield scrapy.Request(store['url'], callback = self.parse_each_website)


	def parse_each_website(self, response):
		store_detail = {}
		store_detail['name'] = str(response.xpath(self.store_title_path).extract()[0])
		store_detail['websites'] = []
		for sel in response.xpath('//td[@class="sp half"]/div[@class="half fl"]/table/tr'):
			# item = Item()
			# item['name']
			url = ''
			name = ''
			rate = ''
			website = []
			for td in sel.xpath('td'):
				class_name = str(td.xpath('@class').extract()[0])
				if 'l lo' == class_name:
					href = str(td.xpath('a/@href').extract()[0])
					url = response.urljoin(href)
					name = str(td.xpath('a/text()').extract()[0])
				elif 'l' == class_name:
					rate = td.xpath('a/text()').extract()
					if rate == []:
						rate = str(td.xpath('text()').extract()[0])
						rate = rate.replace(' ', '')
						rate = rate.replace("\r", '')
						rate = rate.replace("\n", '')
						rate = rate.replace("\t", '')
					else:
						rate = str(rate[0])
					website.append({'name': name, 'url':url, 'rate': rate})
			store_detail['websites'].extend(website)
		print store_detail['name']
		print store_detail['websites']
		yield store_detail



	# def parse(self, response):
	# 	filename = response.url.split("/")[-2] + '.html'
	# 	with open(filename, 'wb') as f:
	# 		f.write(response.body)
