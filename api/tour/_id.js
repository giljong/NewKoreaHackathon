const lodash = require('lodash')
const express = require('express')
const router = express.Router()

router.get('/tour/:id', (req, res) =>{
    let sample = [];
    sample.push({id: 1, thumbnailUrl : "https://lh5.googleusercontent.com/proxy/EoByRQtu7aO9GPHhnmD4K_Tr1iU3tfgGLLH9StGSjoVOwO6k1T4IPGudThvvBudbVxj4dNRRvQl1LKEUp9HyPNuv-d-AwC8U8NqsfiuOCiH64OUfYGM6hZjXhhtObzFESfOwIt5HBob0wYwDpfqk7Qme35o=w100-h134-n-k-no", url : "http://localhost3000/souvenir/1",title : "백두산"});
    sample.push({id: 2, thumbnailUrl : "https://lh6.googleusercontent.com/proxy/lpCqmg_d7Kjobnk-cJ4u37CO7rIIYBv_k7L1E56lUQ7Vtmwi8J5ijmomU3cXeBZ3bnflwjJjPJGwAxZFnNTT_nJGVAhhB6DIM_4mIJEv3I1HzI_W90Oz4WMEkON_1QcCafiwaYKfeF0yzBKU0hatkFG1LjN8BEZzHh4=w100-h134-n-k-no", url : "http://localhost3000/souvenir/2",title : "금강산"});
    sample.push({id: 3, thumbnailUrl : "https://lh3.googleusercontent.com/proxy/l6xNxNs2vvjLRiZOya4Mw8vhag6fvetbZBC1SrkABPZ8qKlPCvezrBeg1iDt0lyLoFUYrGA8_UMDoJSTj9-FIiEQJZE20peB0djC6jVE1-xQ4l0j1ZRSw194E6fn4rrmB2MuHeRcgSDqGzSNMHhYW2LL-G8=w100-h134-n-k-no", url : "http://localhost3000/souvenir/3",title : "주제사상탑"});
    sample.push({id: 4, thumbnailUrl : "https://lh4.googleusercontent.com/proxy/gVrNdGiccb5WnSyzzxOGKkQicQfDjJOnO4WeD30MS3g8-uo4hWD4cj9AVMRoZHcYz4wdQs1L7trONF6gZPLaJCKl725yy5j3vqz2iHf49wbrXzVkesbLAMP1Lkx17Pg0LK3tmdVjMiCc0mkf07tnuSvsIfN4ZWgVHuk=w100-h134-n-k-no", url : "http://localhost3000/souvenir/4",title : "묘향산"});
    sample.push({id: 5, thumbnailUrl : "https://lh5.googleusercontent.com/-c9JVKJ9EF4M/W2wQ7kdYYzI/AAAAAAAA7oI/W5UOVNtKfkIgs09MdWbigSesygmULDUlwCLIBGAYYCw/w100-h134-n-k-no/", url : "http://localhost3000/souvenir/5",title : "김일성광장"});
    sample.push({id: 6, thumbnailUrl : "https://lh4.googleusercontent.com/-1qzVFO1eElU/USkFUh60hJI/AAAAAAAAH5A/Vaq60jEluB4vkpy8eMN3roUrj1X9G-VHgCLIB/w100-h134-n-k-no/", url : "http://localhost3000/souvenir/6",title : "금수산태양궁전"});
    sample.push({id: 7, thumbnailUrl : "https://lh3.googleusercontent.com/proxy/w8j-J0jQ_AMqkfBMew2g-VmaYlycBkV3hp5U2rZ5IPxqQQegbGdeMwwTmRBtuosFEGcXrLDMcnF1UafMgrc49udqqhjm8kui0spa2Lan_qMeZzGIL7MO0TLO0pgqXd7kKxBNB044o0RfA5wW3F-cUMkQ9xQ=w100-h134-n-k-no", url : "http://localhost3000/souvenir/7",title : "개선문"});
    sample.push({id: 8, thumbnailUrl : "https://lh6.googleusercontent.com/-RR_01FdmBBM/WcFWEV0m5HI/AAAAAAAACSE/WtM2G4B91DURtEvn2hZ7TUZC1_etbm0agCLIBGAYYCw/w100-h134-n-k-no/", url : "http://localhost3000/souvenir/8",title : "마식령스키장"});
    sample.push({id: 9, thumbnailUrl : "https://lh4.googleusercontent.com/-I4PILgHLNAc/WoCea6uOfJI/AAAAAAAABqs/7qKBGH7rNt81cV81PfKhN5veoqwkMbrSwCLIBGAYYCw/w100-h134-n-k-no/", url : "http://localhost3000/souvenir/9",title : "만수대대기념비"});
    sample.push({id: 10, thumbnailUrl : "https://lh3.googleusercontent.com/-FdM20U53uFQ/W8qDxPzn1eI/AAAAAAAA7R0/UtV6fWy074AWlfzJAcT11xvcOZ_T_gzmQCLIBGAYYCw/w100-h134-n-k-no/", url : "http://localhost3000/souvenir/10",title : "조중우의교"});
    res.json(_.filter(sample, s => s.id === req.params.id)
})

module.exports = router