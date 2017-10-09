steps={[
    {  // welcome
       id : "welcome",
       message: "歡迎你今天怎麼樣?",
       trigger: "welcomeOptions"
    },
    {  // on.OPTION1..n
       id: "welcomeOptions",
       options : [
           { value: "mrhouse", label: "讓我介紹Mr.Houseee", trigger: "mrhouse"}, // Option1
           { value: "buy", label: "買房子", trigger: "buy"}  // Option2
          ]
    },
    {  // mrhouse
       id: "mrhouse",
       message: "讓我介紹Mr.Housee",
       trigger: "mrhouseOptions"  
    },
    {  //on.OPTION1 .. n
       id: "mrhouseOptions",
       options: [
           { value: "buy", label: "buy", trigger: "buy" },
           { value: "stop", label: "stop", trigger: "stop" }
          ]
    },

    {  // buy with on.NEXT
       id : "buy",
       message: "你準備找房子了嗎",
       trigger: "getBuilding"
    },

    {  // getBuilding
       id: 'getBuilding',
       message: "你可以選擇一個你有興趣購買的房子", 
       trigger: "getBuildingUserInput"
       // MISSED " validation = false"
    },
    {  // on.FILLED
       id: "getBuildingUserInput",
       user: true,
       trigger: "isBuyWithLease",
    },

    {  // isBuyWithLease
       id: "isBuyWithLease",
       message: "我可以賣買連租賃嗎?",
       trigger: "isBuyWithLeaseOptions"  
    },
    {  //on.OPTION1 .. n
       id: "isBuyWithLeaseOptions",
       options: [
           { value: "yes", label: "yes", trigger: "getNetSizeMin" },
           { value: "no", label: "no", trigger: "getNetSizeMin" }
          ]
    },

    {  // getNetSizeMin
        id: 'getNetSizeMin',
        message: "最少實用面積/呎?", 
        trigger: "getNetSizeMinUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getNetSizeMinUserInput",
        user: true,
        trigger: "getPartition",
     },    
    

    // Input Field
    {  // getPartition
        id: 'getPartition',
        message: "間隔", 
        trigger: "getPartitionUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getPartitionUserInput",
        user: true,
        trigger: "isPetAllowed",
     },    
     
    // toggle
    {  // 
        id: "isPetAllowed",
        message: "可養寵物嗎?",
        trigger: "isPetAllowedOptions"  
     },
     {  //on.OPTION1 .. n
        id: "isPetAllowedOptions",
        options: [
            { value: "yes", label: "yes", trigger: "getSalePrice" },
            { value: "no", label: "no", trigger: "getSalePrice" }
           ]
     },

         // Input Field
    {  // getXXX
        id: 'getSalePrice',
        message: "付出預算上限?", 
        trigger: "getSalePriceUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getSalePriceUserInput",
        user: true,
        trigger: "getLastName",
     },  

         // Input Field
    {  // getXXX
        id: 'getLastName',
        message: "我可以有你的姓氏?", 
        trigger: "getLastNameUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getLastNameUserInput",
        user: true,
        trigger: "getFirstName",
     },    

         // Input Field
    {  // getXXX
        id: 'getFirstName',
        message: "我可以有你的名字嗎?", 
        trigger: "getFirstNameUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getFirstNameUserInput",
        user: true,
        trigger: "getEmail",
     },    
    // Input Field
    {  // getXXX
        id: 'getEmail',
        message: "我可以有你的電子郵件地址?", 
        trigger: "getEmailUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getEmailUserInput",
        user: true,
        trigger: "getPhone",
     },   

    // Input Field
    {  // getXXX
        id: 'getPhone',
        message: "我可以有你的電話號碼?", 
        trigger: "getPhoneUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getPhoneUserInput",
        user: true,
        trigger: "stop",
     },   

    {   // stop
        id: "stop",
        message: "stop",
        end: true
    }
  ]}