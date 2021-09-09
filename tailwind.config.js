module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gooseYellow: "#FADA5A",
				plumRed: "#DE4341",
				grassGreen: "#62B985",
				melancholyBlue: "#33ADD6",
				lightBlue: "#30BEED",
				bayshoreBlue: "#87CCF3",
				black: "#000000",
				graniteGrey: "#5B564D",
				marbleGrey: "#8C8C8C",
				yewLime: "#969696",
				diamondGrey: "#F0F0F0",
				white: "#FFFFFF",
				garyWord:"#B0B0B0",
        		wordBlue:"#0185AE",
       			skyBlue:"#DAF6FF"
			},
			borderRadius: {
				"2px": "2px",
				"10px": "10px"
			},
			fontSize: {
				"25px": "25px",
        		'2.1xl':['25px',{
          			lineHeight:'34px'
        		}] 
			},
			height: {
				"65px": "65px"
			},
			minHeight: {
				"100px": "100px"
			},
      fontFamily:{
        'sans':['Noto Sans']
      },spacing:{
        '8.5':'2.063rem',
        '25':'6.438rem',
        '75':'18.625rem',
        '86':'21.875rem'
      }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],

}
