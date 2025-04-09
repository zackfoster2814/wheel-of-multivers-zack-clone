export const powerSections = [
  {
    id: "PO001",
    name: "Shinuchi (Bankai)",
    description: "Đối thủ bị vô hiệu hóa toàn bộ Power khi combat.",
    power: ["Arcana", "Wibu"],
  },
  {
    id: "PO002",
    name: "Hellflame",
    description:
      'Toàn bộ "Fire" Power của đối phương sẽ thuộc về bạn (chỉ trong combat đó). Sau mỗi combat với người chơi có sở hữu "Fire" Power, nhận +2 vào chỉ số thấp nhất. (Stack)',
    power: ["Quirk", "Fire"],
  },
  {
    id: "PO003",
    name: "Zanka no Tachi (Bankai)",
    description:
      'Hấp thụ vĩnh viễn toàn bộ Power có tag "Fire" của những kẻ địch đối đầu.',
    power: ["Fire", "Wibu"],
  },
  {
    id: "PO004",
    name: "Rinrin's Chihuahua",
    description: "Nhận -1 All Stats.",
    power: ["Summoning"],
  },
  {
    id: "PO005",
    name: "Regular Chihuahua",
    description: "Nhận -1 All Stats.",
    power: ["Summoning"],
  },
  {
    id: "PO006",
    name: "Igris",
    description:
      "Nhận +1 Strength và +1 Speed. Với mỗi Summon bạn có, nhận chỉ số này thêm 1 lần nữa.",
    power: ["Summoning"],
  },
  {
    id: "PO007",
    name: "Creator's Cat",
    description: 'Nhận thêm Char Dev "Creator\'s Favor" khi quay Char Dev.',
    power: ["Summoning"],
  },
  {
    id: "PO008",
    name: "That thing from FMA",
    description: "Nhận hiệu ứng tương tự Chimera của Mythical Beast.",
    power: ["Summoning"],
  },
  {
    id: "PO009",
    name: "Rewind",
    description:
      "Đưa đối thủ hiện tại về trạng thái của vòng combat trước (loại bỏ PvP Rewards và tất cả những hiệu ứng đã áp dụng). Power này sẽ có hiệu lực vĩnh viễn.",
    power: ["Quirk"],
  },
  {
    id: "PO010",
    name: "Sun Aura",
    description:
      "Mỗi người có Sun Aura sẽ nhận +2 VĨNH VIỄN vào chỉ số thấp nhất trước mỗi combat.",
    power: ["Holy"],
  },
  {
    id: "PO011",
    name: "Idle Death Gamble (Ryoiki Tenkai)",
    description:
      "Nhận vòng quay may mắn ngay trước khi combat với 8% khả năng +100 all stats, 22% khả năng +1 all stats và 70% không có gì xảy ra. (Hiệu lực chỉ trong combat đó). Toàn bộ Power khác Idle Death Gamble của bạn bị vô hiệu hóa. Power này không thể bị xóa, vô hiệu hoặc cướp.",
    power: ["Abyssal", "Wibu"],
  },
  {
    id: "PO012",
    name: "Headshot",
    description:
      'Khi bắt đầu combat, quay 2 chỉ số ngẫu nhiên. Khi thắng những chỉ số được quay ra sẽ nhận thêm 1 điểm và chắc chắn Crit nếu có power "Critical Strike".',
    power: ["Physical"],
  },
  {
    id: "PO013",
    name: "Susanoo",
    description:
      'Nhận 2 random Normal Gear. Với mỗi "Gear" sở hữu, +1 vào chỉ số thấp nhất.',
    power: ["Summoning"],
  },
  {
    id: "PO014",
    name: "Get Excited!",
    description:
      "Nếu combat trước bạn chiến thắng, nhận +4 Strength và +4 Speed khi combat.",
    power: ["Physical"],
  },
  {
    id: "PO015",
    name: "Daiguren Hyorinmaru (Bankai)",
    description:
      'Nhận +1 Martial Arts và 1 Power có tag "Frost" ngẫu nhiên. Với mỗi Power có tag "Frost" sở hữu, nhận +1 Martial Arts.',
    power: ["Frost", "Wibu"],
  },
  {
    id: "PO016",
    name: "Santoryu",
    description:
      'Giới hạn số lượng vũ khí được đẩy lên 3, nhận thêm 1 vòng quay vũ khí có tag "Sword". Sẽ chỉ có thể sử dụng và nhận "Sword". Mỗi khi nhận 1 vũ khí random sẽ chắc chắn nhận Sword. Khi có đủ 3 "Sword", nhận +3 Strength, +3 Speed, +3 BIQ. (Các Sword còn lại sẽ không được là Unique Weapon, nếu nhận Unique sẽ mặc định chuyển thành 1 Normal Sword). Nếu bị vô hiệu hóa power này, khả năng sử dụng 3 vũ khí vẫn được giữ lại.',
    power: ["Physical"],
  },
  {
    id: "PO017",
    name: "Hawk-Eye Harbinger",
    description:
      "Nhận 2 Strength, 2 Martial Art khi đối đầu với chủng tộc thuộc nửa trên bảng xếp hạng.",
    power: ["Steampunk"],
  },
  {
    id: "PO018",
    name: "The Greatest Showman",
    description: "Nhận tất cả Power vô dụng sau đó loại bỏ power này.",
    power: ["Arcana"],
  },
  {
    id: "PO019",
    name: "Killer Queen",
    description:
      'Khi nhận Power này, chọn ngẫu nhiên 5 người chơi bên phe Alliance đối địch.\n\nKhi vào vòng Tournament, nếu người sở hữu Power này chưa bị loại thì 5 người chơi được chọn chắc chắn sẽ bị loại ở vòng đấu tiếp theo của họ (nếu họ còn sống). Với mỗi người chơi bị loại theo cách này, nhận +1 vào một chỉ số ngẫu nhiên.\n\nVào thời điểm toàn bộ người chơi được chọn đã bị loại, nhận +1 all stats. Nếu bạn spin ra Power này ở vòng Tournament, spin lại "Stand" Wheel để nhận 1 Stand khác.',
    power: ["Wibu", "Summoning"],
  },
  {
    id: "PO020",
    name: "Haki",
    description: 'Nhận "Haki" Wheel rồi loại bỏ power này.',
    power: ["Wibu"],
  },
  {
    id: "PO021",
    name: "Quirks",
    description: 'Nhận "Quirks" Wheel rồi loại bỏ power này.',
    power: ["Wibu"],
  },
  {
    id: "PO022",
    name: "Jojo Stands",
    description: 'Nhận "Stands" Wheel rồi loại bỏ power này.',
    power: ["Wibu"],
  },
  {
    id: "PO023",
    name: "Dojutsu",
    description: 'Nhận "Dojutsu" Wheel rồi loại bỏ power này.',
    power: ["Wibu"],
  },
  {
    id: "PO024",
    name: "Ryoiki Tenkai",
    description: 'Nhận "Domain Expansion" Wheel rồi loại bỏ power này.',
    power: ["Wibu"],
  },
  {
    id: "PO025",
    name: "Time Travel",
    description:
      "Re-spin lại chỉ số thấp nhất 1 lần sau đó loại power này ra khỏi danh sách power của bản thân.",
    power: ["Arcana"],
  },
  {
    id: "PO026",
    name: "Reversed Cursed Fate",
    description:
      'Tất cả hiệu ứng trừ Stats từ trang bị "Cursed" sẽ được chuyển thành cộng. Nhận ngẫu nhiên 1 "Cursed" Normal Gear.',
    power: ["Abyssal"],
  },
  {
    id: "PO027",
    name: "Hidden Potential",
    description: 'Nhận thêm 1 "Character Development" và loại bỏ Power này.',
    power: ["Arcana"],
  },
  {
    id: "PO028",
    name: "Abyss Monster",
    description:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 Strength, và nhận thêm bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    power: ["Summoning", "Abyssal"],
  },
  {
    id: "PO029",
    name: "Pack of Wolves",
    description:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 BIQ, và nhận thêm Bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    power: ["Summoning", "Physical"],
  },
  {
    id: "PO030",
    name: "Rising tide",
    description:
      'Nhận +2 Martial Arts. Gấp đôi nếu như bạn sở hữu vũ khí "Poseidon\'s Trident"',
    power: ["Water"],
  },
  {
    id: "PO031",
    name: "Rise from the Ashes",
    description:
      "Nhận +3 all stats. Sau mỗi trận đấu, nhận -1 all stats. Sau 3 combat, xóa bỏ Power này.",
    power: ["Fire"],
  },
  {
    id: "PO032",
    name: "Invulnerability",
    description: "Nhận +3 Durability.",
    power: ["Holy"],
  },
  {
    id: "PO033",
    name: "Mufasa",
    description: "Nhận +4 Strength.",
    power: ["Summoning"],
  },
  {
    id: "PO034",
    name: "Hades' Blessing",
    description: "Nhận +2 Strength, +2 Speed, +1 BIQ và +1 Martial Arts.",
    power: ["Abyssal", "Blood"],
  },
  {
    id: "PO035",
    name: "Gate to Heaven",
    description: 'Khi ở trạng thái "Redemption Arc", nhận +1 all stats.',
    power: ["Holy"],
  },
  {
    id: "PO036",
    name: "Stone Skin",
    description: "Nhận +4 Durability.",
    power: ["Nature"],
  },
  {
    id: "PO037",
    name: "Stand United",
    description:
      "Tất cả người chơi có cùng Alliance lẫn Race với bạn nhận +2 Martial Arts. (tính cả bản thân).",
    power: ["Physical"],
  },
  {
    id: "PO038",
    name: "Earth Golem",
    description:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 Durability, và nhận thêm bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    power: ["Summoning", "Nature"],
  },
  {
    id: "PO039",
    name: "Katen Kyokotsu: Karamatsu Shinju (Bankai)",
    description:
      "Nhận +2 Strength và +1 Durability. Đối thủ bị giảm 2 Durability.",
    power: ["Abyssal", "Wibu"],
  },
  {
    id: "PO040",
    name: "Coffin of the Iron Mountain (Ryoiki Tenkai)",
    description: "Nhận +3 Strength, +2 BIQ và +1 Martial Arts.",
    power: ["Fire", "Wibu"],
  },
  {
    id: "PO041",
    name: "Body Enhancing",
    description: "Nhận +1 Strength, +1 Speed, +1 Durability.",
    power: ["Physical"],
  },
  {
    id: "PO042",
    name: "Tail",
    effect: "Nhận +1 Durability.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: "PO043",
    name: "Tusk Act II",
    effect: "Nhận +2 Strength và +1 BIQ.",
    tags: ["Wibu", "Summoning"],
  },
  {
    id: "PO044",
    name: "Shock Blast",
    effect: "Nhận +3 Strength.",
    tags: ["Lightning"],
  },
  {
    id: "PO045",
    name: "Fa Jin",
    effect: "Nhận +2 Strength và +1 Speed.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: "PO046",
    name: "Love",
    effect:
      "Quay một nhân vật cùng Alliance, nhân vật đó nhận 1 Quirk ngẫu nhiên (chỉ nằm trong Power Wheel) và +1 Strength với mỗi Quirk họ có. Khi người sở hữu Power này bị loại thì người được chọn cũng mất các hiệu ứng này. (2 người sẽ được tính là Lovers của nhau) Power này có thể được nhận nhiều lần.",
    tags: ["Quirk"],
    multi: true,
  },
  {
    id: "PO047",
    name: "Big Fist",
    effect: "Nhận +1 Strength.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: "PO048",
    name: "Hardening",
    effect: "Nhận +1 Durability.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: "PO049",
    name: "Play Ball with your life",
    effect: "Nhận +2 Strength, +2 Speed và +1 Durability.",
    tags: ["Physical"],
  },
  {
    id: "PO050",
    name: "Lightning Mastery",
    effect: "Nhận +3 IQ.",
    tags: ["Lightning"],
  },
  { id: "PO051", name: "Fire Mastery", effect: "Nhận +5 BIQ.", tags: ["Fire"] },
  {
    id: "PO052",
    name: "Explosion",
    effect: "Nhận +1 Strength và +2 Martial Arts.",
    tags: ["Quirk"],
  },
  { id: "PO053", name: "Clear Mind", effect: "Nhận +2 IQ.", tags: ["Arcana"] },
  {
    id: "PO054",
    name: "Burning Hand",
    effect: "Nhận +1 Strength và +2 Martial Arts.",
    tags: ["Fire"],
  },
  {
    id: "PO055",
    name: "Thunder Strike",
    effect: "Nhận +1 Strength, +1 BIQ.",
    tags: ["Lightning"],
  },
  {
    id: "PO056",
    name: "Tsunami Control",
    effect: "Gọi sóng thần, +2 Strength",
    tags: ["Water"],
  },
  {
    id: "PO057",
    name: "Fist Fighting",
    effect:
      "Nhận +2 Martial Arts. Khi đang không cầm vũ khí, gấp đôi chỉ số này.",
    tags: ["Physical"],
  },
  {
    id: "PO058",
    name: "Crimson Pact",
    effect:
      "Mỗi 3 Base IQ, tăng 1 Durability. Mỗi 3 Base Durability, tăng 1 IQ.",
    tags: ["Blood"],
  },
  {
    id: "PO059",
    name: "Rabbit",
    effect: "Nhận +1 Speed, +1 BIQ và +1 Martial Arts.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: "PO060",
    name: "Enlarging",
    effect: "Nhận +2 Strength, +2 Durability, -3 Speed.",
    tags: ["Physical"],
  },
  {
    id: "PO061",
    name: "Overdrive",
    effect: "Nhận +3 BIQ, -1 Durability.",
    tags: ["Physical"],
  },
  {
    id: "PO062",
    name: "Summon Undead",
    effect:
      'Undead Ghoul trở thành Summon của bạn: Khi combat ở "Graveyard" Nhận +3 Stat thấp nhất, +1 Stat cao nhất.',
    tags: ["Summoning"],
  },
  {
    id: "PO063",
    name: "Shrinking",
    effect: "Nhận +5 Speed, -2 Strength, -2 Durability.",
    tags: ["Physical"],
  },
  {
    id: "PO064",
    name: "Blood Frenzy",
    effect: "Nhận -3 IQ và -3 BIQ, +2 all stat còn lại.",
    tags: ["Blood"],
  },
  {
    id: "PO065",
    name: "Hunter's Mark",
    effect:
      "Chọn 1 chỉ số ngẫu nhiên trước khi bắt đầu combat. Khi thắng round đấy, nhận +3 vào stat thấp nhất khi tổng kết combat.",
    tags: ["Physical"],
  },
  {
    id: "PO066",
    name: "Nature's Blessing",
    effect: 'Nhận +2 Durability với mỗi power có tag "Nature" sở hữu.',
    tags: ["Nature"],
  },
  {
    id: "PO067",
    name: "Water Elemental",
    effect:
      "Bạn có thêm 1 Summon với hiệu ứng: Nhận +1 Speed, và nhận thêm bonus này lần nữa với mỗi Summoning Power mà bạn có.",
    tags: ["Summoning", "Water"],
  },
  {
    id: "PO068",
    name: "Cold Arrow",
    effect:
      "Nhận +1 strength và +1 Martial Arts. Nhận gấp 3 lần chỉ số này nếu sử dụng vũ khí là Bow/Crossbow.",
    tags: ["Physical", "Frost"],
  },
  {
    id: "PO069",
    name: "Powerful Strike",
    effect: "Nếu có vũ khí, nhận +3 BIQ.",
    tags: ["Physical"],
  },
  {
    id: "PO070",
    name: "Tidecaller's Blessing",
    effect:
      "Chọn 1 người ngẫu nhiên thuộc Alliance của bạn, bạn và họ nhận +1 Speed và +1 IQ VĨNH VIỄN.",
    tags: ["Water"],
  },
  {
    id: "PO071",
    name: "Ice Hammer",
    effect:
      'Nhận +2 Strength. Nếu sở hữu vũ khí Axe/Hammer, gấp đôi con số này. Nếu thi đấu tại "Frostlands" Arena, gấp đôi con số này lần nữa. (tối đa là x4)',
    tags: ["Frost"],
  },
  {
    id: "PO072",
    name: "Odin's Blessing",
    effect:
      'Nhận "+4 Strength". Chuyển thành "+4 vào Stat yếu nhất" khi thua 1 combat.',
    tags: ["Holy"],
  },
  {
    id: "PO073",
    name: "Heat Dispatching Control",
    effect:
      'Với mỗi "Fire" Power, +1 Dura và Strength. Với mỗi "Steampunk" gear, nhận +1 IQ và +1 BIQ.',
    tags: ["Steampunk", "Fire"],
  },
  {
    id: "PO074",
    name: "One For All",
    effect:
      "Nhận +3 Strength, +3 Speed và +3 Durability. Sau khi người sở hữu Power này bị loại, chuyển nó cho người cùng Alliance đã thi đấu và còn sống gần nhất. Mỗi Alliance chỉ có thể có 1 người sở hữu Power này.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: "PO075",
    name: "Let Him Cook",
    effect: "Nhận +1 all stats.",
    tags: ["Physical"],
  },
  {
    id: "PO076",
    name: "Command: Attack",
    effect: "Nhận +3 Strength.",
    tags: ["Steampunk"],
  },
  {
    id: "PO077",
    name: "Command: Protect",
    effect: "Nhận +3 Durability.",
    tags: ["Steampunk"],
  },
  {
    id: "PO078",
    name: "Voidwalking",
    effect: "Nhận +3 Speed.",
    tags: ["Arcana"],
  },
  {
    id: "PO079",
    name: "IQ",
    effect: "Nhận +6 IQ. Power này sẽ biến mất khi bạn thua round IQ.",
    tags: ["Quirk"],
  },
  {
    id: "PO080",
    name: "Dark Shadow",
    effect:
      "Nhận +1 all stats vào trận đánh thứ 1, 3, 5, 7, 9,... (Không tính PvE)",
    tags: ["Quirk", "Arcana"],
  },
  {
    id: "PO081",
    name: "Heal",
    effect: "Nhận +2 Durability. Sau mỗi combat, nhận +1 Durability vĩnh viễn.",
    tags: ["Quirk"],
  },
  {
    id: "PO082",
    name: "Half-Cold Half-Hot",
    effect:
      'Nhận 1 random "Fire" Power và 1 random "Frost" Power. Nhận +1 BIQ với mỗi 2 Power thuộc "Fire" hoặc "Frost.',
    tags: ["Quirk", "Fire", "Frost"],
  },
  {
    id: "PO083",
    name: "Byakugan",
    effect: "Nhận +2 BIQ và +2 Martial Arts.",
    tags: ["Wibu"],
  },
  {
    id: "PO084",
    name: "Tenseigan",
    effect:
      'Nhận +1 BIQ và +1 Martial Arts. Khi vào "Tournament" đổi thành nhận +1 all stats.',
    tags: ["Wibu"],
  },
  { id: "PO085", name: "Observation", effect: "Nhận +3 BIQ.", tags: ["Wibu"] },
  {
    id: "PO086",
    name: "Armament",
    effect: "Nhận +2 Durability và +1 Martial Arts.",
    tags: ["Wibu"],
  },
  {
    id: "PO087",
    name: "Tree Bound",
    effect: "Bị -1 All Stat không phải Durability, +6 vào Durability",
    tags: ["Nature"],
  },
  {
    id: "PO088",
    name: "Nihility Slash",
    effect:
      "Mỗi khi khởi đầu 1 combat, nhận +1 vào 2 chỉ số thấp nhất vĩnh viễn.",
    tags: ["Physical", "Arcana"],
  },
  {
    id: "PO089",
    name: "Guided Arrow",
    effect:
      "Nhận +1 Speed và +1 BIQ. Nếu sử dụng vũ khí thuộc Bow/Crossbow, gấp đôi hai chỉ số được cộng thêm này.",
    tags: ["Physical"],
  },
  {
    id: "PO090",
    name: "Strafe",
    effect:
      "Nhận +1 BIQ và +1 Martial Arts. Nếu sử dụng vũ khí thuộc Bow/Crossbow, gấp đôi hai chỉ số được cộng thêm này.",
    tags: ["Physical"],
  },
  {
    id: "PO091",
    name: "Sweet Win",
    effect:
      'Power này chỉ có tác dụng trước khi vào Tournament. Người nhận Power này sẽ thắng combat tiếp theo. (không tính PvE và không thể bị vô hiệu hóa). Khi có cả 2 power "Sweet Win" và "Spicy Lost" thì sẽ mất cả hai power.',
    tags: ["Abyssal"],
  },
  {
    id: "PO092",
    name: "Spicy Lost",
    effect:
      'Power này chỉ có tác dụng trước khi vào Tournament. Người nhận Power này sẽ thua combat tiếp theo. (không tính PvE và không thể bị vô hiệu hóa)  Khi có cả 2 power "Sweet Win" và "Spicy Lost" thì sẽ mất cả hai power.',
    tags: ["Abyssal"],
  },
  {
    id: "PO093",
    name: "Erasure",
    effect:
      "Trong combat, vô hiệu hóa tối đa 3 Power ngẫu nhiên của đối phương.",
    tags: ["Quirk"],
  },
  {
    id: "PO094",
    name: "Fly",
    effect: 'Vô hiệu hóa các hiệu ứng giảm speed từ Arena "Sky".',
    tags: ["Physical"],
  },
  {
    id: "PO095",
    name: "Total Protection",
    effect:
      "Toàn bộ Power của bạn sẽ không thể bị ảnh hưởng từ hiệu ứng của đối phương.",
    tags: ["Arcana"],
  },
  {
    id: "PO096",
    name: "Mirror Image",
    effect:
      "Trong trận đấu PvP đầu tiên sau khi nhận power này, nhân đôi toàn bộ base stats. Sau trận PvP đầu tiên, loại power này khỏi người sở hữu.",
    tags: ["Arcana"],
  },
  {
    id: "PO097",
    name: "Misty Step Ahead",
    effect: "Ở round PvE khởi đầu với 2 điểm.",
    tags: ["Nature"],
  },
  {
    id: "PO098",
    name: "200 years of Balancing",
    effect:
      "Khi combat ở vòng Tournament, không nhân đôi trọng số của người có stat cao hơn mỗi round, bất kể là bạn hay đối phương.",
    tags: ["Abyssal"],
  },
  {
    id: "PO099",
    name: "Disarmament",
    effect:
      "Đối thủ mất đi vũ khí (chỉ trong combat với nhân vật có power này).",
    tags: ["Physical"],
  },
  {
    id: "PO100",
    name: "Counterspell",
    effect:
      "Vô hiệu hóa Power đầu tiên của đối thủ trong combat. (Đầu tiên tính theo thứ tự nhận power)",
    tags: ["Lightning"],
  },
  {
    id: "PO101",
    name: "Power Negation",
    effect:
      "Vô hiệu hóa 1 Power ngẫu nhiên của đối thủ có độ ưu tiên thấp hơn Power này trong combat.",
    tags: ["Nature"],
  },
  {
    id: "PO102",
    name: "Static Field",
    effect:
      "Đối thủ nhận -2 Durability và bị vô hiệu 1 Power ngẫu nhiên có độ ưu tiên thấp hơn Power này.",
    tags: ["Lightning"],
  },
  {
    id: "PO103",
    name: "Memory Alter",
    effect:
      "Đối thủ bị vô hiệu hóa 1 Power ngẫu nhiên trong combat. Nếu bạn thắng combat, đối thủ sẽ vĩnh viễn mất power đó.",
    tags: ["Abyssal"],
  },
  {
    id: "PO104",
    name: "Anivoice",
    effect: "Vô hiệu hóa 1 Summoning ngẫu nhiên của đối phương.",
    tags: ["Quirk", "Nature"],
  },
  {
    id: "PO105",
    name: "Fire Breath",
    effect:
      'Nhận +2 BIQ và vô hiệu hóa 1 power "Frost" ngẫu nhiên của đối phương.',
    tags: ["Fire"],
  },
  {
    id: "PO106",
    name: "Frost Armor",
    effect:
      'Nhận +2 Durability và vô hiệu hóa 1 random "Water" Power của đối phương.',
    tags: ["Frost"],
  },
  {
    id: "PO107",
    name: "Power Mimicry",
    effect:
      "Sao chép 1 Power ngẫu nhiên của đối thủ. Nếu sao chép trúng Power có độ ưu tiên cao hơn sẽ không có tác dụng. Chỉ có thể dùng được Power sao chép ở trong trận đấu đó.",
    tags: ["Abyssal"],
  },
  {
    id: 108,
    name: "Unstoppable",
    effect:
      "Nhận -2 Martial Arts. Miễn nhiễm với mọi debuff giảm stat từ đối thủ.",
    tags: ["Physical"],
  },
  {
    id: 109,
    name: "Rizzler",
    effect: "Nếu Rizz level của bạn cao hơn đối thủ, +1 điểm khi combat.",
    tags: ["Abyssal"],
  },
  {
    id: 110,
    name: "Golden Vow",
    effect: "Khởi đầu mọi trận đấu với +1 điểm.",
    tags: ["Holy"],
  },
  {
    id: 111,
    name: "Undying Flames",
    effect: "Nhận +1 điểm combat nếu bạn có ít nhất 2 'Fire' Power.",
    tags: ["Fire"],
  },
  {
    id: 112,
    name: "Sacrifice",
    effect:
      "Trong vòng Tournament, +1 điểm khởi đầu nhưng giảm 2 Durability sau combat (stack).",
    tags: ["Blood"],
  },
  {
    id: 113,
    name: "Zero Gravity",
    effect: "Kháng các debuff giảm Speed vào bản thân.",
    tags: ["Quirk"],
  },
  {
    id: 114,
    name: "Reality Warp",
    effect:
      "Hoán đổi Base Stats cao nhất của đối phương với Base Stats thấp nhất của bạn.",
    tags: ["Arcana"],
  },
  {
    id: 115,
    name: "Invisibility",
    effect: "Đối thủ không nhận được điểm khi bạn thua round Strength.",
    tags: ["Quirk"],
  },
  {
    id: 116,
    name: "Divine Static Shock",
    effect:
      "Có 50% nhận 2 Strength và 1 điểm combat trước mỗi combat PvP. Mỗi khi kích hoạt thành công, -5% tỉ lệ cho combat tiếp theo (Stack).",
    tags: ["Holy", "Lightning"],
  },
  {
    id: 117,
    name: "Spear of Fire",
    effect:
      "Nhận +2 Martial Arts. Nếu sử dụng vũ khí 'Polearms', nhận 1 điểm khi khởi đầu combat.",
    tags: ["Physical", "Fire"],
  },
  {
    id: 118,
    name: "Chance Manipulation",
    effect:
      "Tỉ lệ kích hoạt của một số hiệu ứng từ trang bị/ vũ khí/ power của bạn tăng 10% khi vào combat. Các Gear được ảnh hưởng: Gloves of Thieves, Steam Lamp, Lucky Clover Charm, Trickster's Glass (tăng tỉ lệ bản thân nhận điểm), Aegis Shield. Các vũ khí được ảnh hưởng: Tesla Colt SAA, Revolver, Clay Brick, Magic Violin, Flute of Music God, Các Power được ảnh hưởng: Scrying, Waterfowl Dance (tỉ lệ ban đầu và mỗi lần reset được tăng), Bash, Rampage, Evasion, Critical Strike, Divine Static Shock, The Sand of Time.",
    tags: ["Arcana"],
  },
  {
    id: 119,
    name: "Infinity (Ryoiki Tenkai)",
    effect:
      "Speed của đối phương bị cố định ở 0. Đối phương nhận +8 IQ, nếu IQ đối phương hơn hoặc bằng 13, đối phương ngay lập tức thua round IQ.",
    tags: ["Arcana", "Wibu"],
  },
  {
    id: 120,
    name: "Blood Manipulation",
    effect:
      "Nhận +3 BIQ khi đối đầu với tất cả kẻ địch trừ 'Skeleton' và 'Spirit'.",
    tags: ["Blood"],
  },
  {
    id: 121,
    name: "Spirit Link",
    effect:
      "Nhận +1 vào 1 Stat ngẫu nhiên với mỗi 50 người đã bị loại thuộc Alliance của bạn khi bắt đầu vào combat (Stack)",
    tags: ["Arcana"],
  },
  {
    id: 122,
    name: "Avenge the Fallen",
    effect:
      "Nếu người chơi cùng Alliance thất bại trong combat trước bạn (Combat gần nhất) và đối thủ của bạn ở Alliance đối địch, nhận +2 vào 2 stat thấp nhất khi combat.",
    tags: ["Holy", "Physical"],
  },
  {
    id: 123,
    name: "Garlic Breath",
    effect: "Nhận +2 all stats khi vào combat nếu đối thủ là Vampire.",
    tags: ["Nature"],
  },
  {
    id: 124,
    name: "Holy Lance Thrust",
    effect: "Nhận +2 Strength khi vào combat. Đối thủ giảm 1 Durability.",
    tags: ["Holy"],
  },
  {
    id: 125,
    name: "Adrenaline Burst",
    effect:
      "Nhận +4 Speed khi vào combat đầu tiên và mỗi 2 combat sau đó (1, 3, 5, 7...)",
    tags: ["Physical"],
  },
  {
    id: 126,
    name: "Unified Resistance",
    effect:
      "Với mỗi 3 Durability của người cùng Alliance combat trước bạn, nhận +1 Durability khi combat.",
    tags: ["Physical"],
  },
  {
    id: 127,
    name: "Guidance",
    effect:
      "Random +1 vào 2 Stat ngẫu nhiên mỗi khi combat với đối thủ ít power hơn mình. (Stack)",
    tags: ["Holy"],
  },
  {
    id: 128,
    name: "Magma Strike",
    effect:
      "Đối thủ nhận -2 Durability, sau combat, đối thủ bị vĩnh viễn -1 Durability.",
    tags: ["Fire"],
  },
  {
    id: 129,
    name: "Hell Bound",
    effect:
      "Đối thủ nhận -2 vào stat thấp nhất trong combat. Nếu bạn chiến thắng, hiệu ứng trừ này sẽ áp dụng vĩnh viễn.",
    tags: ["Fire"],
  },
  {
    id: 130,
    name: "Thunderstorm of hail and fire",
    effect:
      "Với mỗi 1 'Lightning' Power có trong người, đối thủ -1 Speed. Với mỗi 1 'Fire' Power có trong người, đối thủ -1 Strength. Với mỗi 1 'Frost' Power có trong người, đối thủ -1 Dura. Với mỗi 1 'Holy' Power có trong người, đối thủ -1 IQ và -1 BIQ. Bản thân của Power này không được tính vào bộ đếm để kích hoạt hiệu ứng.",
    tags: ["Holy", "Lightning", "Fire", "Frost"],
  },
  {
    id: 131,
    name: "Frost Fingers",
    effect:
      "Với mỗi Gear đối thủ đang mang trên người, -1 stat cao nhất của đối thủ(Max 5).",
    tags: ["Frost"],
  },
  {
    id: 132,
    name: "Thunder Orb",
    effect:
      'Đối thủ giảm 2 Durability. Gấp đôi con số này nếu có ít nhất 1 Power "Lightning" khác.',
    tags: ["Lightning"],
  },
  {
    id: 133,
    name: "Freezing",
    effect:
      "Đối thủ giảm 1 Durability. Nếu đối thủ có IQ trong combat dưới 10, đối thủ giảm thêm 2 Durability nữa.",
    tags: ["Frost"],
  },
  {
    id: 134,
    name: "Armor Piercing",
    effect:
      'Giảm 2 Durability của đối phương. Tăng lên thành giảm 4 nếu bạn sử dụng các vũ khí "Polearms", "Sword", "Dagger".',
    tags: ["Physical"],
  },
  {
    id: 135,
    name: "Crimson Poison",
    effect:
      "Đối thủ giảm 1 Durability, giảm thêm 1 với mỗi Blood Power sở hữu.",
    tags: ["Blood", "Nature"],
  },
  {
    id: 136,
    name: "Water Beam",
    effect:
      'Đối thủ giảm 1 Durability với mỗi Power có tag "Water" mà bạn sở hữu.',
    tags: ["Water"],
  },
  {
    id: 137,
    name: "Venomous Spider",
    effect:
      "Bạn có thêm 1 Summon với hiệu ứng: Đối thủ -1 Durability, và nhận thêm bonus này 1 lần nữa với mỗi Summoning Power bạn có.",
    tags: ["Summoning", "Nature"],
  },
  {
    id: 138,
    name: "Blood Golem",
    effect:
      'Bạn có thêm 1 Summon với hiệu ứng: Đối thủ -1 BIQ, trừ thêm 1 với mỗi power có tag "Summoning" mà bạn có.',
    tags: ["Summoning", "Blood"],
  },
  {
    id: 139,
    name: "Frost Undead Mage",
    effect:
      'Bạn có thêm 1 Summon với hiệu ứng. Đối thủ -1 Strength, trừ thêm 1 với mỗi power có tag "Summoning" mà bạn có.',
    tags: ["Summoning", "Frost"],
  },
  {
    id: 140,
    name: "Scrying",
    effect: "Đối thủ có 40% bị -3 Stat mạnh nhất.",
    tags: ["Arcana"],
  },
  {
    id: 141,
    name: "Spider's Symphony",
    effect: "Với mỗi 5 IQ bạn sở hữu, đối thủ nhận -1 all stats.",
    tags: ["Blood"],
  },
  {
    id: 142,
    name: "Entanglement",
    effect: "Đối thủ nhận -1 Speed và -1 Martial Arts.",
    tags: ["Nature"],
  },
  {
    id: 143,
    name: "Halley Comet",
    effect: "Đối phương bị giảm 3 Durability.",
    tags: ["Physical", "Arcana"],
  },
  {
    id: 144,
    name: "Arcana Blast",
    effect: "Đối thủ nhận -3 Durability.",
    tags: ["Arcana"],
  },
  {
    id: 145,
    name: "Petrification",
    effect: "Đối thủ nhận -3 Speed.",
    tags: ["Nature"],
  },
  {
    id: 146,
    name: "Force Field",
    effect: "Đối thủ nhận -1 Speed, -1 Martial Arts.",
    tags: ["Lightning"],
  },
  {
    id: 147,
    name: "Black Magic",
    effect: "Đối thủ nhận -3 vào một stat ngẫu nhiên.",
    tags: ["Arcana"],
  },
  {
    id: 148,
    name: "Blizzard",
    effect: "Đối phương giảm 1 Durability và 2 Speed.",
    tags: ["Frost"],
  },
  {
    id: 149,
    name: "Cyclone",
    effect: "Đối thủ giảm 1 Speed.",
    tags: ["Nature"],
  },
  {
    id: 150,
    name: "Cold Mastery",
    effect: "Đối thủ -4 Speed.",
    tags: ["Frost"],
  },
  {
    id: 151,
    name: "Poison Arrow",
    effect: "-2 Durability đối thủ.",
    tags: ["Nature", "Physical"],
  },
  {
    id: 152,
    name: "Moonlight Strike",
    effect: "Đối phương bị giảm 2 Strength, 2 Speed và 2 Durability.",
    tags: ["Arcana"],
  },
  {
    id: 153,
    name: "Disease Control",
    effect: "-2 IQ của đối thủ.",
    tags: ["Nature"],
  },
  {
    id: 154,
    name: "Smokescreen",
    effect: "Đối phương giảm 1 BIQ.",
    tags: ["Quirk"],
  },
  {
    id: 155,
    name: "Tickling",
    effect: "Đối thủ nhận -2 Martial Arts.",
    tags: ["Physical"],
  },
  {
    id: 156,
    name: "Clockwork Virus",
    effect: "Đối thủ nhận -3 Martial Arts.",
    tags: ["Steampunk"],
  },
  {
    id: 157,
    name: "Command: Dissonace",
    effect: "Đối thủ nhận -3 Speed.",
    tags: ["Steampunk"],
  },
  {
    id: 158,
    name: "Command: Shockwave",
    effect: "Đối thủ nhận -3 Martial Arts.",
    tags: ["Steampunk"],
  },
  {
    id: 159,
    name: "Sandstorm",
    effect: "Đối thủ nhận -1 Strength, -1 Speed, -1 Martial Arts.",
    tags: ["Nature"],
  },
  {
    id: 160,
    name: "Ice Spike",
    effect: "Đối thủ giảm 3 Durability.",
    tags: ["Frost"],
  },
  {
    id: 161,
    name: "Ritual of Blood",
    effect: "Nhận -4 Durability. Đối phương nhận -1 all stats.",
    tags: ["Blood"],
  },
  {
    id: 162,
    name: "Meteor Strike",
    effect: 'Nhận +4 BIQ khi vào combat. Không tác dụng ở "The Ocean" Arena.',
    tags: ["Fire"],
  },
  {
    id: 163,
    name: "Storm Calling",
    effect:
      "Nhận +2 BIQ khi vào combat và vô hiệu hóa Arena Stats Debuff lên bản thân nếu có.",
    tags: ["Lightning"],
  },
  {
    id: 164,
    name: "Mind Control",
    effect:
      "Nhận +1 all stats ở đầu giao tranh khi đối đầu với kẻ địch có base IQ từ 4 trở xuống.",
    tags: ["Arcana"],
  },
  {
    id: 165,
    name: "Maelstrom",
    effect: 'Khi chiến đấu ở "The Ocean", đối thủ -1 điểm khởi đầu.',
    tags: ["Water", "Steampunk"],
  },
  {
    id: 166,
    name: "Execution",
    effect:
      "Khi khởi đầu combat, so sánh Speed giữa hai người chơi, nếu bạn có Speed cao hơn, nhận +4 Strength, nếu bạn có Speed thấp hơn, nhận +2 Strength.",
    tags: ["Physical"],
  },
  {
    id: 167,
    name: "Corpse Piler",
    effect: "Trừ 1 all stats của đối phương nếu hắn có Speed chậm hơn.",
    tags: ["Blood", "Physical"],
  },
  {
    id: 168,
    name: "Detect Thoughts",
    effect: "Nếu bạn có IQ cao hơn đối thủ, BIQ của bạn sẽ được +2.",
    tags: ["Holy"],
  },
  {
    id: 169,
    name: "True Aim",
    effect:
      'Với mỗi 3 điểm nhận được trong 1 combat, nhận thêm 1 điểm nữa. Nếu có Power "Critical Strike", khả năng crit được tăng thêm 20%. Khả năng cộng điểm thêm của Power này sẽ không tính điểm cộng từ chính nó.',
    tags: ["Physical"],
  },
  {
    id: 170,
    name: "The Sand of Time",
    effect:
      "Mỗi lần đầu tiên thua 1 round trong 1 combat, bạn có 40% thắng round đó.",
    tags: ["Arcana", "Holy"],
  },
  {
    id: 171,
    name: "Bloody Strike",
    effect:
      "Nhận -1 all stats. Mỗi khi thắng 1 round đấu, nhận +1 vào 1 chỉ số VĨNH VIỄN (Tối đa được nhận 12 lần +1). (không tính PvE).",
    tags: ["Blood"],
  },
  {
    id: 172,
    name: "Divine Smite",
    effect:
      "Nhận +1 Martial Arts khi vào combat. Cộng thêm 1 điểm nhận hoặc chịu ở round Martial Arts.",
    tags: ["Holy"],
  },
  {
    id: 173,
    name: "Thunderous Smite",
    effect:
      "Nhận +1 Speed khi vào combat. Cộng thêm 1 điểm nhận hoặc chịu ở round Speed.",
    tags: ["Lightning"],
  },
  {
    id: 174,
    name: "Aspect of Nemesis",
    effect:
      "Mỗi round Strength hoặc Martial Arts chiến thắng sẽ nhận thêm 1 điểm và không thể crit.",
    tags: ["Abyssal", "Physical"],
  },
  {
    id: 175,
    name: "Evasion",
    effect:
      "Mỗi round thua trong combat, có khả năng nhận được 1 điểm (20%) Mỗi khi nhận Power này khi đã có sẵn nó, nhận thêm 10% khả năng kích hoạt.",
    tags: ["Physical"],
    multi: true,
  },
  {
    id: 176,
    name: "Critical Strike",
    effect:
      "Mỗi round thắng trong combat, có khả năng nhận được thêm 1 điểm (20%). Mỗi khi bạn nhận thêm Power này khi đã có sẵn nó, +5% khả năng crit.",
    tags: ["Physical"],
    multi: true,
  },
  {
    id: 177,
    name: "Electrocharge",
    effect:
      'Khi Combat: Nếu đối thủ kích hoạt thành công "Critical Strike", bạn nhận +2 vào stat ngay sau đó cho đến hết combat.',
    tags: ["Lightning"],
  },
  {
    id: 178,
    name: "Waterfowl Dance",
    effect:
      "Mỗi khi thắng 1 round, có 10% nhận thêm 1 điểm, mỗi khi hiệu ứng này kích hoạt thất bại, nhận thêm 10% khả năng kích hoạt nữa (stack), sau khi kích hoạt, reset về 10%. % kích hoạt của power này sẽ không reset giữa các combat.",
    tags: ["Physical"],
  },
  {
    id: 179,
    name: "Fire Bolt",
    effect: "Nhận +1 điểm combat nếu bạn thắng cả 2 round Strength và Speed.",
    tags: ["Fire"],
  },
  {
    id: 180,
    name: "Fleeting Current",
    effect: "Nếu bạn thua round Strength trong combat, nhận +3 Speed.",
    tags: ["Water"],
  },
  {
    id: 181,
    name: "Engine Boost",
    effect:
      "Nhận +2 speed khi vào combat. Nếu bạn thắng round speed, nhận thêm +1 vào các chỉ số còn lại cho đến hết combat.",
    tags: ["Steampunk", "Quirk"],
  },
  {
    id: 182,
    name: "Transient Moonlight",
    effect:
      "Nếu bạn thắng một round với cách biệt nhiều hơn hoặc bằng 3, nhận thêm 1 điểm combat. (Ở trong Tournament, chỉ tính khi chỉ số của bạn cao hơn đối phương)",
    tags: ["Arcana"],
  },
  {
    id: 183,
    name: "Endure",
    effect:
      "Nếu bạn thắng 1 round ngay sau khi vừa thua 1 round (không tính khi thua 2 round liên tiếp), nhận thêm 1 điểm. Hiệu ứng này kích hoạt được tối đa 2 lần trong 1 combat.",
    tags: ["Physical"],
  },
  {
    id: 184,
    name: "Know Your Enemy",
    effect:
      "Khi bạn thắng 1 round trong combat, nhận +1 cho tất cả các stat sau đó trong combat này. (Chỉ kích hoạt 1 lần mỗi combat)",
    tags: ["Physical"],
  },
  {
    id: 185,
    name: "Scalemail",
    effect: "Mỗi khi thua 1 round, nhận +2 vào chỉ số ở round kế tiếp.",
    tags: ["Quirk"],
  },
  {
    id: 186,
    name: "Enraged",
    effect:
      "Sau khi thua 2 round trong combat, nhận +2 vào các chỉ số còn lại trong phần còn lại của combat đó.",
    tags: ["Fire"],
  },
  {
    id: 187,
    name: "Amaterasu",
    effect: "Đối phương giảm 3 Durability.",
    tags: ["Fire", "Blood"],
  },
  {
    id: 188,
    name: "Hydraulic Bloodflow",
    effect:
      "Dựa theo lượng điểm chênh lệch của hai bên ở 5 round đầu, khi thắng round Martial Arts sẽ nhận lượng chênh lệch đó. Lượng điểm nhận được giới hạn tối đa là 3 và ở bất kì combat nào(Kể cả PvE), khi thua round Martial Arts sẽ bị mất đi Power này trong lúc tổng kết combat.",
    tags: ["Steampunk", "Water", "Blood"],
  },
  {
    id: 189,
    name: "Thunderflow's Surge",
    effect:
      "Khi thua round Speed, vĩnh viễn -2 ở 1 random stats để +2 vào speed.",
    tags: ["Lightning"],
  },
  {
    id: 190,
    name: "Wrath of the Lich King",
    effect: "Cố định IQ của đối phương về 1. (Không thể tăng hoặc giảm).",
    tags: ["Frost", "Abyssal"],
  },
  {
    id: 191,
    name: "King Conqueror",
    effect: "Đối thủ nhận -1 all stats.",
    tags: ["Wibu"],
  },
  {
    id: 192,
    name: "Age Manipulation",
    effect: "Đối thủ nhận +1 IQ và -1 mọi stat còn lại.",
    tags: ["Nature"],
  },
  {
    id: 193,
    name: "Bash",
    effect:
      "Mỗi round thắng trong combat, có khả năng khiến đối phương bị -3 vào chỉ số ở round kế tiếp (35%).",
    tags: ["Physical"],
  },
  {
    id: 194,
    name: "Abysswalker",
    effect:
      "Khi thua 2 round, nhân ba(x3) điểm mất đi hoặc nhận được ở 1 round random của combat đó. Việc thực hiện nhân ba này luôn diễn ra ở thứ tự cuối cùng của các phép tính ở round đó.",
    tags: ["Abyssal"],
  },
  {
    id: 195,
    name: "Corrosion",
    effect:
      "Nếu bạn thắng round Strength, đối thủ bị trừ Durability bằng một nửa số chênh lệch Strength. (làm tròn lên)",
    tags: ["Arcana"],
  },
  {
    id: 196,
    name: "Rinne Sharingan",
    effect:
      "Global Arena Effect bị vô hiệu hóa cho cả hai người chơi. Mỗi khi thắng trận, nhận +1 all stats. (Stack)",
    tags: ["Wibu"],
  },
  {
    id: 197,
    name: "Wonder of U",
    effect:
      "Nhận +3 BIQ. Sau khi kết thúc mỗi round đấu stats, đối thủ bị giảm 1 chỉ số ngẫu nhiên. Số lượng giảm = (số round đã đấu trong combat đó + 1).",
    tags: ["Wibu", "Summoning"],
  },
  {
    id: 198,
    name: "Weather Report",
    effect:
      "Bạn sẽ không nhận Debuff từ Arena. Nếu đối phương có nhận debuff Arena liên quan đến giảm chỉ số, nhân đôi lượng chỉ số bị giảm của đối phương.",
    tags: ["Wibu", "Summoning"],
  },
  {
    id: 199,
    name: "Golden Experience Requiem",
    effect:
      "Mỗi khi thua 1 round trong combat, đánh lại round đó. Mỗi loại chỉ số chỉ có thể đánh lại 1 lần. Mỗi khi đối phương Crit, đối phương sẽ phải quay lại Crit Wheel, hiệu ứng này chỉ có thể có tác dụng tối đa 2 lần trong 1 combat.",
    tags: ["Wibu", "Summoning"],
  },
  {
    id: 200,
    name: "The World",
    effect:
      "Nhận +2 Strength và +2 Martial Arts. Với mỗi 3 điểm Base Speed dưới 10 của đối phương, nhận chỉ số này thêm 1 lần nữa.",
    tags: ["Wibu", "Summoning"],
  },
  {
    id: 201,
    name: "Float",
    effect:
      "Nhận +4 Speed. Nếu bạn thắng round Speed với chênh lệch lớn hơn 5 đơn vị, nhận +1 điểm combat.",
    tags: ["Quirk", "Physical"],
  },
  {
    id: 202,
    name: "Malevolent Shrine (Ryoiki Tenkai)",
    effect:
      "Với mỗi round Strength hoặc Martial Arts bạn thắng, bạn sẽ nhận được thêm 1 điểm nữa. Mỗi khi chiến thắng một người chơi sở hữu Power thuộc 'Domain Expansion' Wheel, nhận +1 Strength và +1 Martial Arts.",
    tags: ["Abyssal", "Wibu"],
  },
  {
    id: 203,
    name: "King Crimson",
    effect:
      "Nhận +3 Martial Arts. Khi đang combat 1 chỉ số, nếu Base Stat ở chỉ số kế tiếp của bạn thấp hơn đối phương, nhận +3 vào chỉ số đang combat.",
    tags: ["Wibu", "Summoning"],
  },
  {
    id: 204,
    name: "Self-Embodiment of Perfection (Ryoiki Tenkai)",
    effect:
      "Khi bạn thắng 3 round trong combat, ngay lập tức thắng luôn cả combat đó.",
    tags: ["Abyssal", "Wibu"],
  },
  {
    id: 205,
    name: "Overhaul",
    effect:
      "Nếu bạn thắng round Speed và Martial Arts, bạn sẽ thắng combat ngay lập tức.",
    tags: ["Quirk", "Abyssal"],
  },
  {
    id: 206,
    name: "Chaos Enchantment",
    effect:
      "Khi đang ở trạng thái Redemption Arc, nhận +3 all stats. Power này sẽ tự biến mất sau 1 trận thắng và không có hiệu lực trong Tournament.",
    tags: ["Abyssal"],
  },
  {
    id: 207,
    name: "Warzone",
    effect:
      "Đối phương bị loại bỏ hoàn toàn hiệu ứng Global Effect từ Arena. Mỗi khi chiến thắng, nhận +1 vào chỉ số thấp nhất. (Stack)",
    tags: ["Physical"],
  },
  {
    id: 208,
    name: "Source of Fear",
    effect:
      "Khi đối đầu với chủng tộc thấp kém hơn, nhận +1 All Stats. Mỗi khi đánh bại 1 kẻ địch thuộc chủng tộc thấp hơn, nhận +2 vào chỉ số cao nhất và +1 vào chỉ số thấp nhất. Mỗi khi thua 1 chủng tộc thấp kém hơn, mất VĨNH VIỄN 1 power ngẫu nhiên (không thể mất Source of Fear theo cách này).",
    tags: ["Abyssal"],
  },
  {
    id: 209,
    name: "Equalizer",
    effect:
      "Vô hiệu hóa toàn bộ yếu tố ảnh hưởng tới bất kì chỉ số nào của cả 2 bên trong combat và đưa về thuần so sánh Base Stats. (Các hiệu ứng cộng Base Stats và cộng vĩnh viễn sẽ được giữ)",
    tags: ["Physical"],
  },
  {
    id: 210,
    name: "Numby",
    effect: "Cứ mỗi 2 round bạn thắng trong cùng 1 combat, nhận thêm 1 điểm.",
    tags: ["Summoning"],
  },
  {
    id: 211,
    name: "Gagaku Kairo (Bankai)",
    effect:
      "Khi số round thua của bạn nhiều hơn số round thắng trong 1 combat, nhận thêm 2 điểm trong combat đó. Power này không thể kích hoạt trong 2 combat liên tiếp.",
    tags: ["Blood", "Wibu"],
  },
  {
    id: 212,
    name: "Relentless",
    effect:
      "Nếu kết quả trận đấu chỉ chênh lệch nhau 1 điểm nghiêng về phía đối thủ, đưa về thế tie-break.",
    tags: ["Physical"],
  },
  {
    id: 213,
    name: "Deadly Sentencing (Ryoiki Tenkai)",
    effect:
      "Khi bạn thua trận, kích hoạt Power này. Nhận Sentence Wheel, trọng số bạn thắng = chỉ số thấp nhất của bạn và trọng số đối phương thắng = chỉ số cao nhất của đối phương. Kết quả của vòng quay sẽ là kết quả trận đấu. Khi kích hoạt đủ 2 lần, Power này sẽ rời khỏi chủ sở hữu.",
    tags: ["Abyssal", "Wibu"],
  },
  {
    id: 214,
    name: "Glorious Evolution",
    effect:
      "Sau mỗi 2 Combat, nhận 1 'Steampunk' Power. Sau mỗi combat thắng, nhận 1 Normal 'Steampunk' Gear. Với mỗi Steampunk Power, nhận +2 stat cao nhất. Với mỗi Steampunk Gear, nhận +1 Stat thấp nhất. Tất cả 'Nature' và 'Physical' Power trên người sẽ bị vô hiệu hóa, chuyển hóa thành +1 vào stat thấp nhất với mỗi cái bị vô hiệu.",
    tags: ["Steampunk"],
  },
  {
    id: 215,
    name: "Rinnegan",
    effect:
      "Mỗi khi thắng trận, nhận +1 all stats. Mỗi khi thua trận, -1 all stats. (Stack)",
    tags: ["Wibu"],
  },
  {
    id: 216,
    name: "Summoning Imp",
    effect:
      "Mỗi khi thắng 1 combat, nhận thêm 1 PvE Combat. Mỗi khi thua 1 combat, nhận 1 PvP Rewards. Khi có nhiều hơn 3 Summoning Power, nhận +1 all stats.",
    tags: ["Summoning", "Abyssal"],
  },
  {
    id: 217,
    name: "Hunter's Rewards",
    effect: "Sau khi thắng 1 combat PvP, nhận 2 phần thưởng PvP thay vì 1.",
    tags: ["Physical", "Holy"],
  },
  {
    id: 218,
    name: "Hunter's Lore",
    effect: "Sau 3 trận thắng, loại bỏ Power này để nhận Hunter's Rewards.",
    tags: ["Physical"],
  },
  {
    id: 219,
    name: "Lightning Lord",
    effect:
      "Bạn có thêm 1 Summon với hiệu ứng: Với mỗi 3 điểm bạn ghi được trong combat hiện tại, bạn sẽ nhận được 1 điểm ở combat kế tiếp. (Điểm nhận thêm từ hiệu ứng của Lightning Lord vẫn được tính stack cho combat tiếp theo)",
    tags: ["Summoning", "Lightning"],
  },
  {
    id: 220,
    name: "Sanguine Pool",
    effect:
      "Sau khi thua combat, đánh lại combat đó với +5 Durability. Nếu bạn chiến thắng, Power này sẽ có thể sử dụng tiếp vào combat tiếp theo, nếu kết quả vẫn là thua, mất Power này.",
    tags: ["Blood"],
  },
  {
    id: 221,
    name: "Rampage",
    effect:
      "Sau mỗi trận PvP thắng, có 25% khả năng nhận +1 all stats. (Stack)",
    tags: ["Physical"],
  },
  {
    id: 222,
    name: "Power Absorption",
    effect:
      "Sau mỗi trận thắng, hấp thụ vĩnh viễn 1 Power ngẫu nhiên của đối thủ.",
    tags: ["Arcana"],
  },
  {
    id: 223,
    name: "All For One",
    effect:
      "Mỗi khi đối đầu với một kẻ địch có Power thuộc tag 'Quirk', hấp thụ toàn bộ chúng sau combat, không thể hấp thụ Power 'One For All' và không thể cướp trùng Quirk đã có. Mỗi Alliance chỉ có thể có 1 người sở hữu Power này.",
    tags: ["Quirk", "Abyssal"],
  },
  {
    id: 224,
    name: "Stat Absorption",
    effect:
      "Sau mỗi trận thắng, +1 cho bản thân vào chỉ số mà đối thủ có cao nhất. (Stack)",
    tags: ["Arcana"],
  },
  {
    id: 225,
    name: "Holy Judgement",
    effect:
      "Sau khi chiến thắng một trận combat, hấp thụ đi 1 điểm chỉ số mà đối phương có cao nhất. (Stack)",
    tags: ["Holy"],
  },
  {
    id: 226,
    name: "Holy Protection",
    effect:
      "Nhận +7 Durability. Sau mỗi combat, giảm lượng nhận thêm đi 2 đơn vị. Khi đã qua 3 combat, loại bỏ Power này.",
    tags: ["Holy"],
  },
  {
    id: 227,
    name: "Cognition Engine",
    effect:
      "Khi chiến đấu ở 'Mechanopolis', sẽ nhận thêm +1 vào stat thấp nhất khi thắng. (Stack)",
    tags: ["Physical", "Steampunk"],
  },
  {
    id: 228,
    name: "Devour",
    effect:
      "Sau khi LOẠI 1 người chơi, nhận 1 power từ họ và +1 vào chỉ số thấp nhất.",
    tags: ["Blood", "Physical"],
  },
  {
    id: 229,
    name: "Bucking Bronco",
    effect:
      "Round Martial Arts thắng và thắng trận sẽ nhận +1 Martial Arts. (Stack)",
    tags: ["Physical", "Steampunk"],
  },
  {
    id: 230,
    name: "Blood Barrage",
    effect: "Sau mỗi combat, có 50% nhận ngẫu nhiên 1 Blood Power.",
    tags: ["Blood"],
  },
  {
    id: 231,
    name: "Nullification",
    effect:
      "Trong Arena, nếu có bất kỳ power nào thuộc 'Healing', 'Healing Effect', 'Curse', bạn có thể loại bỏ tất cả chúng. (Stack)",
    tags: ["Physical", "Summoning"],
  },
  {
    id: 232,
    name: "Banished",
    effect:
      "Hãy cẩn thận với việc nhận lại các Power từ trận đấu này. Khi bị đánh bại, loại bỏ Power của đối thủ và nhận +1 vào stat cao nhất.",
    tags: ["Abyssal"],
  },
  {
    id: 233,
    name: "Gaining Experience",
    effect: "Mỗi khi chiến thắng, nhận +2 vào stat thấp nhất.",
    tags: ["Physical"],
  },
  {
    id: 234,
    name: "Invulnerability",
    effect: "Bảo vệ bản thân khỏi 1 sự tấn công với bất kỳ stat nào.",
    tags: ["Physical", "Holy"],
  },
  {
    id: 235,
    name: "World Devourer",
    effect:
      "Khi đối thủ có ít hơn 25% sức mạnh còn lại, bạn nhận được +3 vào stat thấp nhất và hồi lại 10% HP.",
    tags: ["Abyssal"],
  },
  {
    id: 236,
    name: "Relentless Pursuit",
    effect:
      "Sau mỗi trận thắng, đối thủ sẽ bị giảm 2 điểm ở chỉ số cao nhất. Power này không thể mất đi.",
    tags: ["Physical"],
  },
  {
    id: 237,
    name: "Infinity Gauntlet",
    effect:
      "Mỗi khi bạn chiến thắng trong combat, tất cả chỉ số của bạn sẽ tăng lên 1 lần nữa.",
    tags: ["Wibu"],
  },
  {
    id: 238,
    name: "Chrono Break",
    effect:
      "Sau khi thua 2 round liên tiếp, quay lại vòng combat trước đó với cơ hội chiến thắng cao hơn.",
    tags: ["Abyssal"],
  },
  {
    id: 239,
    name: "Void Eclipse",
    effect:
      "Khi đối thủ có ít hơn 25% HP, nhận +4 vào stat của bạn, không bị giảm đi.",
    tags: ["Abyssal"],
  },
  {
    id: 240,
    name: "Good for Something",
    effect:
      'Khi bạn bị loại, chuyển 1 Gear ngẫu nhiên không có tag "Cursed" của bạn sang người cùng Alliance combat kế tiếp.',
    tags: ["Abyssal"],
  },
  {
    id: 241,
    name: "Death from Below",
    effect:
      "Khi bạn loại bỏ 1 người chơi thuộc Alliance đối địch, bạn và người cùng Alliance combat gần nhất nhận +1 vào 1 Stat ngẫu nhiên.",
    tags: ["Physical"],
  },
  {
    id: 242,
    name: "Return to Sender",
    effect: "Sau Combat thua, -1 VĨNH VIỄN base stat cao nhất của đối thủ.",
    tags: ["Arcana", "Steampunk"],
  },
  {
    id: 243,
    name: "Frozen Heart",
    effect:
      "Đối thủ nhận -4 speed ở combat hiện tại và -2 speed ở combat tiếp theo của họ.",
    tags: ["Frost"],
  },
  {
    id: 244,
    name: "Acid-Throated",
    effect: "Cổ họng đầy Axit, khi thua trận khiến -2 Durability cho đối thủ.",
    tags: ["Nature"],
  },
  {
    id: 245,
    name: "Memory Freeze",
    effect:
      "Trong combat kế tiếp của đối phương, đối phương sẽ không nhận được PvP Rewards từ bất kì cách nào.",
    tags: ["Frost"],
  },
  {
    id: 246,
    name: "Gaze of the Abyss",
    effect:
      "Vào lúc tổng kết trận đấu, nếu bạn thắng và Speed của đối thủ thấp hơn bạn thì đối thủ sẽ bị -1 IQ -1 BIQ vĩnh viễn.",
    tags: ["Abyssal"],
  },
  {
    id: 247,
    name: "Moon Aura",
    effect: "Mỗi người có Moon Aura sẽ nhận 1 random Power sau mỗi combat.",
    tags: ["Arcana"],
  },
  {
    id: 248,
    name: "Baldening",
    effect: "Khiến đối thủ bị rụng hết tóc. 💀",
    tags: ["Arcana"],
  },
  {
    id: 249,
    name: "Hand Washing",
    effect: "Tay sạch 💀",
    tags: ["Water"],
  },
  {
    id: 250,
    name: "The Goat",
    effect: "Bạn là dê! 💀",
    tags: ["Nature"],
  },
  {
    id: 251,
    name: "Cold Breeze",
    effect: "Mát lạnh!",
    tags: ["Frost"],
  },
  {
    id: 252,
    name: "Minor Fire Control",
    effect:
      "Có thể điều khiển được một ngọn lửa nhỏ bật hoặc tắt. Ngoài ra không tác dụng 💀",
    tags: ["Fire"],
  },
  {
    id: 253,
    name: "Blowing Leaves",
    effect: "Thổi lá bay đi 💀",
    tags: ["Nature"],
  },
  {
    id: 254,
    name: "Fragrant",
    effect: "Thơm tho dễ chịu.",
    tags: ["Nature"],
  },
  {
    id: 255,
    name: "Rickrolling",
    effect: "Chắc không cần giải thích đâu nhỉ 💀",
    tags: ["Physical"],
  },
  {
    id: 256,
    name: "Capybara",
    effect: "Bạn có thêm 1 Summon. 💀",
    tags: ["Summoning"],
  },
  {
    id: 257,
    name: "Ice Liquefactors",
    effect: "Hóa lỏng băng 💀???",
    tags: ["Steampunk", "Frost", "Water"],
  },
  {
    id: 258,
    name: "Mewing",
    effect: "Bye bye 🤫🧏‍♂",
    tags: ["Physical"],
  },
  {
    id: 259,
    name: "Ballet Dancing",
    effect: "Múa dẻo 💃",
    tags: ["Physical"],
  },
  {
    id: 260,
    name: "Water Breathing",
    effect: "Thở dưới nước.",
    tags: ["Water"],
  },
  {
    id: 261,
    name: "Night Vision",
    effect: "Có thể nhìn trong bóng tối. 💀",
    tags: ["Abyssal"],
  },
  {
    id: 262,
    name: "Gotta go Fast",
    effect: "Bạn là Sonic 💀",
    tags: ["Lightning"],
  },
  {
    id: 263,
    name: "Tick-tock",
    effect: "Cơ thể bạn phát ra tiếng của đồng hồ. 💀",
    tags: ["Steampunk"],
  },
  {
    id: 264,
    name: "Jogan",
    effect: "Mắt sáng, không bị cận",
    tags: ["Wibu"],
  },
  {
    id: 265,
    name: "Hey Ya!",
    effect: "Bạn được cổ vũ tinh thần 💀.",
    tags: ["Wibu", "Summoning"],
  },
];
