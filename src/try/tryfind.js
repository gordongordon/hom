const DISTRICK = [
{
	"value": "HKIS",
	"label": "港島區",
	"children": [
		{
		"value": "CWB",
		"label": "銅鑼灣",
		"children" : [
			              { "label" : "新安大廈",
									   	"value" : "CWB0001" },
										{ "label" : "美漢大廈",
											"value" : "CWB0002" },
  								] // End of 銅鑼灣
	   },
	 ] // End of Children of 港島
}, // End of 港島
{
	"value": "KWLO",
	"label": "九龍區",
	"children": [
		{
		"value": "KWT",
		"label": "九龍塘",
		"children" : [
			              { "label" : "畢架山花園",
									   	"value" : "KWT0001" },
										{ "label" : "龍苑",
											"value" : "KWT0002" },
  								] // End of 九龍塘
	   },
	 ] // End of Children of 九龍區
}, // End of 九龍
{
	"value": "NTTV",
	"label": "新界區",
	"children": [
		{
		"value": "MOS",
		"label": "馬鞍山",
		"children" : [
			              { "label" : "迎海",
									   	"value" : "MOS0001" },
										{ "label" : "嵐岸",
											"value" : "MOS0002" },
										{ "label" : "錦泰苑",
											"value" : "MOS0003" },
										{ "label" : "海典居",
											"value" : "MOS0004" },
										{ "label" : "錦禧苑",
											"value" : "MOS0005" },
										{ "label" : "薈晴",
									   	"value" : "MOS0006" },
  									{ "label" : "新港城",
											"value" : "MOS0007" },
										{ "label" : "錦英苑",
											"value" : "MOS0008" },
										{ "label" : "海柏花園",
											"value" : "MOS0009" },
										{ "label" : "雅濤居",
											"value" : "MOS0010" },
										{ "label" : "錦鞍苑 ",
									   	"value" : "MOS0011" },
										{ "label" : "銀湖天峰",
											"value" : "MOS0012" },
										{ "label" : "錦泰苑",
											"value" : "MOS0013" },
										{ "label" : "曉峯灣畔",
											"value" : "MOS0014" },
										{ "label" : "錦龍苑",
											"value" : "MOS0015" },
										{ "label" : "恆安村 ",
									   	"value" : "MOS0016" },
  									{ "label" : "錦豐苑",
											"value" : "MOS0017" },
										{ "label" : "富安花園 ",
											"value" : "MOS0018" },
										{ "label" : "富寶花園 ",
											"value" : "MOS0019" },
										{ "label" : "迎濤灣",
											"value" : "MOS0020" },
										{ "label" : "福安花園",
									   	"value" : "MOS0021" },
										{ "label" : "天宇海",
											"value" : "MOS0022" },
										{ "label" : "馬鞍山中心",
											"value" : "MOS0023" },
										{ "label" : "嘉華星濤灣",
											"value" : "MOS0024" },
										{ "label" : "觀瀾雅軒 ",
											"value" : "MOS0025" },
										{ "label" : "富輝花園  ",
									   	"value" : "MOS0026" },
  									{ "label" : "翠擁華庭 ",
											"value" : "MOS0027" },
										{ "label" : "海典灣",
											"value" : "MOS0028" },
										{ "label" : "雅典居",
									   	"value" : "MOS0029" },
  									{ "label" : "雅景臺",
											"value" : "MOS0030" },
										{ "label" : "耀安村",
											"value" : "MOS0031" },
  								] // End of 馬鞍山
	   },
	 ] // End of Children of 新界區
}  // End of 新界
] // End of Districk

const addressRegion = 'NTTV'
const addressLocation = "MOS"
const addressBuilding = "MOS0001"


function findBuilding( element ) {
  return element.value === addressBuilding ;
}

function findLocation( element ) {
  return element.value === addressLocation;
}

function findRegion( element ) {
  return element.value === addressRegion ;
}

const region = DISTRICK.find(findRegion)
console.log( 'region', region)
const location = region.children.find( findLocation )
console.log( 'location', location )
const building = location.children.find( findBuilding )
console.log( 'building', building )
