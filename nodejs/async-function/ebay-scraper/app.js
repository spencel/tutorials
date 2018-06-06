/*jshint esversion: 6*/
/* jshint ignore: start*/ // async/await keywords are ES7 features not supported by jshint
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import puppeteer from 'puppeteer';

(async () => {
	const browser = await puppeteer.launch({headless:false});
	const page = await browser.newPage();

	// go to ebay
	await page.goto( 'https://www.ebay.com' );
	await console.log( 'ebay home page loaded' );

	// click on sign in if present
	await page.waitForSelector( 'span#gh-ug a' );
	await page.click( 'span#gh-ug a' );

	// input username and password
	var username = 'spence.lank@gmail.com';
	var userPassword = 'qpA}Jh62yEv/';	
	await page.waitForSelector( '#userid' );
	await page.click( '#userid', username );
	await console.log( 'login page loaded' );
	await page.type( '#userid', username, {delay: 100});
	await page.waitForSelector( '#pass' );
	await page.click( '#pass', userPassword );
	await page.type( '#pass', userPassword, {delay: 100} );
	await page.waitForSelector( '#sgnBt' );
	await page.click( '#sgnBt' );

	// Get the "viewport" of the page, as reported by the page.
	const dimensions = await page.evaluate(() => {
	  return {
	    width: document.documentElement.clientWidth,
	    height: document.documentElement.clientHeight,
	    deviceScaleFactor: window.devicePixelRatio
	  };
	});

	console.log('Dimensions:', dimensions);

	//await browser.close();
})();