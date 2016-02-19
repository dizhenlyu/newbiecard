# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class Item():
	store = []

class Store(scrapy.Item):
    # define the fields for your item here like:
    number = scrapy.Field()
	name = scrapy.Field()
	url = scrapy.Field()
	cashback = []
	tavel_mile = []
	points = []

class Website(scrapy.Item):
	website = scrapy.Field()
	rate = scrapy.Field()
