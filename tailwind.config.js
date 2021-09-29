module.exports = {
	mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
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
				mask: "rgba(0, 0, 0, 0.31)",
				garyWord:"#B0B0B0",
				wordBlue:"#0185AE",
				skyBlue:"#DAF6FF",
				ask: "#FD5959",
				bid: "#46DF4C",
				textGray: "#D1D2D2",
				mainColor: "#FFA31A",
				lightGray:"#D1D2D2",
				greenWord:"#46DF4C",
				redWord:"#FD5959",
				orangeWord:"#FFA31A"
			},
			fontSize: {
				"25px": "25px",
				"12px": "12px",
				"10px": "10px",
				"14px": "14px",
				"20px": "20px",
				"24px": "24px",
				'2.1xl': [
					'25px',{
						lineHeight:'34px'
                    }
				]
			},
			borderRadius: {
				"2px": "2px",
				"4px":"4px",
				"5px":"5px",
				"10px": "10px",
				"20px": "20px",
				"12px":"12px"
			},
			height: {
				"65px": "65px",
				"27px": "27px",
				"36px": "36px",
				"72px": "72px",
				"275px": "275px",
				"132px":"132px"
			},
			width: {
				"36px": "36px",
				"27px": "27px",
				"72px": "72px",
				"90px": "90px",
				"270px": "270px",
				"101px": "101px",
				"65vh": "65vh",
				"344px":"344px"
			},
			minHeight: {
				"100px": "100px"
			},
			padding: {
				"3px": "3px",
				"6px": "6px",
				"7px": "7px",
				"27px": "27px",
				"9px": "9px",
				"23px": "23px",
				"22px": "22px",
				"12px": "12px",
				"11px": "11px",
				"14px": "14px",
				"13px": "13px",
				"15px": "15px",
				"17px": "17px",
				"25px": "25px",
				"16px": "16px",
				"30px": "30px",
				"26px": "26px",
				"37px": "37px",
			},
			margin: {
				"2px": "2px",
				"3px": "3px",
				"6px": "6px",
				"7px": "7px",
				"8px": "8px",
				"9px": "9px",
				"19px": "19px",
				"15px": "15px",
				"16px": "16px",
				"26px": "26px",
				"25px": "25px",
				"24px": "24px",
				"23px": "23px",
				"10px": "10px",
				"27px": "27px",
				"17px": "17px",
				"28px": "28px",
				"21px": "21px",
				"22px": "22px",
				"20px": "20px",
				"12px": "12px",
				"13px": "13px",
				"30px": "30px",
				"31px": "31px",
				"18px": "18px",
				"39px": "39px",
				"40px": "40px",
				"32px": "32px",
				"35px": "35px",
			},
			boxShadow: {
				"normal": "4px 4px 4px rgba(0, 0, 0, 0.25)",
				"bottom": "0px 0px 16px #E8E8E8"
			},
			spacing:{
				'5px':'5px',
				'15px':'15px',
				'7.5':'1.875rem',
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
