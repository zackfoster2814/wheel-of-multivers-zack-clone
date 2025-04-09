export const powerCountSections = [
  {
    id: "PCS001",
    name: "0",
    weight: 25,
    color: "#9932CC",
  },
  {
    id: "PCS002",
    name: "1",
    weight: 45,
    color: "#9400D3",
  },
  {
    id: "PCS003",
    name: "2",
    weight: 10,
    color: "#8B008B",
  },
  {
    id: "PCS004",
    name: "3",
    weight: 6,
    color: "#6A5ACD",
  },
  {
    id: "PCS005",
    name: "4",
    weight: 4,
    color: "#483D8B",
  },
];

export const powerSections = [
  {
    id: "POW001",
    name: "Shinuchi (Bankai)",
    description: "Đối thủ bị vô hiệu hóa toàn bộ Power khi combat.",
    tags: ["Arcana", "Wibu"],
    color: "#FF5733",
  },
  {
    id: "POW002",
    name: "Hellflame",
    description:
      'Toàn bộ "Fire" Power của đối phương sẽ thuộc về bạn (chỉ trong combat đó). Sau mỗi combat với người chơi có sở hữu "Fire" Power, nhận +2 vào chỉ số thấp nhất. (Stack)',
    tags: ["Quirk", "Fire"],
    color: "#33FF57",
  },
  {
    id: "POW003",
    name: "Zanka no Tachi (Bankai)",
    description:
      'Hấp thụ vĩnh viễn toàn bộ Power có tag "Fire" của những kẻ địch đối đầu.',
    tags: ["Fire", "Wibu"],
    color: "#3357FF",
  },
  {
    id: "POW004",
    name: "Rinrin's Chihuahua",
    description: "Nhận -1 All Stats.",
    tags: ["Summoning"],
    color: "#FF33A1",
  },
  {
    id: "POW005",
    name: "Regular Chihuahua",
    description: "Nhận -1 All Stats.",
    tags: ["Summoning"],
    color: "#A133FF",
  },
  {
    id: "POW006",
    name: "Igris",
    description:
      "Nhận +1 Strength và +1 Speed. Với mỗi Summon bạn có, nhận chỉ số này thêm 1 lần nữa.",
    tags: ["Summoning"],
    color: "#33FFF6",
  },
  {
    id: "POW007",
    name: "Creator's Cat",
    description: 'Nhận thêm Char Dev "Creator\'s Favor" khi quay Char Dev.',
    tags: ["Summoning"],
    color: "#FF8F33",
  },
  {
    id: "POW008",
    name: "That thing from FMA",
    description: "Nhận hiệu ứng tương tự Chimera của Mythical Beast.",
    tags: ["Summoning"],
    color: "#8FFF33",
  },
  {
    id: "POW009",
    name: "Rewind",
    description:
      "Đưa đối thủ hiện tại về trạng thái của vòng combat trước (loại bỏ PvP Rewards và tất cả những hiệu ứng đã áp dụng). Power này sẽ có hiệu lực vĩnh viễn.",
    tags: ["Quirk"],
    color: "#FF3333",
  },
  {
    id: "POW010",
    name: "Sun Aura",
    description:
      "Mỗi người có Sun Aura sẽ nhận +2 VĨNH VIỄN vào chỉ số thấp nhất trước mỗi combat.",
    tags: ["Holy"],
    color: "#33FF8F",
  },
  {
    id: "POW011",
    name: "Idle Death Gamble (Ryoiki Tenkai)",
    description:
      "Nhận vòng quay may mắn ngay trước khi combat với 8% khả năng +100 all stats, 22% khả năng +1 all stats và 70% không có gì xảy ra. (Hiệu lực chỉ trong combat đó). Toàn bộ Power khác Idle Death Gamble của bạn bị vô hiệu hóa. Power này không thể bị xóa, vô hiệu hoặc cướp.",
    tags: ["Abyssal", "Wibu"],
    color: "#8F33FF",
  },
  {
    id: "POW012",
    name: "Headshot",
    description:
      'Khi bắt đầu combat, quay 2 chỉ số ngẫu nhiên. Khi thắng những chỉ số được quay ra sẽ nhận thêm 1 điểm và chắc chắn Crit nếu có power "Critical Strike".',
    tags: ["Physical"],
    color: "#33A1FF",
  },
  {
    id: "POW013",
    name: "Susanoo",
    description:
      'Nhận 2 random Normal Gear. Với mỗi "Gear" sở hữu, +1 vào chỉ số thấp nhất.',
    tags: ["Summoning"],
    color: "#FFA133",
  },
  {
    id: "POW014",
    name: "Get Excited!",
    description:
      "Nếu combat trước bạn chiến thắng, nhận +4 Strength và +4 Speed khi combat.",
    tags: ["Physical"],
    color: "#57FF33",
  },
  {
    id: "POW015",
    name: "Daiguren Hyorinmaru (Bankai)",
    description:
      'Nhận +1 Martial Arts và 1 Power có tag "Frost" ngẫu nhiên. Với mỗi Power có tag "Frost" sở hữu, nhận +1 Martial Arts.',
    tags: ["Frost", "Wibu"],
    color: "#FF338F",
  },
  {
    id: "POW016",
    name: "Santoryu",
    description:
      'Giới hạn số lượng vũ khí được đẩy lên 3, nhận thêm 1 vòng quay vũ khí có tag "Sword". Sẽ chỉ có thể sử dụng và nhận "Sword". Mỗi khi nhận 1 vũ khí random sẽ chắc chắn nhận Sword. Khi có đủ 3 "Sword", nhận +3 Strength, +3 Speed, +3 BIQ. (Các Sword còn lại sẽ không được là Unique Weapon, nếu nhận Unique sẽ mặc định chuyển thành 1 Normal Sword). Nếu bị vô hiệu hóa power này, khả năng sử dụng 3 vũ khí vẫn được giữ lại.',
    tags: ["Physical"],
    color: "#A1FF33",
  },
  {
    id: "POW017",
    name: "Hawk-Eye Harbinger",
    description:
      "Nhận 2 Strength, 2 Martial Art khi đối đầu với chủng tộc thuộc nửa trên bảng xếp hạng.",
    tags: ["Steampunk"],
    color: "#5733FF",
  },
  {
    id: "POW018",
    name: "The Greatest Showman",
    description: "Nhận tất cả Power vô dụng sau đó loại bỏ power này.",
    tags: ["Arcana"],
    color: "#33FFA1",
  },
  {
    id: "POW019",
    name: "Killer Queen",
    description:
      'Khi nhận Power này, chọn ngẫu nhiên 5 người chơi bên phe Alliance đối địch.\n\nKhi vào vòng Tournament, nếu người sở hữu Power này chưa bị loại thì 5 người chơi được chọn chắc chắn sẽ bị loại ở vòng đấu tiếp theo của họ (nếu họ còn sống). Với mỗi người chơi bị loại theo cách này, nhận +1 vào một chỉ số ngẫu nhiên.\n\nVào thời điểm toàn bộ người chơi được chọn đã bị loại, nhận +1 all stats. Nếu bạn spin ra Power này ở vòng Tournament, spin lại "Stand" Wheel để nhận 1 Stand khác.',
    tags: ["Wibu", "Summoning"],
    color: "#F633FF",
  },
  {
    id: "POW020",
    name: "Haki",
    description: 'Nhận "Haki" Wheel rồi loại bỏ power này.',
    tags: ["Wibu"],
    color: "#33F6FF",
  },
  {
    id: "POW021",
    name: "Quirks",
    description: 'Nhận "Quirks" Wheel rồi loại bỏ power này.',
    tags: ["Wibu"],
    color: "#FFAF33",
  },
  {
    id: "POW022",
    name: "Jojo Stands",
    description: 'Nhận "Stands" Wheel rồi loại bỏ power này.',
    tags: ["Wibu"],
    color: "#AF33FF",
  },
  {
    id: "POW023",
    name: "Dojutsu",
    description: 'Nhận "Dojutsu" Wheel rồi loại bỏ power này.',
    tags: ["Wibu"],
    color: "#33FFAF",
  },
  {
    id: "POW024",
    name: "Ryoiki Tenkai",
    description: 'Nhận "Domain Expansion" Wheel rồi loại bỏ power này.',
    tags: ["Wibu"],
    color: "#33AFF6",
  },
  {
    id: "POW025",
    name: "Time Travel",
    description:
      "Re-spin lại chỉ số thấp nhất 1 lần sau đó loại power này ra khỏi danh sách power của bản thân.",
    tags: ["Arcana"],
    color: "#F6FF33",
  },
  {
    id: "POW026",
    name: "Reversed Cursed Fate",
    description:
      'Tất cả hiệu ứng trừ Stats từ trang bị "Cursed" sẽ được chuyển thành cộng. Nhận ngẫu nhiên 1 "Cursed" Normal Gear.',
    tags: ["Abyssal"],
    color: "#FF33F6",
  },
  {
    id: "POW027",
    name: "Hidden Potential",
    description: 'Nhận thêm 1 "Character Development" và loại bỏ Power này.',
    tags: ["Arcana"],
    color: "#AFF633",
  },
  {
    id: "POW028",
    name: "Abyss Monster",
    description:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 Strength, và nhận thêm bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    tags: ["Summoning", "Abyssal"],
    color: "#F633A1",
  },
  {
    id: "POW029",
    name: "Pack of Wolves",
    description:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 BIQ, và nhận thêm Bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    tags: ["Summoning", "Physical"],
    color: "#33F6A1",
  },
  {
    id: "POW030",
    name: "Rising tide",
    description:
      'Nhận +2 Martial Arts. Gấp đôi nếu như bạn sở hữu vũ khí "Poseidon\'s Trident"',
    tags: ["Water"],
    color: "#F6A133",
  },
  {
    id: "POW031",
    name: "Rise from the Ashes",
    description:
      "Nhận +3 all stats. Sau mỗi trận đấu, nhận -1 all stats. Sau 3 combat, xóa bỏ Power này.",
    tags: ["Fire"],
    color: "#33F633",
  },
  {
    id: "POW032",
    name: "Invulnerability",
    description: "Nhận +3 Durability.",
    tags: ["Holy"],
    color: "#A1F633",
  },
  {
    id: "POW033",
    name: "Mufasa",
    description: "Nhận +4 Strength.",
    tags: ["Summoning"],
    color: "#FF33AF",
  },
  {
    id: "POW034",
    name: "Hades' Blessing",
    description: "Nhận +2 Strength, +2 Speed, +1 BIQ và +1 Martial Arts.",
    tags: ["Abyssal", "Blood"],
    color: "#33A1F6",
  },
  {
    id: "POW035",
    name: "Gate to Heaven",
    description: 'Khi ở trạng thái "Redemption Arc", nhận +1 all stats.',
    tags: ["Holy"],
    color: "#F6AF33",
  },
  {
    id: "POW036",
    name: "Stone Skin",
    description: "Nhận +4 Durability.",
    tags: ["Nature"],
    color: "#AF33F6",
  },
  {
    id: "POW037",
    name: "Stand United",
    description:
      "Tất cả người chơi có cùng Alliance lẫn Race với bạn nhận +2 Martial Arts. (tính cả bản thân).",
    tags: ["Physical"],
    color: "#33F6AF",
  },
  {
    id: "POW038",
    name: "Earth Golem",
    description:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 Durability, và nhận thêm bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    tags: ["Summoning", "Nature"],
    color: "#A1FF8F",
  },
  {
    id: "POW039",
    name: "Katen Kyokotsu: Karamatsu Shinju (Bankai)",
    description:
      "Nhận +2 Strength và +1 Durability. Đối thủ bị giảm 2 Durability.",
    tags: ["Abyssal", "Wibu"],
    color: "#FF8FA1",
  },
  {
    id: "POW040",
    name: "Coffin of the Iron Mountain (Ryoiki Tenkai)",
    description: "Nhận +3 Strength, +2 BIQ và +1 Martial Arts.",
    tags: ["Fire", "Wibu"],
    color: "#8FA1FF",
  },
  {
    id: "POW041",
    name: "Body Enhancing",
    description: "Nhận +1 Strength, +1 Speed, +1 Durability.",
    tags: ["Physical"],
    color: "#A1F6FF",
  },
  {
    id: "POW042",
    name: "Tail",
    effect: "Nhận +1 Durability.",
    tags: ["Quirk", "Physical"],
    color: "#FFA1F6",
  },
  {
    id: "POW043",
    name: "Tusk Act II",
    effect: "Nhận +2 Strength và +1 BIQ.",
    tags: ["Wibu", "Summoning"],
    color: "#A1FFA1",
  },
  {
    id: "POW044",
    name: "Shock Blast",
    effect: "Nhận +3 Strength.",
    tags: ["Lightning"],
    color: "#FFA18F",
  },
  {
    id: "POW045",
    name: "Fa Jin",
    effect: "Nhận +2 Strength và +1 Speed.",
    tags: ["Quirk", "Physical"],
    color: "#8FA1A1",
  },
  {
    id: "POW046",
    name: "Love",
    effect:
      "Quay một nhân vật cùng Alliance, nhân vật đó nhận 1 Quirk ngẫu nhiên (chỉ nằm trong Power Wheel) và +1 Strength với mỗi Quirk họ có. Khi người sở hữu Power này bị loại thì người được chọn cũng mất các hiệu ứng này. (2 người sẽ được tính là Lovers của nhau) Power này có thể được nhận nhiều lần.",
    tags: ["Quirk"],
    color: "#A18FFF",
    multi: true,
  },
  {
    id: "POW047",
    name: "Big Fist",
    effect: "Nhận +1 Strength.",
    tags: ["Quirk", "Physical"],
    color: "#8FFFF6",
  },
  {
    id: "POW048",
    name: "Hardening",
    effect: "Nhận +1 Durability.",
    tags: ["Quirk", "Physical"],
    color: "#8FFFA1",
  },
  {
    id: "POW049",
    name: "Play Ball with your life",
    effect: "Nhận +2 Strength, +2 Speed và +1 Durability.",
    tags: ["Physical"],
    color: "#F6FFA1",
  },
  {
    id: "POW050",
    name: "Lightning Mastery",
    effect: "Nhận +3 IQ.",
    tags: ["Lightning"],
    color: "#A1F6A1",
  },
  {
    id: "POW051",
    name: "Fire Mastery",
    effect: "Nhận +5 BIQ.",
    tags: ["Fire"],
    color: "#A1A1FF",
  },
  {
    id: "POW052",
    name: "Explosion",
    effect: "Nhận +1 Strength và +2 Martial Arts.",
    tags: ["Quirk"],
    color: "#A1A1F6",
  },
  {
    id: "POW053",
    name: "Clear Mind",
    effect: "Nhận +2 IQ.",
    tags: ["Arcana"],
    color: "#F6A1A1",
  },
  {
    id: "POW054",
    name: "Burning Hand",
    effect: "Nhận +1 Strength và +2 Martial Arts.",
    tags: ["Fire"],
    color: "#A1A1A1",
  },
  {
    id: "POW055",
    name: "Thunder Strike",
    effect: "Nhận +1 Strength, +1 BIQ.",
    tags: ["Lightning"],
    color: "#DFFF00",
  },
  {
    id: "POW056",
    name: "Tsunami Control",
    effect: "Gọi sóng thần, +2 Strength",
    tags: ["Water"],
    color: "#FFBF00",
  },
  {
    id: "POW057",
    name: "Fist Fighting",
    effect:
      "Nhận +2 Martial Arts. Khi đang không cầm vũ khí, gấp đôi chỉ số này.",
    tags: ["Physical"],
    color: "#FF7F50",
  },
  {
    id: "POW058",
    name: "Crimson Pact",
    effect:
      "Mỗi 3 Base IQ, tăng 1 Durability. Mỗi 3 Base Durability, tăng 1 IQ.",
    tags: ["Blood"],
    color: "#DE3163",
  },
  {
    id: "POW059",
    name: "Rabbit",
    effect: "Nhận +1 Speed, +1 BIQ và +1 Martial Arts.",
    tags: ["Quirk", "Physical"],
    color: "#9FE2BF",
  },
  {
    id: "POW060",
    name: "Enlarging",
    effect: "Nhận +2 Strength, +2 Durability, -3 Speed.",
    tags: ["Physical"],
    color: "#40E0D0",
  },
  {
    id: "POW061",
    name: "Overdrive",
    effect: "Nhận +3 BIQ, -1 Durability.",
    tags: ["Physical"],
    color: "#6495ED",
  },
  {
    id: "POW062",
    name: "Summon Undead",
    effect:
      'Undead Ghoul trở thành Summon của bạn: Khi combat ở "Graveyard" Nhận +3 Stat thấp nhất, +1 Stat cao nhất.',
    tags: ["Summoning"],
    color: "#CCCCFF",
  },
  {
    id: "POW063",
    name: "Shrinking",
    effect: "Nhận +5 Speed, -2 Strength, -2 Durability.",
    tags: ["Physical"],
    color: "#FF6666",
  },
  {
    id: "POW064",
    name: "Blood Frenzy",
    effect: "Nhận -3 IQ và -3 BIQ, +2 all stat còn lại.",
    tags: ["Blood"],
    color: "#FFB6C1",
  },
  {
    id: "POW065",
    name: "Hunter's Mark",
    effect:
      "Chọn 1 chỉ số ngẫu nhiên trước khi bắt đầu combat. Khi thắng round đấy, nhận +3 vào stat thấp nhất khi tổng kết combat.",
    tags: ["Physical"],
    color: "#FF69B4",
  },
  {
    id: "POW066",
    name: "Nature's Blessing",
    effect: 'Nhận +2 Durability với mỗi power có tag "Nature" sở hữu.',
    tags: ["Nature"],
    color: "#DB7093",
  },
  {
    id: "POW067",
    name: "Water Elemental",
    effect:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 Speed, và nhận thêm bonus này lần nữa với mỗi Summoning Power mà bạn có.",
    tags: ["Summoning", "Water"],
    color: "#C71585",
  },
  {
    id: "POW068",
    name: "Cold Arrow",
    effect:
      "Nhận +1 strength và +1 Martial Arts. Nhận gấp 3 lần chỉ số này nếu sử dụng vũ khí là Bow/Crossbow.",
    tags: ["Physical", "Frost"],
    color: "#800080",
  },
  {
    id: "POW069",
    name: "Powerful Strike",
    effect: "Nếu có vũ khí, nhận +3 BIQ.",
    tags: ["Physical"],
    color: "#4B0082",
  },
  {
    id: "POW070",
    name: "Tidecaller's Blessing",
    effect:
      "Chọn 1 người ngẫu nhiên thuộc Alliance của bạn, bạn và họ nhận +1 Speed và +1 IQ VĨNH VIỄN.",
    tags: ["Water"],
    color: "#8A2BE2",
  },
  {
    id: "POW071",
    name: "Ice Hammer",
    effect:
      'Nhận +2 Strength. Nếu sở hữu vũ khí Axe/Hammer, gấp đôi con số này. Nếu thi đấu tại "Frostlands" Arena, gấp đôi con số này lần nữa. (tối đa là x4)',
    tags: ["Frost"],
    color: "#9370DB",
  },
  {
    id: "POW072",
    name: "Odin's Blessing",
    effect:
      'Nhận "+4 Strength". Chuyển thành "+4 vào Stat yếu nhất" khi thua 1 combat.',
    tags: ["Holy"],
    color: "#BA55D3",
  },
  {
    id: "POW073",
    name: "Heat Dispatching Control",
    effect:
      'Với mỗi "Fire" Power, +1 Dura và Strength. Với mỗi "Steampunk" gear, nhận +1 IQ và +1 BIQ.',
    tags: ["Steampunk", "Fire"],
    color: "#9932CC",
  },
  {
    id: "POW074",
    name: "One For All",
    effect:
      "Nhận +3 Strength, +3 Speed và +3 Durability. Sau khi người sở hữu Power này bị loại, chuyển nó cho người cùng Alliance đã thi đấu và còn sống gần nhất. Mỗi Alliance chỉ có thể có 1 người sở hữu Power này.",
    tags: ["Quirk", "Physical"],
    color: "#9400D3",
  },
  {
    id: "POW075",
    name: "Let Him Cook",
    effect: "Nhận +1 all stats.",
    tags: ["Physical"],
    color: "#8B008B",
  },
  {
    id: "POW076",
    name: "Command: Attack",
    effect: "Nhận +3 Strength.",
    tags: ["Steampunk"],
    color: "#6A5ACD",
  },
  {
    id: "POW077",
    name: "Command: Protect",
    effect: "Nhận +3 Durability.",
    tags: ["Steampunk"],
    color: "#483D8B",
  },
  {
    id: "POW078",
    name: "Voidwalking",
    effect: "Nhận +3 Speed.",
    tags: ["Arcana"],
    color: "#7B68EE",
  },
  {
    id: "POW079",
    name: "IQ",
    effect: "Nhận +6 IQ. Power này sẽ biến mất khi bạn thua round IQ.",
    tags: ["Quirk"],
    color: "#ADFF2F",
  },
  {
    id: "POW080",
    name: "Dark Shadow",
    effect:
      "Nhận +1 all stats vào trận đánh thứ 1, 3, 5, 7, 9,... (Không tính PvE)",
    tags: ["Quirk", "Arcana"],
    color: "#7FFF00",
  },
  {
    id: "POW081",
    name: "Heal",
    effect: "Nhận +2 Durability. Sau mỗi combat, nhận +1 Durability vĩnh viễn.",
    tags: ["Quirk"],
    color: "#7CFC00",
  },
  {
    id: "POW082",
    name: "Half-Cold Half-Hot",
    effect:
      'Nhận 1 random "Fire" Power và 1 random "Frost" Power. Nhận +1 BIQ với mỗi 2 Power thuộc "Fire" hoặc "Frost.',
    tags: ["Quirk", "Fire", "Frost"],
    color: "#00FF00",
  },
  {
    id: "POW083",
    name: "Byakugan",
    effect: "Nhận +2 BIQ và +2 Martial Arts.",
    tags: ["Wibu"],
    color: "#32CD32",
  },
  {
    id: "POW084",
    name: "Tenseigan",
    effect:
      'Nhận +1 BIQ và +1 Martial Arts. Khi vào "Tournament" đổi thành nhận +1 all stats.',
    tags: ["Wibu"],
    color: "#98FB98",
  },
  {
    id: "POW085",
    name: "Observation",
    effect: "Nhận +3 BIQ.",
    tags: ["Wibu"],
    color: "#90EE90",
  },

  {
    id: "POW086",
    name: "Armament",
    effect: "Nhận +2 Durability và +1 Martial Arts.",
    tags: ["Wibu"],
    color: "#00FA9A",
  },
  {
    id: "POW087",
    name: "Tree Bound",
    effect: "Bị -1 All Stat không phải Durability, +6 vào Durability",
    tags: ["Nature"],
    color: "#00FF7F",
  },
  {
    id: "POW088",
    name: "Nihility Slash",
    effect:
      "Mỗi khi khởi đầu 1 combat, nhận +1 vào 2 chỉ số thấp nhất vĩnh viễn.",
    tags: ["Physical", "Arcana"],
    color: "#3CB371",
  },
  {
    id: "POW089",
    name: "Guided Arrow",
    effect:
      "Nhận +1 Speed và +1 BIQ. Nếu sử dụng vũ khí thuộc Bow/Crossbow, gấp đôi hai chỉ số được cộng thêm này.",
    tags: ["Physical"],
    color: "#2E8B57",
  },
  {
    id: "POW090",
    name: "Strafe",
    effect:
      "Nhận +1 BIQ và +1 Martial Arts. Nếu sử dụng vũ khí thuộc Bow/Crossbow, gấp đôi hai chỉ số được cộng thêm này.",
    tags: ["Physical"],
    color: "#228B22",
  },
  {
    id: "POW091",
    name: "Sweet Win",
    effect:
      'Power này chỉ có tác dụng trước khi vào Tournament. Người nhận Power này sẽ thắng combat tiếp theo. (không tính PvE và không thể bị vô hiệu hóa). Khi có cả 2 power "Sweet Win" và "Spicy Lost" thì sẽ mất cả hai power.',
    tags: ["Abyssal"],
    color: "#008000",
  },
  {
    id: "POW092",
    name: "Spicy Lost",
    effect:
      'Power này chỉ có tác dụng trước khi vào Tournament. Người nhận Power này sẽ thua combat tiếp theo. (không tính PvE và không thể bị vô hiệu hóa)  Khi có cả 2 power "Sweet Win" và "Spicy Lost" thì sẽ mất cả hai power.',
    tags: ["Abyssal"],
    color: "#006400",
  },
  {
    id: "POW093",
    name: "Erasure",
    effect:
      "Trong combat, vô hiệu hóa tối đa 3 Power ngẫu nhiên của đối phương.",
    tags: ["Quirk"],
    color: "#66CDAA",
  },
  {
    id: "POW094",
    name: "Fly",
    effect: 'Vô hiệu hóa các hiệu ứng giảm speed từ Arena "Sky".',
    tags: ["Physical"],
    color: "#8FBC8F",
  },
  {
    id: "POW095",
    name: "Total Protection",
    effect:
      "Toàn bộ Power của bạn sẽ không thể bị ảnh hưởng từ hiệu ứng của đối phương.",
    tags: ["Arcana"],
    color: "#20B2AA",
  },
  {
    id: "POW096",
    name: "Mirror Image",
    effect:
      "Trong trận đấu PvP đầu tiên sau khi nhận power này, nhân đôi toàn bộ base stats. Sau trận PvP đầu tiên, loại power này khỏi người sở hữu.",
    tags: ["Arcana"],
    color: "#008B8B",
  },
  {
    id: "POW097",
    name: "Misty Step Ahead",
    effect: "Ở round PvE khởi đầu với 2 điểm.",
    tags: ["Nature"],
    color: "#008080",
  },
  {
    id: "POW098",
    name: "200 years of Balancing",
    effect:
      "Khi combat ở vòng Tournament, không nhân đôi trọng số của người có stat cao hơn mỗi round, bất kể là bạn hay đối phương.",
    tags: ["Abyssal"],
    color: "#00CED1",
  },
  {
    id: "POW099",
    name: "Disarmament",
    effect:
      "Đối thủ mất đi vũ khí (chỉ trong combat với nhân vật có power này).",
    tags: ["Physical"],
    color: "#48D1CC",
  },
  {
    id: "POW100",
    name: "Counterspell",
    effect:
      "Vô hiệu hóa Power đầu tiên của đối thủ trong combat. (Đầu tiên tính theo thứ tự nhận power)",
    tags: ["Lightning"],
    color: "#40E0D0",
  },
  {
    id: "POW101",
    name: "Power Negation",
    effect:
      "Vô hiệu hóa 1 Power ngẫu nhiên của đối thủ có độ ưu tiên thấp hơn Power này trong combat.",
    tags: ["Nature"],
    color: "#00FFFF",
  },
  {
    id: "POW102",
    name: "Static Field",
    effect:
      "Đối thủ nhận -2 Durability và bị vô hiệu 1 Power ngẫu nhiên có độ ưu tiên thấp hơn Power này.",
    tags: ["Lightning"],
    color: "#E0FFFF",
  },
  {
    id: "POW103",
    name: "Memory Alter",
    effect:
      "Đối thủ bị vô hiệu hóa 1 Power ngẫu nhiên trong combat. Nếu bạn thắng combat, đối thủ sẽ vĩnh viễn mất power đó.",
    tags: ["Abyssal"],
    color: "#AFEEEE",
  },
  {
    id: "POW104",
    name: "Anivoice",
    effect: "Vô hiệu hóa 1 Summoning ngẫu nhiên của đối phương.",
    tags: ["Quirk", "Nature"],
    color: "#7FFFD4",
  },
  {
    id: "POW105",
    name: "Fire Breath",
    effect:
      'Nhận +2 BIQ và vô hiệu hóa 1 power "Frost" ngẫu nhiên của đối phương.',
    tags: ["Fire"],
    color: "#B0E0E6",
  },
  {
    id: "POW106",
    name: "Frost Armor",
    effect:
      'Nhận +2 Durability và vô hiệu hóa 1 random "Water" Power của đối phương.',
    tags: ["Frost"],
    color: "#5F9EA0",
  },
  {
    id: "POW107",
    name: "Power Mimicry",
    effect:
      "Sao chép 1 Power ngẫu nhiên của đối thủ. Nếu sao chép trúng Power có độ ưu tiên cao hơn sẽ không có tác dụng. Chỉ có thể dùng được Power sao chép ở trong trận đấu đó.",
    tags: ["Abyssal"],
    color: "#4682B4",
  },
  {
    id: "POW108",
    name: "Unstoppable",
    effect:
      "Nhận -2 Martial Arts. Miễn nhiễm với mọi debuff giảm stat từ đối thủ.",
    tags: ["Physical"],
    color: "#B0C4DE",
  },
  {
    id: "POW109",
    name: "Rizzler",
    effect: "Nếu Rizz level của bạn cao hơn đối thủ, +1 điểm khi combat.",
    tags: ["Abyssal"],
    color: "#ADD8E6",
  },
  {
    id: "POW110",
    name: "Golden Vow",
    effect: "Khởi đầu mọi trận đấu với +1 điểm.",
    tags: ["Holy"],
    color: "#87CEEB",
  },
  {
    id: "POW111",
    name: "Undying Flames",
    effect: "Nhận +1 điểm combat nếu bạn có ít nhất 2 'Fire' Power.",
    tags: ["Fire"],
    color: "#87CEFA",
  },
  {
    id: "POW112",
    name: "Sacrifice",
    effect:
      "Trong vòng Tournament, +1 điểm khởi đầu nhưng giảm 2 Durability sau combat (stack).",
    tags: ["Blood"],
    color: "#00BFFF",
  },
  {
    id: "POW113",
    name: "Zero Gravity",
    effect: "Kháng các debuff giảm Speed vào bản thân.",
    tags: ["Quirk"],
    color: "#1E90FF",
  },
  {
    id: "POW114",
    name: "Reality Warp",
    effect:
      "Hoán đổi Base Stats cao nhất của đối phương với Base Stats thấp nhất của bạn.",
    tags: ["Arcana"],
    color: "#6495ED",
  },
  {
    id: "POW115",
    name: "Invisibility",
    effect: "Đối thủ không nhận được điểm khi bạn thua round Strength.",
    tags: ["Quirk"],
    color: "#7B68EE",
  },
  {
    id: "POW116",
    name: "Divine Static Shock",
    effect:
      "Có 50% nhận 2 Strength và 1 điểm combat trước mỗi combat PvP. Mỗi khi kích hoạt thành công, -5% tỉ lệ cho combat tiếp theo (Stack).",
    tags: ["Holy", "Lightning"],
    color: "#4169E1",
  },
  {
    id: "POW117",
    name: "Spear of Fire",
    effect:
      "Nhận +2 Martial Arts. Nếu sử dụng vũ khí 'Polearms', nhận 1 điểm khi khởi đầu combat.",
    tags: ["Physical", "Fire"],
    color: "#0000FF",
  },
  {
    id: "POW118",
    name: "Chance Manipulation",
    effect:
      "Tỉ lệ kích hoạt của một số hiệu ứng từ trang bị/ vũ khí/ power của bạn tăng 10% khi vào combat. Các Gear được ảnh hưởng: Gloves of Thieves, Steam Lamp, Lucky Clover Charm, Trickster's Glass (tăng tỉ lệ bản thân nhận điểm), Aegis Shield. Các vũ khí được ảnh hưởng: Tesla Colt SAA, Revolver, Clay Brick, Magic Violin, Flute of Music God, Các Power được ảnh hưởng: Scrying, Waterfowl Dance (tỉ lệ ban đầu và mỗi lần reset được tăng), Bash, Rampage, Evasion, Critical Strike, Divine Static Shock, The Sand of Time.",
    tags: ["Arcana"],
    color: "#0000CD",
  },
  {
    id: "POW119",
    name: "Infinity (Ryoiki Tenkai)",
    effect:
      "Speed của đối phương bị cố định ở 0. Đối phương nhận +8 IQ, nếu IQ đối phương hơn hoặc bằng 13, đối phương ngay lập tức thua round IQ.",
    tags: ["Arcana", "Wibu"],
    color: "#00008B",
  },
  {
    id: "POW120",
    name: "Blood Manipulation",
    effect:
      "Nhận +3 BIQ khi đối đầu với tất cả kẻ địch trừ 'Skeleton' và 'Spirit'.",
    tags: ["Blood"],
    color: "#000080",
  },
  {
    id: "POW121",
    name: "Spirit Link",
    effect:
      "Nhận +1 vào 1 Stat ngẫu nhiên với mỗi 50 người đã bị loại thuộc Alliance của bạn khi bắt đầu vào combat (Stack)",
    tags: ["Arcana"],
    color: "#191970",
  },
  {
    id: "POW122",
    name: "Avenge the Fallen",
    effect:
      "Nếu người chơi cùng Alliance thất bại trong combat trước bạn (Combat gần nhất) và đối thủ của bạn ở Alliance đối địch, nhận +2 vào 2 stat thấp nhất khi combat.",
    tags: ["Holy", "Physical"],
    color: "#8B0000",
  },
  {
    id: "POW123",
    name: "Garlic Breath",
    effect: "Nhận +2 all stats khi vào combat nếu đối thủ là Vampire.",
    tags: ["Nature"],
    color: "#A52A2A",
  },
  {
    id: "POW124",
    name: "Holy Lance Thrust",
    effect: "Nhận +2 Strength khi vào combat. Đối thủ giảm 1 Durability.",
    tags: ["Holy"],
    color: "#B22222",
  },
  {
    id: "POW125",
    name: "Adrenaline Burst",
    effect:
      "Nhận +4 Speed khi vào combat đầu tiên và mỗi 2 combat sau đó (1, 3, 5, 7...)",
    tags: ["Physical"],
    color: "#DC143C",
  },
  {
    id: "POW126",
    name: "Unified Resistance",
    effect:
      "Với mỗi 3 Durability của người cùng Alliance combat trước bạn, nhận +1 Durability khi combat.",
    tags: ["Physical"],
    color: "#FF0000",
  },
  {
    id: "POW127",
    name: "Guidance",
    effect:
      "Random +1 vào 2 Stat ngẫu nhiên mỗi khi combat với đối thủ ít power hơn mình. (Stack)",
    tags: ["Holy"],
    color: "#FF6347",
  },
  {
    id: "POW128",
    name: "Magma Strike",
    effect:
      "Đối thủ nhận -2 Durability, sau combat, đối thủ bị vĩnh viễn -1 Durability.",
    tags: ["Fire"],
    color: "#FF4500",
  },
  {
    id: "POW129",
    name: "Hell Bound",
    effect:
      "Đối thủ nhận -2 vào stat thấp nhất trong combat. Nếu bạn chiến thắng, hiệu ứng trừ này sẽ áp dụng vĩnh viễn.",
    tags: ["Fire"],
    color: "#FF8C00",
  },
  {
    id: "POW130",
    name: "Thunderstorm of hail and fire",
    effect:
      "Với mỗi 1 'Lightning' Power có trong người, đối thủ -1 Speed. Với mỗi 1 'Fire' Power có trong người, đối thủ -1 Strength. Với mỗi 1 'Frost' Power có trong người, đối thủ -1 Dura. Với mỗi 1 'Holy' Power có trong người, đối thủ -1 IQ và -1 BIQ. Bản thân của Power này không được tính vào bộ đếm để kích hoạt hiệu ứng.",
    tags: ["Holy", "Lightning", "Fire", "Frost"],
    color: "#FFA500",
  },
  {
    id: "POW131",
    name: "Frost Fingers",
    effect:
      "Với mỗi Gear đối thủ đang mang trên người, -1 stat cao nhất của đối thủ(Max 5).",
    tags: ["Frost"],
    color: "#FFD700",
  },
  {
    id: "POW132",
    name: "Thunder Orb",
    effect:
      'Đối thủ giảm 2 Durability. Gấp đôi con số này nếu có ít nhất 1 Power "Lightning" khác.',
    tags: ["Lightning"],
    color: "#FFFF00",
  },
  {
    id: "POW133",
    name: "Freezing",
    effect:
      "Đối thủ giảm 1 Durability. Nếu đối thủ có IQ trong combat dưới 10, đối thủ giảm thêm 2 Durability nữa.",
    tags: ["Frost"],
    color: "#FFFFE0",
  },
  {
    id: "POW134",
    name: "Armor Piercing",
    effect:
      'Giảm 2 Durability của đối phương. Tăng lên thành giảm 4 nếu bạn sử dụng các vũ khí "Polearms", "Sword", "Dagger".',
    tags: ["Physical"],
    color: "#FFFACD",
  },
  {
    id: "POW135",
    name: "Crimson Poison",
    effect:
      "Đối thủ giảm 1 Durability, giảm thêm 1 với mỗi Blood Power sở hữu.",
    tags: ["Blood", "Nature"],
    color: "#FAFAD2",
  },
  {
    id: "POW136",
    name: "Water Beam",
    effect:
      'Đối thủ giảm 1 Durability với mỗi Power có tag "Water" mà bạn sở hữu.',
    tags: ["Water"],
    color: "#FFEFD5",
  },
  {
    id: "POW137",
    name: "Venomous Spider",
    effect:
      "Bạn có thêm 1 Summon với hiệu ứng: Đối thủ -1 Durability, và nhận thêm bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    tags: ["Summoning", "Nature"],
    color: "#FFE4B5",
  },
  {
    id: "POW138",
    name: "Blood Golem",
    effect:
      'Bạn có thêm 1 Summon với hiệu ứng: Đối thủ -1 BIQ, trừ thêm 1 với mỗi power có tag "Summoning" mà bạn có.',
    tags: ["Summoning", "Blood"],
    color: "#FFDAB9",
  },
  {
    id: "POW139",
    name: "Frost Undead Mage",
    effect:
      'Bạn có thêm 1 Summon với hiệu ứng. Đối thủ -1 Strength, trừ thêm 1 với mỗi power có tag "Summoning" mà bạn có.',
    tags: ["Summoning", "Frost"],
    color: "#EEE8AA",
  },
  {
    id: "POW140",
    name: "Scrying",
    effect: "Đối thủ có 40% bị -3 Stat mạnh nhất.",
    tags: ["Arcana"],
    color: "#F0E68C",
  },
  {
    id: "POW141",
    name: "Spider's Symphony",
    effect: "Với mỗi 5 IQ bạn sở hữu, đối thủ nhận -1 all stats.",
    tags: ["Blood"],
    color: "#BDB76B",
  },
  {
    id: "POW142",
    name: "Entanglement",
    effect: "Đối thủ nhận -1 Speed và -1 Martial Arts.",
    tags: ["Nature"],
    color: "#E6E6FA",
  },
  {
    id: "POW143",
    name: "Halley Comet",
    effect: "Đối phương bị giảm 3 Durability.",
    tags: ["Physical", "Arcana"],
    color: "#D8BFD8",
  },
  {
    id: "POW144",
    name: "Arcana Blast",
    effect: "Đối thủ nhận -3 Durability.",
    tags: ["Arcana"],
    color: "#DDA0DD",
  },
  {
    id: "POW145",
    name: "Petrification",
    effect: "Đối thủ nhận -3 Speed.",
    tags: ["Nature"],
    color: "#EE82EE",
  },
  {
    id: "POW146",
    name: "Force Field",
    effect: "Đối thủ nhận -1 Speed, -1 Martial Arts.",
    tags: ["Lightning"],
    color: "#DA70D6",
  },
  {
    id: "POW147",
    name: "Black Magic",
    effect: "Đối thủ nhận -3 vào một stat ngẫu nhiên.",
    tags: ["Arcana"],
    color: "#FF00FF",
  },
  {
    id: "POW148",
    name: "Blizzard",
    effect: "Đối phương giảm 1 Durability và 2 Speed.",
    tags: ["Frost"],
    color: "#FF1493",
  },
  {
    id: "POW149",
    name: "Cyclone",
    effect: "Đối thủ giảm 1 Speed.",
    tags: ["Nature"],
    color: "#C71585",
  },
  {
    id: "POW150",
    name: "Cold Mastery",
    effect: "Đối thủ -4 Speed.",
    tags: ["Frost"],
    color: "#FFC0CB",
  },
  {
    id: "POW151",
    name: "Poison Arrow",
    effect: "-2 Durability đối thủ.",
    tags: ["Nature", "Physical"],
    color: "#FAEBD7",
  },
  {
    id: "POW152",
    name: "Moonlight Strike",
    effect: "Đối phương bị giảm 2 Strength, 2 Speed và 2 Durability.",
    tags: ["Arcana"],
    color: "#F5F5DC",
  },
  {
    id: "POW153",
    name: "Disease Control",
    effect: "-2 IQ của đối thủ.",
    tags: ["Nature"],
    color: "#FFE4C4",
  },
  {
    id: "POW154",
    name: "Smokescreen",
    effect: "Đối phương giảm 1 BIQ.",
    tags: ["Quirk"],
    color: "#FFDEAD",
  },
  {
    id: "POW155",
    name: "Tickling",
    effect: "Đối thủ nhận -2 Martial Arts.",
    tags: ["Physical"],
    color: "#EEDC82",
  },
  {
    id: "POW156",
    name: "Clockwork Virus",
    effect: "Đối thủ nhận -3 Martial Arts.",
    tags: ["Steampunk"],
    color: "#DEB887",
  },
  {
    id: "POW157",
    name: "Command: Dissonace",
    effect: "Đối thủ nhận -3 Speed.",
    tags: ["Steampunk"],
    color: "#D2B48C",
  },
  {
    id: "POW158",
    name: "Command: Shockwave",
    effect: "Đối thủ nhận -3 Martial Arts.",
    tags: ["Steampunk"],
    color: "#BC8F8F",
  },
  {
    id: "POW159",
    name: "Sandstorm",
    effect: "Đối thủ nhận -1 Strength, -1 Speed, -1 Martial Arts.",
    tags: ["Nature"],
    color: "#F4A460",
  },
  {
    id: "POW160",
    name: "Ice Spike",
    effect: "Đối thủ giảm 3 Durability.",
    tags: ["Frost"],
    color: "#DAA520",
  },
  {
    id: "POW161",
    name: "Ritual of Blood",
    effect: "Nhận -4 Durability. Đối phương nhận -1 all stats.",
    tags: ["Blood"],
    color: "#B8860B",
  },
  {
    id: "POW162",
    name: "Meteor Strike",
    effect: 'Nhận +4 BIQ khi vào combat. Không tác dụng ở "The Ocean" Arena.',
    tags: ["Fire"],
    color: "#CD853F",
  },
  {
    id: "POW163",
    name: "Storm Calling",
    effect:
      "Nhận +2 BIQ khi vào combat và vô hiệu hóa Arena Stats Debuff lên bản thân nếu có.",
    tags: ["Lightning"],
    color: "#D2691E",
  },
  {
    id: "POW164",
    name: "Mind Control",
    effect:
      "Nhận +1 all stats ở đầu giao tranh khi đối đầu với kẻ địch có base IQ từ 4 trở xuống.",
    tags: ["Arcana"],
    color: "#8B4513",
  },
  {
    id: "POW165",
    name: "Maelstrom",
    effect: 'Khi chiến đấu ở "The Ocean", đối thủ -1 điểm khởi đầu.',
    tags: ["Water", "Steampunk"],
    color: "#A0522D",
  },
  {
    id: "POW166",
    name: "Execution",
    effect:
      "Khi khởi đầu combat, so sánh Speed giữa hai người chơi, nếu bạn có Speed cao hơn, nhận +4 Strength, nếu bạn có Speed thấp hơn, nhận +2 Strength.",
    tags: ["Physical"],
    color: "#A52A2A",
  },
  {
    id: "POW167",
    name: "Corpse Piler",
    effect: "Trừ 1 all stats của đối phương nếu hắn có Speed chậm hơn.",
    tags: ["Blood", "Physical"],
    color: "#800000",
  },
  {
    id: "POW168",
    name: "Detect Thoughts",
    effect: "Nếu bạn có IQ cao hơn đối thủ, BIQ của bạn sẽ được +2.",
    tags: ["Holy"],
    color: "#FFFFFF",
  },
  {
    id: "POW169",
    name: "True Aim",
    effect:
      'Với mỗi 3 điểm nhận được trong 1 combat, nhận thêm 1 điểm nữa. Nếu có Power "Critical Strike", khả năng crit được tăng thêm 20%. Khả năng cộng điểm thêm của Power này sẽ không tính điểm cộng từ chính nó.',
    tags: ["Physical"],
    color: "#FFFAFA",
  },
  {
    id: "POW170",
    name: "The Sand of Time",
    effect:
      "Mỗi lần đầu tiên thua 1 round trong 1 combat, bạn có 40% thắng round đó.",
    tags: ["Arcana", "Holy"],
    color: "#F0FFF0",
  },
  {
    id: "POW171",
    name: "Bloody Strike",
    effect:
      "Nhận -1 all stats. Mỗi khi thắng 1 round đấu, nhận +1 vào 1 chỉ số VĨNH VIỄN (Tối đa được nhận 12 lần +1). (không tính PvE).",
    tags: ["Blood"],
    color: "#F5FFFA",
  },
  {
    id: "POW172",
    name: "Divine Smite",
    effect:
      "Nhận +1 Martial Arts khi vào combat. Cộng thêm 1 điểm nhận hoặc chịu ở round Martial Arts.",
    tags: ["Holy"],
    color: "#F0FFFF",
  },
  {
    id: "POW173",
    name: "Thunderous Smite",
    effect:
      "Nhận +1 Speed khi vào combat. Cộng thêm 1 điểm nhận hoặc chịu ở round Speed.",
    tags: ["Lightning"],
    color: "#F0F8FF",
  },
  {
    id: "POW174",
    name: "Aspect of Nemesis",
    effect:
      "Mỗi round Strength hoặc Martial Arts chiến thắng sẽ nhận thêm 1 điểm và không thể crit.",
    tags: ["Abyssal", "Physical"],
    color: "#F8F8FF",
  },
  {
    id: "POW175",
    name: "Evasion",
    effect:
      "Mỗi round thua trong combat, có khả năng nhận được 1 điểm (20%) Mỗi khi nhận Power này khi đã có sẵn nó, nhận thêm 10% khả năng kích hoạt.",
    tags: ["Physical"],
    color: "#F5F5F5",
    multi: true,
  },
  {
    id: "POW176",
    name: "Critical Strike",
    effect:
      "Mỗi round thắng trong combat, có khả năng nhận được thêm 1 điểm (20%). Mỗi khi bạn nhận thêm Power này khi đã có sẵn nó, +5% khả năng crit.",
    tags: ["Physical"],
    color: "#FFF5EE",
    multi: true,
  },
  {
    id: "POW177",
    name: "Electrocharge",
    effect:
      'Khi Combat: Nếu đối thủ kích hoạt thành công "Critical Strike", bạn nhận +2 vào stat ngay sau đó cho đến hết combat.',
    tags: ["Lightning"],
    color: "#FDF5E6",
  },
  {
    id: "POW178",
    name: "Waterfowl Dance",
    effect:
      "Mỗi khi thắng 1 round, có 10% nhận thêm 1 điểm, mỗi khi hiệu ứng này kích hoạt thất bại, nhận thêm 10% khả năng kích hoạt nữa (stack), sau khi kích hoạt, reset về 10%. % kích hoạt của power này sẽ không reset giữa các combat.",
    tags: ["Physical"],
    color: "#FAF0E6",
  },
  {
    id: "POW179",
    name: "Fire Bolt",
    effect: "Nhận +1 điểm combat nếu bạn thắng cả 2 round Strength và Speed.",
    tags: ["Fire"],
    color: "#FAEBD7",
  },
  {
    id: "POW180",
    name: "Fleeting Current",
    effect: "Nếu bạn thua round Strength trong combat, nhận +3 Speed.",
    tags: ["Water"],
    color: "#FFEBCD",
  },
  {
    id: "POW181",
    name: "Engine Boost",
    effect:
      "Nhận +2 speed khi vào combat. Nếu bạn thắng round speed, nhận thêm +1 vào các chỉ số còn lại cho đến hết combat.",
    tags: ["Steampunk", "Quirk"],
    color: "#FFE4C4",
  },
  {
    id: "POW182",
    name: "Transient Moonlight",
    effect:
      "Nếu bạn thắng một round với cách biệt nhiều hơn hoặc bằng 3, nhận thêm 1 điểm combat. (Ở trong Tournament, chỉ tính khi chỉ số của bạn cao hơn đối phương)",
    tags: ["Arcana"],
    color: "#FFDEAD",
  },
  {
    id: "POW183",
    name: "Endure",
    effect:
      "Nếu bạn thắng 1 round ngay sau khi vừa thua 1 round (không tính khi thua 2 round liên tiếp), nhận thêm 1 điểm. Hiệu ứng này kích hoạt được tối đa 2 lần trong 1 combat.",
    tags: ["Physical"],
    color: "#E6E6FA",
  },
  {
    id: "POW184",
    name: "Know Your Enemy",
    effect:
      "Khi bạn thắng 1 round trong combat, nhận +1 cho tất cả các stat sau đó trong combat này. (Chỉ kích hoạt 1 lần mỗi combat)",
    tags: ["Physical"],
    color: "#FFF0F5",
  },
  {
    id: "POW185",
    name: "Scalemail",
    effect: "Mỗi khi thua 1 round, nhận +2 vào chỉ số ở round kế tiếp.",
    tags: ["Quirk"],
    color: "#FFFACD",
  },
  {
    id: "POW186",
    name: "Enraged",
    effect:
      "Sau khi thua 2 round trong combat, nhận +2 vào các chỉ số còn lại trong phần còn lại của combat đó.",
    tags: ["Fire"],
    color: "#FDF5E6",
  },
  {
    id: "POW187",
    name: "Amaterasu",
    effect: "Đối phương giảm 3 Durability.",
    tags: ["Fire", "Blood"],
    color: "#FAFAD2",
  },
  {
    id: "POW188",
    name: "Hydraulic Bloodflow",
    effect:
      "Dựa theo lượng điểm chênh lệch của hai bên ở 5 round đầu, khi thắng round Martial Arts sẽ nhận lượng chênh lệch đó. Lượng điểm nhận được giới hạn tối đa là 3 và ở bất kì combat nào(Kể cả PvE), khi thua round Martial Arts sẽ bị mất đi Power này trong lúc tổng kết combat.",
    tags: ["Steampunk", "Water", "Blood"],
    color: "#DCDCDC",
  },
  {
    id: "POW189",
    name: "Thunderflow's Surge",
    effect:
      "Khi thua round Speed, vĩnh viễn -2 ở 1 random stats để +2 vào speed.",
    tags: ["Lightning"],
    color: "#D3D3D3",
  },
  {
    id: "POW190",
    name: "Wrath of the Lich King",
    effect: "Cố định IQ của đối phương về 1. (Không thể tăng hoặc giảm).",
    tags: ["Frost", "Abyssal"],
    color: "#C0C0C0",
  },
  {
    id: "POW191",
    name: "King Conqueror",
    effect: "Đối thủ nhận -1 all stats.",
    tags: ["Wibu"],
    color: "#A9A9A9",
  },
  {
    id: "POW192",
    name: "Age Manipulation",
    effect: "Đối thủ nhận +1 IQ và -1 mọi stat còn lại.",
    tags: ["Nature"],
    color: "#808080",
  },
  {
    id: "POW193",
    name: "Bash",
    effect:
      "Mỗi round thắng trong combat, có khả năng khiến đối phương bị -3 vào chỉ số ở round kế tiếp (35%).",
    tags: ["Physical"],
    color: "#696969",
  },
  {
    id: "POW194",
    name: "Abysswalker",
    effect:
      "Khi thua 2 round, nhân ba(x3) điểm mất đi hoặc nhận được ở 1 round random của combat đó. Việc thực hiện nhân ba này luôn diễn ra ở thứ tự cuối cùng của các phép tính ở round đó.",
    tags: ["Abyssal"],
    color: "#778899",
  },
  {
    id: "POW195",
    name: "Corrosion",
    effect:
      "Nếu bạn thắng round Strength, đối thủ bị trừ Durability bằng một nửa số chênh lệch Strength. (làm tròn lên)",
    tags: ["Arcana"],
    color: "#708090",
  },
  {
    id: "POW196",
    name: "Rinne Sharingan",
    effect:
      "Global Arena Effect bị vô hiệu hóa cho cả hai người chơi. Mỗi khi thắng trận, nhận +1 all stats. (Stack)",
    tags: ["Wibu"],
    color: "#2F4F4F",
  },
  {
    id: "POW197",
    name: "Wonder of U",
    effect:
      "Nhận +3 BIQ. Sau khi kết thúc mỗi round đấu stats, đối thủ bị giảm 1 chỉ số ngẫu nhiên. Số lượng giảm = (số round đã đấu trong combat đó + 1).",
    tags: ["Wibu", "Summoning"],
    color: "#000000",
  },
  {
    id: "POW198",
    name: "Weather Report",
    effect:
      "Bạn sẽ không nhận Debuff từ Arena. Nếu đối phương có nhận debuff Arena liên quan đến giảm chỉ số, nhân đôi lượng chỉ số bị giảm của đối phương.",
    tags: ["Wibu", "Summoning"],
    color: "#C8E6C9",
  },
  {
    id: "POW199",
    name: "Golden Experience Requiem",
    effect:
      "Mỗi khi thua 1 round trong combat, đánh lại round đó. Mỗi loại chỉ số chỉ có thể đánh lại 1 lần. Mỗi khi đối phương Crit, đối phương sẽ phải quay lại Crit Wheel, hiệu ứng này chỉ có thể có tác dụng tối đa 2 lần trong 1 combat.",
    tags: ["Wibu", "Summoning"],
    color: "#FFCDD2",
  },
  {
    id: "POW200",
    name: "The World",
    effect:
      "Nhận +2 Strength và +2 Martial Arts. Với mỗi 3 điểm Base Speed dưới 10 của đối phương, nhận chỉ số này thêm 1 lần nữa.",
    tags: ["Wibu", "Summoning"],
    color: "#E1BEE7",
  },
  {
    id: "POW201",
    name: "Float",
    effect:
      "Nhận +4 Speed. Nếu bạn thắng round Speed với chênh lệch lớn hơn 5 đơn vị, nhận +1 điểm combat.",
    tags: ["Quirk", "Physical"],
    color: "#D1C4E9",
  },
  {
    id: "POW202",
    name: "Malevolent Shrine (Ryoiki Tenkai)",
    effect:
      "Với mỗi round Strength hoặc Martial Arts bạn thắng, bạn sẽ nhận được thêm 1 điểm nữa. Mỗi khi chiến thắng một người chơi sở hữu Power thuộc 'Domain Expansion' Wheel, nhận +1 Strength và +1 Martial Arts.",
    tags: ["Abyssal", "Wibu"],
    color: "#BBDEFB",
  },
  {
    id: "POW203",
    name: "King Crimson",
    effect:
      "Nhận +3 Martial Arts. Khi đang combat 1 chỉ số, nếu Base Stat ở chỉ số kế tiếp của bạn thấp hơn đối phương, nhận +3 vào chỉ số đang combat.",
    tags: ["Wibu", "Summoning"],
    color: "#B2EBF2",
  },
  {
    id: "POW204",
    name: "Self-Embodiment of Perfection (Ryoiki Tenkai)",
    effect:
      "Khi bạn thắng 3 round trong combat, ngay lập tức thắng luôn cả combat đó.",
    tags: ["Abyssal", "Wibu"],
    color: "#B2DFDB",
  },
  {
    id: "POW205",
    name: "Overhaul",
    effect:
      "Nếu bạn thắng round Speed và Martial Arts, bạn sẽ thắng combat ngay lập tức.",
    tags: ["Quirk", "Abyssal"],
    color: "#DCEDC8",
  },
  {
    id: "POW206",
    name: "Chaos Enchantment",
    effect:
      "Khi đang ở trạng thái Redemption Arc, nhận +3 all stats. Power này sẽ tự biến mất sau 1 trận thắng và không có hiệu lực trong Tournament.",
    tags: ["Abyssal"],
    color: "#F0F4C3",
  },
  {
    id: "POW207",
    name: "Warzone",
    effect:
      "Đối phương bị loại bỏ hoàn toàn hiệu ứng Global Effect từ Arena. Mỗi khi chiến thắng, nhận +1 vào chỉ số thấp nhất. (Stack)",
    tags: ["Physical"],
    color: "#FFECB3",
  },
  {
    id: "POW208",
    name: "Source of Fear",
    effect:
      "Khi đối đầu với chủng tộc thấp kém hơn, nhận +1 All Stats. Mỗi khi đánh bại 1 kẻ địch thuộc chủng tộc thấp hơn, nhận +2 vào chỉ số cao nhất và +1 vào chỉ số thấp nhất. Mỗi khi thua 1 chủng tộc thấp kém hơn, mất VĨNH VIỄN 1 power ngẫu nhiên (không thể mất Source of Fear theo cách này).",
    tags: ["Abyssal"],
    color: "#FFE0B2",
  },
  {
    id: "POW209",
    name: "Equalizer",
    effect:
      "Vô hiệu hóa toàn bộ yếu tố ảnh hưởng tới bất kì chỉ số nào của cả 2 bên trong combat và đưa về thuần so sánh Base Stats. (Các hiệu ứng cộng Base Stats và cộng vĩnh viễn sẽ được giữ)",
    tags: ["Physical"],
    color: "#FFCCBC",
  },
  {
    id: "POW210",
    name: "Numby",
    effect: "Cứ mỗi 2 round bạn thắng trong cùng 1 combat, nhận thêm 1 điểm.",
    tags: ["Summoning"],
    color: "#D7CCC8",
  },
  {
    id: "POW211",
    name: "Gagaku Kairo (Bankai)",
    effect:
      "Khi số round thua của bạn nhiều hơn số round thắng trong 1 combat, nhận thêm 2 điểm trong combat đó. Power này không thể kích hoạt trong 2 combat liên tiếp.",
    tags: ["Blood", "Wibu"],
    color: "#CFD8DC",
  },
  {
    id: "POW212",
    name: "Relentless",
    effect:
      "Nếu kết quả trận đấu chỉ chênh lệch nhau 1 điểm nghiêng về phía đối thủ, đưa về thế tie-break.",
    tags: ["Physical"],
    color: "#BDBDBD",
  },
  {
    id: "POW213",
    name: "Deadly Sentencing (Ryoiki Tenkai)",
    effect:
      "Khi bạn thua trận, kích hoạt Power này. Nhận Sentence Wheel, trọng số bạn thắng = chỉ số thấp nhất của bạn và trọng số đối phương thắng = chỉ số cao nhất của đối phương. Kết quả của vòng quay sẽ là kết quả trận đấu. Khi kích hoạt đủ 2 lần, Power này sẽ rời khỏi chủ sở hữu.",
    tags: ["Abyssal", "Wibu"],
    color: "#E0E0E0",
  },
  {
    id: "POW214",
    name: "Glorious Evolution",
    effect:
      "Sau mỗi 2 Combat, nhận 1 'Steampunk' Power. Sau mỗi combat thắng, nhận 1 Normal 'Steampunk' Gear. Với mỗi Steampunk Power, nhận +2 stat cao nhất. Với mỗi Steampunk Gear, nhận +1 Stat thấp nhất. Tất cả 'Nature' và 'Physical' Power trên người sẽ bị vô hiệu hóa, chuyển hóa thành +1 vào stat thấp nhất với mỗi cái bị vô hiệu.",
    tags: ["Steampunk"],
    color: "#9E9E9E",
  },
  {
    id: "POW215",
    name: "Rinnegan",
    effect:
      "Mỗi khi thắng trận, nhận +1 all stats. Mỗi khi thua trận, -1 all stats. (Stack)",
    tags: ["Wibu"],
    color: "#607D8B",
  },
  {
    id: "POW216",
    name: "Summoning Imp",
    effect:
      "Mỗi khi thắng 1 combat, nhận thêm 1 PvE Combat. Mỗi khi thua 1 combat, nhận 1 PvP Rewards. Khi có nhiều hơn 3 Summoning Power, nhận +1 all stats.",
    tags: ["Summoning", "Abyssal"],
    color: "#795548",
  },
  {
    id: "POW217",
    name: "Hunter's Rewards",
    effect: "Sau khi thắng 1 combat PvP, nhận 2 phần thưởng PvP thay vì 1.",
    tags: ["Physical", "Holy"],
    color: "#3E2723",
  },
  {
    id: "POW218",
    name: "Hunter's Lore",
    effect: "Sau 3 trận thắng, loại bỏ Power này để nhận Hunter's Rewards.",
    tags: ["Physical"],
    color: "#212121",
  },
  {
    id: "POW219",
    name: "Lightning Lord",
    effect:
      "Bạn có thêm 1 Summon với hiệu ứng: Với mỗi 3 điểm bạn ghi được trong combat hiện tại, bạn sẽ nhận được 1 điểm ở combat kế tiếp. (Điểm nhận thêm từ hiệu ứng của Lightning Lord vẫn được tính stack cho combat tiếp theo)",
    tags: ["Summoning", "Lightning"],
    color: "#263238",
  },
  {
    id: "POW220",
    name: "Sanguine Pool",
    effect:
      "Sau khi thua combat, đánh lại combat đó với +5 Durability. Nếu bạn chiến thắng, Power này sẽ có thể sử dụng tiếp vào combat tiếp theo, nếu kết quả vẫn là thua, mất Power này.",
    tags: ["Blood"],
    color: "#00BCD4",
  },
  {
    id: "POW221",
    name: "Rampage",
    effect:
      "Sau mỗi trận PvP thắng, có 25% khả năng nhận +1 all stats. (Stack)",
    tags: ["Physical"],
    color: "#009688",
  },
  {
    id: "POW222",
    name: "Power Absorption",
    effect:
      "Sau mỗi trận thắng, hấp thụ vĩnh viễn 1 Power ngẫu nhiên của đối thủ.",
    tags: ["Arcana"],
    color: "#4CAF50",
  },
  {
    id: "POW223",
    name: "All For One",
    effect:
      "Mỗi khi đối đầu với một kẻ địch có Power thuộc tag 'Quirk', hấp thụ toàn bộ chúng sau combat, không thể hấp thụ Power 'One For All' và không thể cướp trùng Quirk đã có. Mỗi Alliance chỉ có thể có 1 người sở hữu Power này.",
    tags: ["Quirk", "Abyssal"],
    color: "#8BC34A",
  },
  {
    id: "POW224",
    name: "Stat Absorption",
    effect:
      "Sau mỗi trận thắng, +1 cho bản thân vào chỉ số mà đối thủ có cao nhất. (Stack)",
    tags: ["Arcana"],
    color: "#CDDC39",
  },
  {
    id: "POW225",
    name: "Holy Judgement",
    effect:
      "Sau khi chiến thắng một trận combat, hấp thụ đi 1 điểm chỉ số mà đối phương có cao nhất. (Stack)",
    tags: ["Holy"],
    color: "#FFEB3B",
  },
  {
    id: "POW226",
    name: "Holy Protection",
    effect:
      "Nhận +7 Durability. Sau mỗi combat, giảm lượng nhận thêm đi 2 đơn vị. Khi đã qua 3 combat, loại bỏ Power này.",
    tags: ["Holy"],
    color: "#FFC107",
  },
  {
    id: "POW227",
    name: "Cognition Engine",
    effect:
      "Khi chiến đấu ở 'Mechanopolis', sẽ nhận thêm +1 vào stat thấp nhất khi thắng. (Stack)",
    tags: ["Physical", "Steampunk"],
    color: "#FF9800",
  },
  {
    id: "POW228",
    name: "Devour",
    effect:
      "Sau khi LOẠI 1 người chơi, nhận 1 power từ họ và +1 vào chỉ số thấp nhất.",
    tags: ["Blood", "Physical"],
    color: "#FF5722",
  },
  {
    id: "POW229",
    name: "Bucking Bronco",
    effect:
      "Round Martial Arts thắng và thắng trận sẽ nhận +1 Martial Arts. (Stack)",
    tags: ["Physical", "Steampunk"],
    color: "#F44336",
  },
  {
    id: "POW230",
    name: "Blood Barrage",
    effect: "Sau mỗi combat, có 50% nhận ngẫu nhiên 1 Blood Power.",
    tags: ["Blood"],
    color: "#E91E63",
  },
  {
    id: "POW231",
    name: "Nullification",
    effect:
      "Trong Arena, nếu có bất kỳ power nào thuộc 'Healing', 'Healing Effect', 'Curse', bạn có thể loại bỏ tất cả chúng. (Stack)",
    tags: ["Physical", "Summoning"],
    color: "#9C27B0",
  },
  {
    id: "POW232",
    name: "Banished",
    effect:
      "Hãy cẩn thận với việc nhận lại các Power từ trận đấu này. Khi bị đánh bại, loại bỏ Power của đối thủ và nhận +1 vào stat cao nhất.",
    tags: ["Abyssal"],
    color: "#673AB7",
  },
  {
    id: "POW233",
    name: "Gaining Experience",
    effect: "Mỗi khi chiến thắng, nhận +2 vào stat thấp nhất.",
    tags: ["Physical"],
    color: "#3F51B5",
  },
  {
    id: "POW234",
    name: "Invulnerability",
    effect: "Bảo vệ bản thân khỏi 1 sự tấn công với bất kỳ stat nào.",
    tags: ["Physical", "Holy"],
    color: "#2196F3",
  },
  {
    id: "POW235",
    name: "World Devourer",
    effect:
      "Khi đối thủ có ít hơn 25% sức mạnh còn lại, bạn nhận được +3 vào stat thấp nhất và hồi lại 10% HP.",
    tags: ["Abyssal"],
    color: "#03A9F4",
  },
  {
    id: "POW236",
    name: "Relentless Pursuit",
    effect:
      "Sau mỗi trận thắng, đối thủ sẽ bị giảm 2 điểm ở chỉ số cao nhất. Power này không thể mất đi.",
    tags: ["Physical"],
    color: "#00BCD4",
  },
  {
    id: "POW237",
    name: "Infinity Gauntlet",
    effect:
      "Mỗi khi bạn chiến thắng trong combat, tất cả chỉ số của bạn sẽ tăng lên 1 lần nữa.",
    tags: ["Wibu"],
    color: "#009688",
  },
  {
    id: "POW238",
    name: "Chrono Break",
    effect:
      "Sau khi thua 2 round liên tiếp, quay lại vòng combat trước đó với cơ hội chiến thắng cao hơn.",
    tags: ["Abyssal"],
    color: "#4CAF50",
  },
  {
    id: "POW239",
    name: "Void Eclipse",
    effect:
      "Khi đối thủ có ít hơn 25% HP, nhận +4 vào stat của bạn, không bị giảm đi.",
    tags: ["Abyssal"],
    color: "#8BC34A",
  },
  {
    id: "POW240",
    name: "Good for Something",
    effect:
      'Khi bạn bị loại, chuyển 1 Gear ngẫu nhiên không có tag "Cursed" của bạn sang người cùng Alliance combat kế tiếp.',
    tags: ["Abyssal"],
    color: "#CDDC39",
  },
  {
    id: "POW241",
    name: "Death from Below",
    effect:
      "Khi bạn loại bỏ 1 người chơi thuộc Alliance đối địch, bạn và người cùng Alliance combat gần nhất nhận +1 vào 1 Stat ngẫu nhiên.",
    tags: ["Physical"],
    color: "#FFEB3B",
  },
  {
    id: "POW242",
    name: "Return to Sender",
    effect: "Sau Combat thua, -1 VĨNH VIỄN base stat cao nhất của đối thủ.",
    tags: ["Arcana", "Steampunk"],
    color: "#FFC107",
  },
  {
    id: "POW243",
    name: "Frozen Heart",
    effect:
      "Đối thủ nhận -4 speed ở combat hiện tại và -2 speed ở combat tiếp theo của họ.",
    tags: ["Frost"],
    color: "#FF9800",
  },
  {
    id: "POW244",
    name: "Acid-Throated",
    effect: "Cổ họng đầy Axit, khi thua trận khiến -2 Durability cho đối thủ.",
    tags: ["Nature"],
    color: "#FF5722",
  },
  {
    id: "POW245",
    name: "Memory Freeze",
    effect:
      "Trong combat kế tiếp của đối phương, đối phương sẽ không nhận được PvP Rewards từ bất kì cách nào.",
    tags: ["Frost"],
    color: "#F44336",
  },
  {
    id: "POW246",
    name: "Gaze of the Abyss",
    effect:
      "Vào lúc tổng kết trận đấu, nếu bạn thắng và Speed của đối thủ thấp hơn bạn thì đối thủ sẽ bị -1 IQ -1 BIQ vĩnh viễn.",
    tags: ["Abyssal"],
    color: "#E91E63",
  },
  {
    id: "POW247",
    name: "Moon Aura",
    effect: "Mỗi người có Moon Aura sẽ nhận 1 random Power sau mỗi combat.",
    tags: ["Arcana"],
    color: "#9C27B0",
  },
  {
    id: "POW248",
    name: "Baldening",
    effect: "Khiến đối thủ bị rụng hết tóc. 💀",
    tags: ["Arcana"],
    color: "#673AB7",
  },
  {
    id: "POW249",
    name: "Hand Washing",
    effect: "Tay sạch 💀",
    tags: ["Water"],
    color: "#3F51B5",
  },
  {
    id: "POW250",
    name: "The Goat",
    effect: "Bạn là dê! 💀",
    tags: ["Nature"],
    color: "#2196F3",
  },
  {
    id: "POW251",
    name: "Cold Breeze",
    effect: "Mát lạnh!",
    tags: ["Frost"],
    color: "#03A9F4",
  },
  {
    id: "POW252",
    name: "Minor Fire Control",
    effect:
      "Có thể điều khiển được một ngọn lửa nhỏ bật hoặc tắt. Ngoài ra không tác dụng 💀",
    tags: ["Fire"],
    color: "#607D8B",
  },
  {
    id: "POW253",
    name: "Blowing Leaves",
    effect: "Thổi lá bay đi 💀",
    tags: ["Nature"],
    color: "#9E9E9E",
  },
  {
    id: "POW254",
    name: "Fragrant",
    effect: "Thơm tho dễ chịu.",
    tags: ["Nature"],
    color: "#E0E0E0",
  },
  {
    id: "POW255",
    name: "Rickrolling",
    effect: "Chắc không cần giải thích đâu nhỉ 💀",
    tags: ["Physical"],
    color: "#F5F5F5",
  },
  {
    id: "POW256",
    name: "Capybara",
    effect: "Bạn có thêm 1 Summon. 💀",
    tags: ["Summoning"],
    color: "#FAFAFA",
  },
  {
    id: "POW257",
    name: "Ice Liquefactors",
    effect: "Hóa lỏng băng 💀???",
    tags: ["Steampunk", "Frost", "Water"],
    color: "#000000",
  },
  {
    id: "POW258",
    name: "Mewing",
    effect: "Bye bye 🤫🧏‍♂",
    tags: ["Physical"],
    color: "#FFFFFF",
  },
  {
    id: "POW259",
    name: "Ballet Dancing",
    effect: "Múa dẻo 💃",
    tags: ["Physical"],
    color: "#212121",
  },
  {
    id: "POW260",
    name: "Water Breathing",
    effect: "Thở dưới nước.",
    tags: ["Water"],
    color: "#424242",
  },
  {
    id: "POW261",
    name: "Night Vision",
    effect: "Có thể nhìn trong bóng tối. 💀",
    tags: ["Abyssal"],
    color: "#616161",
  },
  {
    id: "POW262",
    name: "Gotta go Fast",
    effect: "Bạn là Sonic 💀",
    tags: ["Lightning"],
    color: "#757575",
  },
  {
    id: "POW263",
    name: "Tick-tock",
    effect: "Cơ thể bạn phát ra tiếng của đồng hồ. 💀",
    tags: ["Steampunk"],
    color: "#9E9E9E",
  },
  {
    id: "POW264",
    name: "Jogan",
    effect: "Mắt sáng, không bị cận",
    tags: ["Wibu"],
    color: "#BDBDBD",
  },
  {
    id: "POW265",
    name: "Hey Ya!",
    effect: "Bạn được cổ vũ tinh thần 💀.",
    tags: ["Wibu", "Summoning"],
    color: "#E0E0E0",
  },
];
