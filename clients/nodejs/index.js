var messages = require('./calculatorpb/calculator_pb');
var services = require('./calculatorpb/calculator_grpc_pb');

var grpc = require('@grpc/grpc-js');

// function main() {
//     var target = 'localhost:50051';
//
//     var client = new services.CalculatorServiceClient(target,
//         grpc.credentials.createInsecure());
//
//     var request = new messages.SumRequest();
//     request.setFirstNum(2)
//     request.setSecondNum(3)
//
//     client.sum(request,function (err,response) {
//         if (err) {
//             console.log("Error occurred:",err)
//         } else {
//             console.log("Sum is :",response.getResult())
//         }
//     })
// }

function main() {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://localhost:9877/api/v3/reviewtraveller/dummy?itId=ccc7423c1c05f3385365609d4999397a5a3bb849&crId=f4c5d919-a587-4be2-89bc-b263c60ebb6b&region=ae&currency=aed&language=eng&cmpId=',
        headers: {
            'Connection': 'keep-alive',
            'src': 'mmt',
            'mcid': '3db7ea88-e54e-464a-8286-9f636faeb653',
            'app-ver': '8.0.0',
            'lob': 'B2C',
            'pfm': 'PWA',
            'device-id': '3db7ea88-e54e-464a-8286-9f636faeb653',
            'x-flt': 'eyJjIjoiRSIsInAiOiJBLTFfQy0wX0ktMCIsInQiOiIiLCJzIjoiREVMLURYQi0yMDIxMTIzMSJ9',
            'os': 'Android',
            'ab': '{"FRM":1,"REUSABLE":0,"msf":1,"PRE":2,"BIIGCC":0,"testAB":0,"mbrta":0,"SPA":0,"INSGHT":0,"OTP":0,"mnthn":false,"CLS":1,"PRO":0,"FLKT":0,"PBC":0,"BFFL":0,"FSA":1,"RNP":2,"PWA":1,"DDDF":0,"mema":0,"BNTD":1,"mras":1,"mbrt":0,"BCG":0,"bntdp":0,"flightInfoOptionSequenceKey":"FNO","INSBTM":0,"mbit":0,"mdl":1,"SIM":0,"SEM":0,"PTA":0,"CABF":1,"ZCE":1,"BSGCC":0,"PTF":0,"ALTF":0,"FLK":1,"IRR":1,"RTM":1,"ZCS":1,"mecj":0,"FLS":1,"MRT":0,"INT":1,"ffmove":0,"FFBEN":0,"FLT_RT_YOLO":0,"SRT":1,"BIRT":0,"NHP":0,"mal":1,"msfn":0,"mgsf":0,"NUG":0,"MOB":0,"AGGRNEW":1,"INSTP":0,"ALTFLT":0,"ADDONM":0,"COU":0,"HIRJI":false,"MYPRTA":0,"CANCT":0,"INSNEW":0,"ALTFLTCORP":0,"dd_exp_name":"MABFALSE","marc":0,"SOR":0,"msa":1,"ALF":1,"REUSABLERT":0,"PWAAPPDOWNLIST":0}',
            'currency': 'aed',
            'x-user-rc': 'NEWDELHI',
            'x-user-ip': '122.177.106.109',
            'domain': 'ae',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'Content-Type': 'application/json',
            'region': 'ae',
            'Accept': 'application/json',
            'x-user-cc': 'IN',
            'language': 'eng',
            'Origin': 'https://www.makemytrip.com',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://www.makemytrip.com/',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
        }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


}

main();