console.log('Processing...')
const puppeteer = require('puppeteer')

async function scrapeProduct(url) {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(60000);
    await page.goto(url)

    let [web_newc] = await page.$x('//*[@id="main_table_countries_today"]/tbody[1]/tr[1]/td[4]')
    let newc = await web_newc.getProperty('textContent')
    let new_cases = await newc.jsonValue()
    console.log('✅ | Loaded New Cases')

    let [web_newdeaths] = await page.$x('//*[@id="main_table_countries_today"]/tbody[1]/tr[1]/td[6]')
    let newd = await web_newdeaths.getProperty('textContent')
    let new_d = await newd.jsonValue()
    console.log('✅ | Loaded New Deaths')
    let [web_newr] = await page.$x('//*[@id="main_table_countries_today"]/tbody[1]/tr[1]/td[8]')
    let newr = await web_newr.getProperty('textContent')
    let new_r = await newr.jsonValue()
    console.log('✅ | Loaded New Recoveries')
    let [web_ac] = await page.$x('//*[@id="main_table_countries_today"]/tbody[1]/tr[1]/td[9]')
    let ac = await web_ac.getProperty('textContent')
    let a_c = await ac.jsonValue()
    console.log('✅ | Loaded Active Cases')
    let [web_tr] = await page.$x('//*[@id="main_table_countries_today"]/tbody[1]/tr[1]/td[7]')
    let webtr = await web_tr.getProperty('textContent')
    let t_r = await webtr.jsonValue()
    console.log('✅ | Loaded Total Recoveries')
    let [web_tc] = await page.$x('//*[@id="main_table_countries_today"]/tbody[1]/tr[1]/td[3]')
    let webtc = await web_tc.getProperty('textContent')
    let t_c = await webtc.jsonValue()
    console.log('✅ | Loaded Total Cases')
    let table = {
        "new_cases": new_cases,
        "new_recoveries": new_r,
        "new_deaths": new_d,
        "active_cases": a_c,
        "total_recoveries": t_r,
        "total_cases": t_c 

    }
    console.table(table)





    await browser.close()
}
scrapeProduct('https://www.worldometers.info/coronavirus/')
//Entry from AMAL (10-D Boys)
