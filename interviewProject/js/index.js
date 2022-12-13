"use strict";

var sendData = false;

//== store的input ==
$("#storeInput").on('keydown keyup keypress change focus blur',function(){
    
    // 選項字正規式
    // https://rubular.com/r/2rkJ2SrQQTeN7d
    let storeRegex = /^store[123]\b/i;

    if( storeRegex.test($("#storeInput").val())){
        // alert("符合規則");
        $("#storeInput").siblings($(".errorMessage")).text("");
        $("#storeInput").removeClass("-error");
        sendData = true;
    }else{
        // alert("不符合規則");
        // console.log("no");
        sendData = false;
        $("#storeInput").siblings($(".errorMessage")).text("wrong format");
        $("#storeInput").addClass("-error");
    }
    // 如為空值
    if( $(this).val() == '' ){
        $("#storeInput").siblings($(".errorMessage")).text("required");
        $("#storeInput").addClass("-error");
        sendData = false;
    }else{
        // $("#storeInput").siblings($(".errorMessage")).text("");
    }
    
})

//== name的input ==
$("#userName").on('keydown keyup keypress change focus blur',function(){
    
    // 中英文正規式
    // let uNameRegex = /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/;
    let uNameRegex = /^[A-Za-z\u4e00-\u9fa5]+$/;

    if( uNameRegex.test($("#userName").val())){
        // alert("符合規則");
        $("#userName").siblings($(".errorMessage")).text("");
        $("#userName").removeClass("-error");
        sendData = true;
    }else{
        // alert("不符合規則");
        // console.log("no");
        sendData = false;
        $("#userName").siblings($(".errorMessage")).text("wrong format");
        $("#userName").addClass("-error");
    }
    // 如為空值
    if( $(this).val() == '' ){
        $("#userName").siblings($(".errorMessage")).text("required");
        $("#userName").addClass("-error");
        sendData = false;
    }else{
        // $("#userName").siblings($(".errorMessage")).text("");
    }
    
})

//== phone的input ==
$("#userPhone").on('keydown keyup keypress change focus blur',function(){
    
    // 手機驗證正規式
    let MobileReg = /^09[0-9]{8}$/;
    
    if( MobileReg.test($("#userPhone").val())){
        // alert("符合規則");
        // console.log("yes");
        $("#userPhone").siblings($(".errorMessage")).text("");
        // $("#userPhone").removeCss("border-color","#E06D6D")
        // $("#userPhone").classList.remove("-error")
        $("#userPhone").removeClass("-error");
        sendData = true;
    }else{
        // alert("不符合規則");
        // console.log("no");
        sendData = false;
        $("#userPhone").siblings($(".errorMessage")).text("wrong format");
        $("#userPhone").addClass("-error");
        // $("#userPhone").classList.add("-error")
        // $("#userPhone").css("border-color","#E06D6D")
    }

    // 如為空值
    if( $(this).val() == '' ){
        $("#userPhone").siblings($(".errorMessage")).text("required");
        $("#userPhone").addClass("-error");
        sendData = false;
    }else{
        // $("#userPhone").siblings($(".errorMessage")).text("");
    }

})

//== Amount of consumption的input ==
$("#userPayMoney").on('keydown keyup keypress change focus blur',function(){
    
    // 正整數正規式
    let numRegex = /^[1-9]\d*$/;

    if( numRegex.test($("#userPayMoney").val())){
        // alert("符合規則");
        $("#userPayMoney").siblings($(".errorMessage")).text("");
        $("#userPayMoney").removeClass("-error");
        sendData = true;
    }else{
        // alert("不符合規則");
        sendData = false;
        $("#userPayMoney").siblings($(".errorMessage")).text("wrong format");
        $("#userPayMoney").addClass("-error");
    }
    // 如為空值
    if( $(this).val() == '' ){
        $("#userPayMoney").siblings($(".errorMessage")).text("required");
        $("#userPayMoney").addClass("-error");
        sendData = false;
    }else{
        // $("#userPayMoney").siblings($(".errorMessage")).text("");
    }
    
})

//== payment的input ==
$("#payment").on('keydown keyup keypress change focus blur',function(){
    
    // 選項字正規式
    let dPaymentRegex = /digital payment/i;
    let atmRegex = /atm/i;

    if( dPaymentRegex.test($("#payment").val()) || atmRegex.test($("#payment").val())){
        // alert("符合規則");
        $("#payment").siblings($(".errorMessage")).text("");
        $("#payment").removeClass("-error");
        sendData = true;
    }else{
        // alert("不符合規則");
        // console.log("no");
        sendData = false;
        $("#payment").siblings($(".errorMessage")).text("wrong format");
        $("#payment").addClass("-error");
    }
    // 如為空值
    if( $(this).val() == '' ){
        $("#payment").siblings($(".errorMessage")).text("required");
        $("#payment").addClass("-error");
        sendData = false;
    }else{
        // $("#payment").siblings($(".errorMessage")).text("");
    }
    
});

document.addEventListener("click", function(e){

    if( e.target.classList.contains("btn") ){

        e.preventDefault();
        
        console.log(sendData);
        
        $("#submitBtn").css("display", "none");
        
        if( sendData == true ){
            console.log("Y");
            // $(this).siblings($("#failureBtn")).css("display", "none");
            // $(this).siblings($("#successBtn")).css("display", "block");
            $("#successBtn").css("display", "block");
            $("#failureBtn").css("display", "none");
        }else{
            console.log("N");
            // $(this).siblings($("#successBtn")).css("display", "none");
            // $(this).siblings($("#failureBtn")).css("display", "block");
            $("#failureBtn").css("display", "block");
            $("#successBtn").css("display", "none");
        }
    }
});

// Form的scroll
new Vue ({

    el:'#scrollForm',

    data:{},

    methods: {
        scroll(e){
            e.preventDefault();
            scroll({
                top: 750,
                left: 0,
                behavior: "smooth",
            })
        }

    },
})


// new Vue ({

//     el:'#myForm',

//     data:{
//         stores:[
//             {name:'store1', value:'store1'}, 
//             {name:'store2', value:'store2'}, 
//             {name:'store3', value:'store3'}
//         ],
        
//         userPhone:''
//     },

//     methods:{
//         test(e){
//             e.preventDefault();
//             // console.log(e.target);
//             console.log( userPhone);
//         }
//         
//     },

//     watch:{
        
//     }
// });