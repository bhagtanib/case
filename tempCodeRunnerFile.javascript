import fetch from "node-fetch"

async function searchPeople(search, page){
    try{
        const start = page == 0? 1: page * 10
        const res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(start:${start},origin:SWITCH_SEARCH_VERTICAL,query:(keywords:${encodeURI(search)},flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:resultType,value:List(PEOPLE)),(key:searchId,value:List(87bc48fd-f870-445a-9969-e6cbb68fb2e3))),includeFiltersInResponse:false))&queryId=voyagerSearchDashClusters.14bfbc3ae7fe6444020271ee652fadae`, {
            "headers": {
              "accept": "application/vnd.linkedin.normalized+json+2.1",
              "csrf-token": "ajax:4704597702936272949",
              "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "x-li-lang": "en_US",
              "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people_load_more;qlHOADESR8Sud2cCeGgupg==",
              "x-li-pem-metadata": "Voyager - People SRP=search-results",
              "x-li-track": "{\"clientVersion\":\"1.13.13931\",\"mpVersion\":\"1.13.13931\",\"osName\":\"web\",\"timezoneOffset\":-7,\"timezone\":\"America/Los_Angeles\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1.25,\"displayWidth\":1920,\"displayHeight\":1080}",
              "x-restli-protocol-version": "2.0.0",
              "Referer": "https://www.linkedin.com/search/results/people/?keywords=software%20engineer&origin=SWITCH_SEARCH_VERTICAL&searchId=87bc48fd-f870-445a-9969-e6cbb68fb2e3&sid=hgj",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          });
    }
    catch{

    }
}

(async function () {
    const search = await searchPeople("software engineer", 1)
    console.log(search)
})