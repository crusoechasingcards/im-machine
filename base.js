const baseCards = [
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.00489857
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.00979713
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.0146957
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.01959426
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.02449283
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.02939139
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.03428996
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.03918852
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.04408709
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.04898565
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.05388422
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.05878278
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.06368135
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.06857991
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.07347848
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.07837704
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.08327561
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.08817417
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.09307274
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.0979713
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.10286987
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.10776843
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.112667
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.11756556
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.12246413
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.12736269
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.13226126
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.13715982
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.14205839
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.14695695
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.15185552
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.15675408
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.16165265
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.16655121
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.17144978
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.17634834
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.18124691
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.18614547
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.19104404
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.1959426
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.20084117
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.20573973
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.2106383
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.21553686
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.22043543
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.22533399
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.23023256
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.23513112
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.24002969
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.24492825
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.24982682
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.25472538
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.25962395
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.26452251
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.26942108
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.27431964
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.27921821
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.28411677
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.28901534
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.2939139
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.29881247
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.30371103
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.3086096
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.31350816
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.31840673
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.32330529
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.32820386
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.33310242
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.33800099
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.34289955
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.34779812
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.35269668
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.35759525
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.36249381
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.36739238
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.37229095
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.37718951
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.38208808
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.38698664
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.39188521
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.39678377
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.40168234
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.4065809
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.41147947
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.41637803
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.4212766
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.42617516
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.43107373
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.43597229
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action",
    "Type": "base",
    "Quantity": 99,
    "CDF": 0.44087086
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.44210787
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.44334488
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.44458189
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.4458189
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.44705591
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.44829292
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.44952994
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45076695
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45200396
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45324097
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45447798
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45571499
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.456952
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45818902
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.45942603
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46066304
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46190005
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46313706
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46437407
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46561108
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.4668481
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46808511
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.46932212
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47055913
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47179614
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47303315
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47427016
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47550717
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47674419
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.4779812
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.47921821
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.48045522
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.48169223
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.48292924
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.48416625
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.4843147
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48446314
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48461158
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48476002
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48490846
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.4850569
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48520534
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48535379
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48550223
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48565067
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48579911
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48594755
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48609599
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48624443
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48639287
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48654132
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48668976
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.4868382
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48698664
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48713508
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48728352
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48743196
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48758041
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48772885
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48787729
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48802573
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48817417
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48832261
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48847105
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.4886195
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48876794
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48891638
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48906482
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.48921326
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.4893617
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.48990599
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49045027
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49099456
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49153884
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49208313
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49262741
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.4931717
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49371598
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49426027
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49480455
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49534884
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49589312
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49643741
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49698169
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49752598
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49807026
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49861455
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49915883
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.49970312
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.5002474
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50079169
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50133597
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50188026
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50242454
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50296883
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50351311
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.5040574
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50460168
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50514597
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50569025
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50623454
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50677882
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50732311
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50786739
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.50841168
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.50890648
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.50940129
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.50989609
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.5103909
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.5108857
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.5113805
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51187531
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51237011
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51286492
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51335972
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51385453
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51434933
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51484414
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51533894
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51583375
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51632855
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51682335
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51731816
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51781296
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51830777
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51880257
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51929738
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.51979218
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52028699
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52078179
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.5212766
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.5217714
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.5222662
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52276101
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52325581
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52375062
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52424542
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52474023
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52523503
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.52572984
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52597724
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52622464
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52647204
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52671945
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52696685
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52721425
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52746165
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52770905
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52795646
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52820386
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52845126
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52869866
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52894607
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52919347
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52944087
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52968827
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.52993568
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53018308
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53043048
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53067788
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53092528
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53117269
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53142009
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53166749
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53191489
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.5321623
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.5324097
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.5326571
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.5329045
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.5331519
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53339931
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53364671
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53389411
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53414151
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.53438892
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.5344384
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53448788
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53453736
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53458684
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53463632
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.5346858
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53473528
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53478476
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53483424
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53488372
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.5349332
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53498268
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53503216
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53508164
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53513112
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.5351806
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53523008
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53527956
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53532905
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53537853
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53542801
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53547749
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53552697
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53557645
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53562593
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53567541
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53572489
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53577437
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53582385
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53587333
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53592281
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53597229
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53602177
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53607125
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.53612073
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.53854527
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.54096982
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.54339436
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.5458189
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.54824344
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.55066799
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.55309253
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.55551707
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.55794161
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.56036616
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.5627907
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.56521524
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.56763978
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.57006432
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.57248887
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.57491341
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.57733795
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.57976249
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.58218704
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.58461158
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.58703612
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.58946066
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.59188521
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.59430975
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.59673429
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.59915883
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.60158337
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.60400792
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.60643246
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.608857
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.61128154
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.61370609
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.61613063
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.61855517
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Action Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.62097971
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62221672
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62345374
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62469075
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62592776
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62716477
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62840178
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.62963879
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.6308758
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63211282
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63334983
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63458684
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63582385
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63706086
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63829787
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.63953488
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.6407719
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64200891
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64324592
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64448293
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64571994
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64695695
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64819396
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.64943097
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65066799
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.651905
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65314201
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65437902
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65561603
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65685304
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65809005
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.65932707
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66056408
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66180109
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.6630381
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66427511
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66551212
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66674913
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66798615
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.66922316
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67046017
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67169718
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67293419
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.6741712
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67540821
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67664523
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67788224
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.67911925
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68035626
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68159327
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68283028
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68406729
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.6853043
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68654132
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68777833
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.68901534
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.68916378
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.68931222
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.68946066
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.6896091
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.68975755
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.68990599
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69005443
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69020287
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69035131
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69049975
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69064819
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69079664
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69094508
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69109352
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69124196
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.6913904
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69153884
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69168728
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69183572
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69198417
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69213261
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69228105
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69242949
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69257793
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69272637
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69287481
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69302326
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.6931717
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69332014
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69346858
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69361702
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69376546
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.6939139
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69406235
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69421079
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69435923
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69450767
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69465611
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69480455
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69495299
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69510143
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69524988
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69539832
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69554676
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.6956952
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69584364
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69599208
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69614052
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69628897
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69643741
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69658585
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69673429
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69688273
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69703117
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.69717961
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.6977239
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.69826818
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.69881247
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.69935675
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.69990104
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70044532
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70098961
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70153389
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70207818
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70262246
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70316675
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70371103
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70425532
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.7047996
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70534389
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70588817
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70643246
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70697674
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70752103
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70806531
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.7086096
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70915388
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.70969817
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71024245
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71078674
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71133102
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71187531
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71241959
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71296388
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71350816
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71405245
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71459673
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71514102
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.7156853
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71622959
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71677387
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71731816
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71786244
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71840673
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.71895101
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.7194953
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72003958
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72058387
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72112815
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72167244
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72221672
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72276101
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72330529
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72384958
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72439386
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72493815
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72548243
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72602672
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.726571
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.72711529
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.72761009
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.7281049
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.7285997
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.72909451
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.72958931
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73008412
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73057892
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73107373
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73156853
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73206333
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73255814
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73305294
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73354775
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73404255
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73453736
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73503216
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73552697
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73602177
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73651658
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73701138
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73750619
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73800099
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73849579
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.7389906
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.7394854
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.73998021
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74047501
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74096982
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74146462
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74195943
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74245423
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74294904
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74344384
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74393864
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74443345
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74492825
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74542306
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74591786
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74641267
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74690747
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74740228
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74789708
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74839189
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74888669
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.74938149
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.7498763
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.7503711
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75086591
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75136071
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75185552
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75235032
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75284513
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75333993
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75383474
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.75432954
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75457694
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75482434
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75507175
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75531915
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75556655
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75581395
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75606136
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75630876
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75655616
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75680356
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75705096
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75729837
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75754577
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75779317
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75804057
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75828798
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75853538
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75878278
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75903018
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75927759
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75952499
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.75977239
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76001979
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76026719
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.7605146
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.760762
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.7610094
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.7612568
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76150421
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76175161
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76199901
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76224641
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76249381
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76274122
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76298862
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76323602
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76348342
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76373083
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76397823
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76422563
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76447303
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76472044
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76496784
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76521524
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76546264
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76571004
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76595745
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76620485
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76645225
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76669965
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76694706
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76719446
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76744186
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76768926
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.76793667
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76798615
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76803563
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76808511
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76813459
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76818407
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76823355
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76828303
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76833251
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76838199
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76843147
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76848095
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76853043
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76857991
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76862939
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76867887
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76872835
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76877783
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76882731
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76887679
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76892627
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76897575
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76902524
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76907472
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.7691242
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76917368
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76922316
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76927264
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76932212
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.7693716
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76942108
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76947056
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76952004
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76956952
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.769619
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76966848
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76971796
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76976744
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76981692
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.7698664
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76991588
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.76996536
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77001484
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77006432
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77011381
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77016329
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77021277
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77026225
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77031173
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77036121
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77041069
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77046017
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77050965
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77055913
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77060861
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.77065809
  },
  {
    "Player": "Jalen Brunson",
    "Team": "New York Knicks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.77308263
  },
  {
    "Player": "Paolo Banchero",
    "Team": "Orlando Magic",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.77550717
  },
  {
    "Player": "Keyonte George",
    "Team": "Utah Jazz",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.77793172
  },
  {
    "Player": "Kyrie Irving",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.78035626
  },
  {
    "Player": "LaMelo Ball",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.7827808
  },
  {
    "Player": "Cam Whitmore",
    "Team": "Houston Rockets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.78520534
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.78762989
  },
  {
    "Player": "Donovan Mitchell",
    "Team": "Cleveland Cavaliers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.79005443
  },
  {
    "Player": "Cade Cunningham",
    "Team": "Detroit Pistons",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.79247897
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.79490351
  },
  {
    "Player": "Anthony Black",
    "Team": "Orlando Magic",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.79732806
  },
  {
    "Player": "Jett Howard",
    "Team": "Orlando Magic",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.7997526
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.80217714
  },
  {
    "Player": "Tyrese Haliburton",
    "Team": "Indiana Pacers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.80460168
  },
  {
    "Player": "Devin Booker",
    "Team": "Phoenix Suns",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.80702622
  },
  {
    "Player": "Gradey Dick",
    "Team": "Toronto Raptors",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.80945077
  },
  {
    "Player": "Taylor Hendricks",
    "Team": "Utah Jazz",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.81187531
  },
  {
    "Player": "Scottie Barnes",
    "Team": "Toronto Raptors",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.81429985
  },
  {
    "Player": "Jaime Jaquez Jr.",
    "Team": "Miami Heat",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.81672439
  },
  {
    "Player": "Mikal Bridges",
    "Team": "Brooklyn Nets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.81914894
  },
  {
    "Player": "James Harden",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.82157348
  },
  {
    "Player": "Kawhi Leonard",
    "Team": "Los Angeles Clippers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.82399802
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.82642256
  },
  {
    "Player": "GG Jackson II",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.82884711
  },
  {
    "Player": "Jordan Hawkins",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.83127165
  },
  {
    "Player": "Nick Smith Jr.",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.83369619
  },
  {
    "Player": "Anthony Edwards",
    "Team": "Minnesota Timberwolves",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.83612073
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.83854527
  },
  {
    "Player": "Dereck Lively II",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.84096982
  },
  {
    "Player": "Brandin Podziemski",
    "Team": "Golden State Warriors",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.84339436
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.8458189
  },
  {
    "Player": "Bilal Coulibaly",
    "Team": "Washington Wizards",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.84824344
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.85066799
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.85309253
  },
  {
    "Player": "De'Aaron Fox",
    "Team": "Sacramento Kings",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.85551707
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.85794161
  },
  {
    "Player": "Jimmy Butler",
    "Team": "Miami Heat",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.86036616
  },
  {
    "Player": "Anthony Davis",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.8627907
  },
  {
    "Player": "Kevin Durant",
    "Team": "Phoenix Suns",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.86521524
  },
  {
    "Player": "Jaylen Brown",
    "Team": "Boston Celtics",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.86763978
  },
  {
    "Player": "Joel Embiid",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.87006432
  },
  {
    "Player": "Jarace Walker",
    "Team": "Indiana Pacers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.87248887
  },
  {
    "Player": "Chet Holmgren",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.87491341
  },
  {
    "Player": "Trae Young",
    "Team": "Atlanta Hawks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.87733795
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.87976249
  },
  {
    "Player": "Zion Williamson",
    "Team": "New Orleans Pelicans",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.88218704
  },
  {
    "Player": "Tyrese Maxey",
    "Team": "Philadelphia 76ers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.88461158
  },
  {
    "Player": "Zach LaVine",
    "Team": "Chicago Bulls",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.88703612
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.88946066
  },
  {
    "Player": "Cason Wallace",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.89188521
  },
  {
    "Player": "Damian Lillard",
    "Team": "Milwaukee Bucks",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.89430975
  },
  {
    "Player": "Klay Thompson",
    "Team": "Golden State Warriors",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.89673429
  },
  {
    "Player": "Jalen Hood-Schifino",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.89915883
  },
  {
    "Player": "Ja Morant",
    "Team": "Memphis Grizzlies",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.90158337
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.90400792
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.90771895
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.91142999
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.91514102
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.91885205
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.92256309
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.92627412
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.92998516
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.93369619
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.93740722
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation",
    "Type": "base",
    "Quantity": 75,
    "CDF": 0.94111826
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.94235527
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.94359228
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.94482929
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.9460663
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.94730332
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.94854033
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.94977734
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.95101435
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.95225136
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation Blue",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.95348837
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95363681
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95378525
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.9539337
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95408214
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95423058
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95437902
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95452746
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.9546759
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95482434
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation Bronze",
    "Type": "base",
    "Quantity": 3,
    "CDF": 0.95497279
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95551707
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95606136
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95660564
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95714993
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95769421
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.9582385
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95878278
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95932707
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.95987135
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation FOTL",
    "Type": "base",
    "Quantity": 11,
    "CDF": 0.96041564
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96091044
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96140524
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96190005
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96239485
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96288966
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96338446
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96387927
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96437407
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96486888
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation Gold",
    "Type": "base",
    "Quantity": 10,
    "CDF": 0.96536368
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.96561108
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.96585849
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.96610589
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.96635329
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.96660069
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.9668481
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.9670955
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.9673429
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.9675903
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation Green",
    "Type": "base",
    "Quantity": 5,
    "CDF": 0.9678377
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96788718
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96793667
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96798615
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96803563
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96808511
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96813459
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96818407
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96823355
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96828303
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation Platinum",
    "Type": "base",
    "Quantity": 1,
    "CDF": 0.96833251
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.97075705
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.97318159
  },
  {
    "Player": "Jayson Tatum",
    "Team": "Boston Celtics",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.97560614
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.97803068
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.98045522
  },
  {
    "Player": "Ausar Thompson",
    "Team": "Detroit Pistons",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.98287976
  },
  {
    "Player": "Shai Gilgeous-Alexander",
    "Team": "Oklahoma City Thunder",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.9853043
  },
  {
    "Player": "Scoot Henderson",
    "Team": "Portland Trail Blazers",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.98772885
  },
  {
    "Player": "Amen Thompson",
    "Team": "Houston Rockets",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.99015339
  },
  {
    "Player": "Brandon Miller",
    "Team": "Charlotte Hornets",
    "Card Set": "Base Variation Red",
    "Type": "base",
    "Quantity": 49,
    "CDF": 0.99257793
  },
  {
    "Player": "Victor Wembanyama",
    "Team": "San Antonio Spurs",
    "Card Set": "Extraterrestrial",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.99381494
  },
  {
    "Player": "Luka Doncic",
    "Team": "Dallas Mavericks",
    "Card Set": "Extraterrestrial",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.99505195
  },
  {
    "Player": "LeBron James",
    "Team": "Los Angeles Lakers",
    "Card Set": "Extraterrestrial",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.99628897
  },
  {
    "Player": "Stephen Curry",
    "Team": "Golden State Warriors",
    "Card Set": "Extraterrestrial",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.99752598
  },
  {
    "Player": "Giannis Antetokounmpo",
    "Team": "Milwaukee Bucks",
    "Card Set": "Extraterrestrial",
    "Type": "base",
    "Quantity": 25,
    "CDF": 0.99876299
  },
  {
    "Player": "Nikola Jokic",
    "Team": "Denver Nuggets",
    "Card Set": "Extraterrestrial",
    "Type": "base",
    "Quantity": 25,
    "CDF": 1.0
  }
];