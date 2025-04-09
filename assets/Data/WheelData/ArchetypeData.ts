export const archetypeSections = [
  {
    id: "AT001",
    name: "NPC 💀",
    effect: "-1 all stats và không thể có 'Character Development'.",
    weight: 3.4,
    color: "#7AC0F4",
  },
  {
    id: "AT002",
    name: "Slayer",
    effect:
      "Chọn 1 tộc để Slay. Khi đối đầu với tộc đó, nhận +2 Strength, +3 BIQ và +1 Martial Arts. Nếu bạn là 'Demon Slayer', nhận Nichirin Blade và không được đổi vũ khí.",
    weight: 3,
    color: "#E951A5",
    multi: true,
  },
  {
    id: "AT003",
    name: "Gigachad",
    effect:
      "Nhận +2 Strength, +2 Durability và 2 Martial Arts khi đối đầu với tộc cấp cao hơn. Nhận -2 Strength, -2 Durability và -2 Martial Arts khi đối đầu với tộc cấp thấp hơn.",
    weight: 1.5,
    color: "#CDA3F9",
  },
  {
    id: "AT004",
    name: "Magician",
    effect:
      "Nhận 'Magical Scroll' và +2 IQ. Nếu bạn là Elf, Demi-God, God, Demon hoặc Angel sẽ nhận thêm +3 IQ nữa.",
    weight: 2.8,
    color: "#56F492",
  },
  {
    id: "AT005",
    name: "Berserker",
    effect: "Nhận +3 BIQ, +3 Martial Arts và -2 IQ.",
    weight: 1.9,
    color: "#A2D319",
  },
  {
    id: "AT006",
    name: "Swordsman",
    effect:
      "Nếu sử dụng vũ khí kiếm, +1 all stats. Khi trang bị kiếm Unique, nhận +1 Weapon Mastery.",
    weight: 4,
    color: "#5D55DE",
  },
  {
    id: "AT007",
    name: "Bard",
    effect:
      "Không nhận được vũ khí nào trừ nhạc cụ. Khi có nhạc cụ, +2 all stats và nhận 1 random Power.",
    weight: 1.8,
    color: "#F26E18",
  },
  {
    id: "AT008",
    name: "Grave Keeper",
    effect:
      "Khi đạt 'Redemption Arc' hoặc tiến vào 'Tournament', nhận toàn bộ power của 1 người chơi đã bị loại. (Chỉ kích hoạt được 1 lần duy nhất)",
    weight: 2,
    color: "#D49E47",
  },
  {
    id: "AT009",
    name: "Dual Wielder",
    effect:
      "Có thể sử dụng tối đa 2 vũ khí, nhận thêm 1 vòng quay Weapon. Weapon Mastery không thể đạt trên 4. (Nếu quay vào 5 sẽ tự động giảm xuống 4)",
    weight: 2.2,
    color: "#93D5FC",
  },
  {
    id: "AT010",
    name: "Thief",
    effect:
      "Không thể nhận vũ khí, nhưng khi chiến đấu sẽ có cơ hội cướp lấy vũ khí của đối thủ để sử dụng trong combat đó. (33%). Mỗi khi cướp thành công 1 vũ khí, nhận +3 cho chỉ số thấp nhất.",
    weight: 1.8,
    color: "#FD72E6",
  },
  {
    id: "AT011",
    name: "Gambler",
    effect:
      "Mỗi round thắng trong combat, có 50% khả năng nhận +2đ và 50% khả năng nhận +0đ.",
    weight: 2.8,
    color: "#3D8B4D",
  },
  {
    id: "AT012",
    name: "Pacifist",
    effect: "Nhận +4 IQ, -2 BIQ và -1 Martial Arts.",
    weight: 2.5,
    color: "#FFD80A",
  },
  {
    id: "AT013",
    name: "Anti-Social",
    effect:
      "Nhận -2 all stats ở vòng khởi đầu, chuyển thành +2 all stats khi bước vào vòng 'Tournament'.",
    weight: 2.2,
    color: "#BE5DF7",
  },
  {
    id: "AT014",
    name: "Herbalist",
    effect: "Kháng tất cả các loại debuff giảm chỉ số từ đối phương.",
    weight: 2,
    color: "#4CE97A",
  },
  {
    id: "AT015",
    name: "Devotee",
    effect:
      "Nhận +1 all stats và +1 Weapon Mastery khi đối đầu với Goblin, Skeleton, Orc, Demon. Ngay lập tức thua nếu phải đối đầu với Demi God hoặc God. Với mỗi 12 Devotee có trong mùa, nhận +1 all stats.",
    weight: 1.7,
    color: "#F9475C",
  },
  {
    id: "AT016",
    name: "Atheist",
    effect:
      "Nhận +4 vào 2 chỉ số thấp nhất khi đối đầu với Demi God/God. Sau khi đánh bại 1 God/Demi God, nhận +1 all stats.",
    weight: 1.7,
    color: "#1D2B53",
  },
  {
    id: "AT017",
    name: "Royalty",
    effect: "Nhận +2 IQ, +2 BIQ và +1 Martial Arts.",
    weight: 2.4,
    color: "#C0FFEE",
  },
  {
    id: "AT018",
    name: "Glass Cannon",
    effect: "Durability Base cố định là 1, nhưng nhận +1 mọi stat còn lại.",
    weight: 3,
    color: "#FABD2F",
  },
  {
    id: "AT019",
    name: "Mid",
    effect:
      "Biến base stat cao nhất và thấp nhất thành 4 điểm. (Ngay sau khi roll base stats)",
    weight: 2.7,
    color: "#FFB86C",
  },
  {
    id: "AT020",
    name: "Gunslinger",
    effect:
      "Nhận vũ khí 'Revolver', sẽ không đổi vũ khí trừ khi nhận được một vũ khí là 'Firearm' khác, khi sử dụng 'Firearm', nhận +1 Weapon Mastery.",
    weight: 3.1,
    color: "#BD93F9",
  },
  {
    id: "AT021",
    name: "Blacksmith",
    effect:
      "Nhận +1 Weapon Mastery. Mỗi khi nhận 1 Weapon từ bất kì cách nào, nhận +2 vào chỉ số thấp nhất vĩnh viễn.",
    weight: 3.2,
    color: "#50FA7B",
  },
  {
    id: "AT022",
    name: "Bowman",
    effect:
      "Nhận Power 'Guided Arrow', khi quay vũ khí sẽ chỉ quay ra Bow/Crossbow và sẽ chỉ đổi vũ khí khi nhận một Bow/Crossbow.",
    weight: 3.4,
    color: "#FF5555",
  },
  {
    id: "AT023",
    name: "Time Traveller",
    effect:
      "Khi spin Base Stats, với mỗi chỉ số có điểm dưới hoặc bằng 3 sẽ spin lại 1 lần.",
    weight: 2.1,
    color: "#8BE9FD",
  },
  {
    id: "AT024",
    name: "Zealot",
    effect:
      "Mỗi round combat thua, nhận +1 vào chỉ số thấp nhất (áp dụng sau combat).",
    weight: 2.2,
    color: "#F1FA8C",
  },
  {
    id: "AT025",
    name: "Armed to the Teeth",
    effect: "Nhận 3 Normal Gear ngẫu nhiên.",
    weight: 3.2,
    color: "#6272A4",
  },
  {
    id: "AT026",
    name: "Hand Fighter",
    effect:
      "Nhận Power 'Evasion', 'Fist Fighting' và 'Rampage' và sẽ không nhận vũ khí nào.",
    weight: 2.5,
    color: "#FF79C6",
  },
  {
    id: "AT027",
    name: "Wisdom Seeker",
    effect:
      "Nhận +1 IQ, +1 BIQ và 1 Power. Giảm 2 Martial Arts. Với mỗi Power sở hữu, nhận +1 IQ và +1 BIQ.",
    weight: 3,
    color: "#B0C4DE",
  },
  {
    id: "AT028",
    name: "Lancer",
    effect:
      "Nhận vũ khí 'Halberd', nhân vật này sẽ không đổi vũ khí trừ khi ra một vũ khí có tag là 'Polearms'. Nhận +2 Strength và +1 Weapon Mastery.",
    weight: 2.5,
    color: "#BADA55",
  },
  {
    id: "AT029",
    name: "Assassins",
    effect:
      "Nhận vũ khí 'Hidden Blade', nhân vật này sẽ không đổi vũ khí trừ khi ra một vũ khí có tag là 'Dagger'. Tỉ lệ crit khi có 'Critical Strike' được tăng thêm 10%.",
    weight: 2.6,
    color: "#89FC00",
  },
  {
    id: "AT030",
    name: "Dominator",
    effect: "Nhận Power 'Source of Fear'.",
    weight: 2.6,
    color: "#FF6E6E",
  },
  {
    id: "AT031",
    name: "Trickster",
    effect: "Nhận 'Trickster' wheel, kích hoạt trước mỗi combat.",
    weight: 2.2,
    color: "#C06C84",
  },
  {
    id: "AT032",
    name: "Rushdown",
    effect:
      "Nhận +3 Speed. Với mỗi 2 extra speed (không tính base) sở hữu, nhận +1 Martial Arts.",
    weight: 3.2,
    color: "#6C5B7B",
  },
  {
    id: "AT033",
    name: "Goliath",
    effect:
      "Giảm 1 Speed. Nhận trang bị 'Titan Armor'. Với mỗi trang bị có tag 'Armor' sở hữu, nhận +1 Durability và +1 BIQ.",
    weight: 3,
    color: "#355C7D",
  },
  {
    id: "AT034",
    name: "Paladin",
    effect: "Nhận Divine Power Wheel. Với mỗi 'Holy' Power sở hữu, nhận +1 IQ.",
    weight: 3.1,
    color: "#2A363B",
  },
  {
    id: "AT035",
    name: "Master of Adaptation",
    effect:
      "Người chơi sẽ không bị dính debuff giảm chỉ số từ tất cả các Arena khi combat.",
    weight: 3,
    color: "#E84A5F",
  },
  {
    id: "AT036",
    name: "Specialist",
    effect: "Nhận -1 all stats và Specialist Wheel.",
    weight: 2.2,
    color: "#FF847C",
  },
  {
    id: "AT037",
    name: "Summoner",
    effect:
      "Giảm 1 Weapon Mastery (không thể dưới Novice) và nhận 'Summoning Wheel'. Với mỗi Summon sở hữu, nhận +1 BIQ. Sau mỗi 3 combat, quay 'Summoning Wheel' thêm 1 lần nữa.",
    weight: 3.2,
    color: "#99B898",
  },
  {
    id: "AT038",
    name: "King of PvE",
    effect:
      "Nhận -2 all stats khi combat PvP và +1 all stats khi combat PvE. Sau mỗi combat với người chơi, sẽ đánh thêm 1 combat PvE.",
    weight: 1,
    color: "#FECE44",
  },
  {
    id: "AT039",
    name: "Wibu",
    effect:
      "Nhận ngẫu nhiên 1 hiệu ứng Wibu Wheel. Không nhận Character Development.",
    weight: 3,
    color: "#00A8C6",
  },
  {
    id: "AT040",
    name: "Him",
    effect:
      "Nhận +1 All Stats. Khi vào vòng Tournament, nhận chỉ số này thêm 1 lần nữa. Khi vào tới chung kết, nhận chỉ số này thêm 1 lần cuối (tổng tối đa +3).",
    weight: 0.3,
    color: "#40C0CB",
  },
  {
    id: "AT041",
    name: "Bloodfiends",
    effect: "Với mỗi 'Blood' Power, nhận +1 Stats thấp nhất.",
    weight: 0,
    color: "#F9F9F9",
    isNotRoll: true,
  },
  {
    id: "AT042",
    name: "Legionnaires",
    effect: "Nhận 1 Strength và 1 Speed với mỗi 'Steampunk' Gear trên người.",
    weight: 0,
    color: "#FF3366",
    isNotRoll: true,
  },
  {
    id: "AT043",
    name: "Evolvers",
    effect:
      "Nhận 1 trong 2 char dev 'Lost an Arm' hoặc 'Lost a Leg' nếu chưa có và mất đi 1 Gear ngẫu nhiên, ngay lập tức nhận Special Gear 'Mechanical Limbs'",
    weight: 0,
    color: "#33FFCC",
    isNotRoll: true,
  },
  {
    id: "AT044",
    name: "Technocrats",
    effect: "Nhận 1 BIQ và 1 IQ với mỗi 'Steampunk' Power của người dùng.",
    weight: 0,
    color: "#6699CC",
    isNotRoll: true,
  },
  {
    id: "AT045",
    name: "Venturers",
    effect:
      "Nhận 1 Dura và 1 Martial Arts với mỗi trận thắng ở vòng 'Develop', nếu dùng vũ khí 'Firearm', nhận thêm +1 vào chỉ số thấp nhất mỗi lần kích hoạt hiệu ứng trận thắng.",
    weight: 0,
    color: "#FFCC00",
    isNotRoll: true,
  },
  {
    id: "AT046",
    name: "Perfectionist",
    effect:
      "Nhận +3 vĩnh viễn vào chỉ số thấp nhất nếu bạn giành chiến thắng với cách biệt 4 điểm trở lên.",
    weight: 0,
    color: "#CCFF66",
    isNotRoll: true,
  },
  {
    id: "AT047",
    name: "Softie",
    effect:
      "Sau combat, Bạn có 20% nhận Power 'Love' với đối thủ (Bỏ qua điều kiện cùng Alliance và 2 người thành Lovers)",
    weight: 0,
    color: "#66FF66",
    isNotRoll: true,
  },
  {
    id: "AT048",
    name: "Edgelord",
    effect:
      "Mỗi khi nhận Power có tag Blood/ Frost/ Abyssal/ Wibu: Nhận +1 vĩnh viễn vào 1 stats ngẫu nhiên.",
    weight: 0,
    color: "#66FFFF",
    isNotRoll: true,
  },
  {
    id: "AT049",
    name: "Bruiser",
    effect:
      "Archetype này sẽ tự động được nhận khi sở hữu ít nhất 1 Gear 'Shield' và vũ khí là 'Sword'. Nhận +1 Strength và +1 Durability. Nếu không đủ điều kiện (mất kiếm hoặc khiên), archetype này sẽ rời khỏi người chơi.",
    weight: 0,
    color: "#FF66CC",
    isNotRoll: true,
  },
  {
    id: "AT050",
    name: "Battle Mage",
    effect:
      "Archetype này sẽ tự động được nhận khi sở hữu ít nhất 1 Gear 'Shield' và vũ khí là 'Magic'. Nhận +2 IQ và +1 BIQ. Nếu không đủ điều kiện, archetype này sẽ rời khỏi người chơi.",
    weight: 0,
    color: "#9966FF",
    isNotRoll: true,
  },
  {
    id: "AT051",
    name: "Fully Armored",
    effect:
      "Archetype này sẽ tự động được nhận khi sở hữu ít nhất 2 Gear 'Armor' và 1 Gear 'Shield'. Nhận +1 Strength, +1 BIQ và +1 Durability. Nếu không đủ điều kiện, archetype này sẽ rời khỏi người chơi.",
    weight: 0,
    color: "#CC9966",
    isNotRoll: true,
  },
  {
    id: "AT052",
    name: "Kungfu Master",
    effect:
      "Archetype này sẽ tự động được nhận khi không có bất cứ vũ khí và gear nào ngay sau vòng quay Gear/Weapon. Nhận +3 Martial Arts. Nhận được vũ khí hoặc gear sau khi đã có archetype này sẽ không khiến archetype này mất đi.",
    weight: 0,
    color: "#663399",
    isNotRoll: true,
  },
  {
    id: "AT053",
    name: "Shinobi",
    effect:
      "Archetype này sẽ tự động được nhận khi sử dụng vũ khí có tag 'Dagger' và Base Speed trên 7. Nhận +1 BIQ và +1 Martial Arts. Nếu không đủ điều kiện, archetype này sẽ rời khỏi người chơi.",
    weight: 0,
    color: "#339966",
    isNotRoll: true,
  },
];
