export const charDevSections = [
  {
    id: "CD001",
    name: "Training Arc",
    effect: "Nhận +1 all stats.",
    weight: 4,
    color: "#FF6F61",
    multi: true,
  },
  {
    id: "CD002",
    name: "Forbidden Love",
    effect:
      "Quay wheel một nhân vật của (các) phe đối địch, khi cả 2 người còn sống, cả 2 nhận +1 all stats. Nếu cả hai đều sống và vào vòng Tournament, nhận thêm +1 all stats vĩnh viễn (không bị mất đi khi một trong hai bị loại)(2 người sẽ được tính là Lovers của nhau).",
    weight: 2.1,
    color: "#6B5B95",
    multi: true,
  },
  {
    id: "CD003",
    name: "No more family",
    effect: "Nhận thêm 2 Power.",
    weight: 2.4,
    color: "#88B04B",
  },
  {
    id: "CD004",
    name: "Depression",
    effect: "Nhận -3 vào chỉ số cao nhất.",
    weight: 1.5,
    color: "#F7CAC9",
  },
  {
    id: "CD005",
    name: "Become a Bookworm",
    effect: "Nhận +4 IQ.",
    weight: 2.3,
    color: "#9E1030",
  },
  {
    id: "CD006",
    name: "Inversion",
    effect:
      "Đảo ngược tất cả base stat. (10<->1, 9<->2, 8<->3, 7<->4,6<->5,...)",
    weight: 1.3,
    color: "#8A307F",
    multi: true,
  },
  {
    id: "CD007",
    name: "Isekai",
    effect: "Quay lại từ đầu 💀",
    weight: 1,
    color: "#79C753",
    multi: true,
  },
  {
    id: "CD008",
    name: "Team Up Training",
    effect:
      "Quay wheel 1 nhân vật cùng Alliance, cả hai người nhận +3 vào 2 chỉ số thấp nhất. Hiệu ứng buff này sẽ hết hiệu lực khi 1 trong 2 người bị loại.",
    weight: 2.2,
    color: "#1E4D2B",
    multi: true,
  },
  {
    id: "CD009",
    name: "Final Reserves",
    effect:
      "Khi đạt 'Redemption Arc', +2 all stats. Khi đến vòng Tournament, loại bỏ hiệu ứng này và nhận 2 random Power.",
    weight: 1.1,
    color: "#B39EB5",
  },
  {
    id: "CD010",
    name: "Lose Control",
    effect: "Mất tất cả Power. 💀",
    weight: 1.1,
    color: "#FFA500",
  },
  {
    id: "CD011",
    name: "Prime Time",
    effect:
      "Khi chưa có trận thua nào, nhận +2 all stats. Khi đến vòng Tournament, chuyển thành +1 all stats nếu không thua vòng ngoài.",
    weight: 1.2,
    color: "#003366",
  },
  {
    id: "CD012",
    name: "Fate's Trick",
    effect:
      "Có 50% khả năng nhân đôi stat thấp nhất và 50% khả năng chia đôi stat cao nhất. (làm tròn lên)",
    weight: 2,
    color: "#FFB6C1",
    multi: true,
  },
  {
    id: "CD013",
    name: "Old Age",
    effect: "Nhận +3 IQ và -1 mọi chỉ số còn lại.",
    weight: 1.3,
    color: "#8B0000",
  },
  {
    id: "CD014",
    name: "Creator's Favor",
    effect:
      '"Đấng Sáng Tạo" tùy ý buff cho nhân vật. (Không thay đổi quá 2 chỉ số). (Sẽ có danh sách các hành động có thể thực hiện)',
    weight: 1.8,
    color: "#4682B4",
    multi: true,
  },
  {
    id: "CD015",
    name: "Become Woke",
    effect: "Nhận -3 IQ, +1 Strength và +1 Durability. Nhận 'Pronouns' Wheel.",
    weight: 1.5,
    color: "#B22222",
  },
  {
    id: "CD016",
    name: "Demonic Pact",
    effect: "Hiến tế 1 base stat ngẫu nhiên (giảm xuống 0) để nhận 3 Power.",
    weight: 2,
    color: "#ADFF2F",
    multi: true,
  },
  {
    id: "CD017",
    name: "Mentor",
    effect:
      "Quay wheel 1 nhân vật cùng Alliance đang có trong season, người đó 'dạy' bạn 1 Power mà họ có (người đó sẽ không mất Power). Khi người đó bị loại, nhận toàn bộ power của người đó.",
    weight: 2.4,
    color: "#8FBC8F",
    multi: true,
  },
  {
    id: "CD018",
    name: "It is what it is",
    effect: "Mất vũ khí của mình. 💀",
    weight: 1.3,
    color: "#FF1493",
  },
  {
    id: "CD019",
    name: "Make love",
    effect:
      "Quay 1 wheel bao gồm toàn bộ player hiện tại để chọn ra người tình và tạo ra Hybrid từ 2 race đó ở mùa sau. Ở trong thành phần của Wheel, những Player có cùng race với nhau sẽ phải chia đều nhau trọng số 1/x với x là số race hiện đang có ít nhất 1 player trong đấy (2 người sẽ được tính là Lovers của nhau).",
    weight: 0.9,
    color: "#20B2AA",
    multi: true,
  },
  {
    id: "CD020",
    name: "Pessimistic",
    effect: "Khi xuống vòng 'Redemption Arc', -1 all stats.",
    weight: 2,
    color: "#4B0082",
  },
  {
    id: "CD021",
    name: "Finality",
    effect: "Race của bạn tuyệt chủng trong mùa này. 💀",
    weight: 0.7,
    color: "#E9967A",
  },
  {
    id: "CD022",
    name: "Last Standing",
    effect:
      "Khi là người duy nhất thuộc race của bạn trong giải, +2 all stats.",
    weight: 1,
    color: "#2E8B57",
  },
  {
    id: "CD023",
    name: "Become Apocalypse Horsemen",
    effect:
      "Trở thành 1 trong 4 kị sĩ khải huyền. Char Dev này sẽ biến mất khi đã có đủ 4 kị sĩ.",
    weight: 0.4,
    color: "#F0E68C",
  },
  {
    id: "CD024",
    name: "Abused",
    effect: "Nhận -1 IQ, +3 Durability.",
    weight: 1.9,
    color: "#008080",
  },
  {
    id: "CD025",
    name: "A Big Gift!",
    effect: "Nhận 1 random Special Gear.",
    weight: 2.2,
    color: "#DC143C",
    multi: true,
  },
  {
    id: "CD026",
    name: "Become Vegetarian",
    effect: "Nhận -2 Durability.",
    weight: 1.5,
    color: "#A0522D",
  },
  {
    id: "CD027",
    name: "Creator's Limitation",
    effect:
      '"Đấng Sáng Tạo" tùy ý nerf cho nhân vật. (Không thay đổi quá 2 chỉ số). (Sẽ có danh sách các hành động có thể thực hiện)',
    weight: 1.8,
    color: "#FF4500",
    multi: true,
  },
  {
    id: "CD028",
    name: "Obtain a Summoning Scroll",
    effect: "Nhận +1 Summon Power.",
    weight: 2.5,
    color: "#C71585",
    multi: true,
  },
  {
    id: "CD029",
    name: "Braindead",
    effect: "Nhận -4 IQ. 💀",
    weight: 1.5,
    color: "#4169E1",
  },
  {
    id: "CD030",
    name: "Cowardice",
    effect:
      "Nếu số thành viên sống sót thuộc Alliance của bạn thấp hơn Alliance của đối thủ, nhận -1 all stats khi combat.",
    weight: 1.8,
    color: "#008000",
  },
  {
    id: "CD031",
    name: "Blessed by Chaos",
    effect:
      "Kéo base stat của chỉ số cao nhất xuống 1 điểm, sau đó nhận thêm 2 Character Development.",
    weight: 2,
    color: "#BA55D3",
  },
  {
    id: "CD032",
    name: "Become a Legendary Singer",
    effect:
      "Loại bỏ toàn bộ Archetype hiện tại và nhận Archetype 'Bard', sau đó nhận 1 Instrument ngẫu nhiên (25% là Unique) và Instrument đó sẽ không thể bị thay thế/ cướp/ phá hủy. Weapon Mastery được cố định ở 5 (Transcendent)",
    weight: 1.2,
    color: "#F4A460",
  },
  {
    id: "CD033",
    name: "Become a Primordial Champion",
    effect:
      "Nhận Primordial Champion Wheel. Char dev này sẽ biến mất khi đã có đủ 4 Primordial Champion.",
    weight: 0.6,
    color: "#FF69B4",
  },
  {
    id: "CD034",
    name: "Addicted to Gambling",
    effect:
      "Mất tất cả Gear của mình, nhận thêm Archetype 'Gambler', tăng 3% khả năng gamble thành công với mỗi điểm chênh lệch giữa hai người chơi khi thắng 1 round đấu. Nếu bạn đang là 1 gambler, tăng từ 3% -> 5%.",
    weight: 2.2,
    color: "#A9A9A9",
  },
  {
    id: "CD035",
    name: "Have a Disciple",
    effect:
      "Quay wheel 1 nhân vật cùng Alliance, người đó nhận tất cả Power hiện tại bạn đang có. Với mỗi trận thắng của họ, bạn nhận +2 vào stat thấp nhất.",
    weight: 2.2,
    color: "#9932CC",
  },
  {
    id: "CD036",
    name: "Become a Trader",
    effect:
      "Quay wheel 1 nhân vật cùng Alliance còn sống, bạn và người đó tráo đổi Gear và Weapon với nhau (nếu có)",
    weight: 1.3,
    color: "#228B22",
    multi: true,
  },
  {
    id: "CD037",
    name: "Lost an Arm",
    effect: "Nhận -4 Martial Arts 💀",
    weight: 1.2,
    color: "#F5DEB3",
    multi: true,
  },
  {
    id: "CD038",
    name: "Lost a Leg",
    effect: "Nhận -4 Speed 💀",
    weight: 1.2,
    color: "#CD5C5C",
    multi: true,
  },
  {
    id: "CD039",
    name: "Obtain a Cultivation Technique",
    effect: "Nhận +2 BIQ, +3 Martial Arts.",
    weight: 2.8,
    color: "#AFEEEE",
    multi: true,
  },
  {
    id: "CD040",
    name: "Become Doom Slayer",
    effect:
      "Nhận thêm Archetype 'Slayer' và nhận gấp đôi stat bonus từ nó. Nếu bạn đang là một 'Slayer', nhận hiệu ứng 'Slayer' lên tất cả các race nhưng không được gấp đôi bonus.",
    weight: 1.2,
    color: "#D2B48C",
  },
  {
    id: "CD041",
    name: "Become a Hitman",
    effect:
      "Quay wheel 5 nhân vật ngẫu nhiên từ Alliance đối địch, nhận +1 all stats với mỗi người bạn đánh bại trong số đó.",
    weight: 1.2,
    color: "#00FA9A",
  },
  {
    id: "CD042",
    name: "Haunted by Old Spirits",
    effect:
      "Quay wheel 1 'Spirit' của mùa trước, nhận chỉ số base thấp nhất của Spirit đó và 1 Power của họ.",
    weight: 1.5,
    color: "#B0E0E6",
  },
  {
    id: "CD043",
    name: "Chosen by Gilgagnome",
    effect:
      "Nếu bạn đang có archetype liên quan đến vũ khí (Swordman, Bowman,..), loại bỏ Archetype đó và nhận Archetype 'Gigachad'. Nhận vũ khí 'Banana Peel' và sẽ không thể thay đổi vũ khí này bằng bất cứ cách nào. Nếu bạn thuộc tộc Gnome, nhận thêm Archetype 'Him'.",
    weight: 1.1,
    color: "#9370DB",
  },
  {
    id: "CD044",
    name: "Challenge Champions from the Past",
    effect:
      "Quay wheel 'Season 1 Champions' và đấu với nhân vật đó. Phần thưởng chiến thắng là +1 all stats và nhận 2 random Power.",
    weight: 1.2,
    color: "#FFDEAD",
    multi: true,
  },
  {
    id: "CD045",
    name: "Inspired by Meme Lord",
    effect:
      "Nhận 2 Power vô dụng (không có hiệu ứng), với mỗi 3 Power vô dụng, nhận +1 all stats. Mỗi khi thành công thắng 1 combat, nhận 1 Power vô dụng. Hiệu ứng từ Char Dev này không thể bị vô hiệu hóa.",
    weight: 1.3,
    color: "#3CB371",
  },
  {
    id: "CD046",
    name: "Become One Trick Pony",
    effect:
      "Nhận +3 vào 1 chỉ số ngẫu nhiên và giảm 2 tất cả chỉ số còn lại, mỗi khi thắng 1 round của chỉ số được cộng, nhận 3 điểm thay vì 1.",
    weight: 1.3,
    color: "#FF7F50",
  },
  {
    id: "CD047",
    name: "Ascended",
    effect:
      "Bạn sẽ luôn luôn thắng tie-break trong combat, bất cứ là loại tie-break nào. Nếu phải đối đầu với một người cũng có char dev này, cả hai sẽ mất hiệu ứng này trong combat đó.",
    weight: 1.8,
    color: "#87CEFA",
  },
  {
    id: "CD048",
    name: "Marathon Runner",
    effect:
      "Nhận +4 speed, sau mỗi combat, giảm 1 speed. Khi đã đấu đủ 4 combat PvP sẽ không còn giảm speed nữa và nhận 3 'Physical' Power.",
    weight: 1.2,
    color: "#F0FFF0",
    multi: true,
  },
  {
    id: "CD049",
    name: "Weapon Master",
    effect:
      "Nhận +2 Weapon Mastery. Với mỗi điểm Weapon Mastery vượt qua mốc 5 (Transcendent), nhận +1 all stats.",
    weight: 1,
    color: "#FFE4C4",
  },
  {
    id: "CD050",
    name: "Meditate",
    effect:
      "Với mỗi 3 điểm IQ (dựa vào base stat), nhận +1 Strength, +1 Durability, +1 IQ và +1 Martial Arts.",
    weight: 1.8,
    color: "#FF00FF",
  },
  {
    id: "CD051",
    name: "Kungfu Training",
    effect:
      "Nhận +2 Durability và +2 Martial Arts, nhận 1 random Physical Power.",
    weight: 2.1,
    color: "#8FBC8F",
    multi: true,
  },
  {
    id: "CD052",
    name: "Learned how to Snowball",
    effect:
      "Nhận +2 Strength, mỗi khi thắng 1 round đấu, nhận +2 vào stat ở round đấu tiếp theo.",
    weight: 1.5,
    color: "#FFF0F5",
  },
  {
    id: "CD053",
    name: "Master the Balancing Technique",
    effect:
      "Biến chỉ số base của tất cả các stats thành trung bình cộng của tổng các base stats (ngoại trừ các base bị cố định). Phép tính sẽ được làm tròn lên.",
    weight: 1.5,
    color: "#F5FFFA",
  },
  {
    id: "CD054",
    name: "Spy X Wheel",
    effect:
      "Nhận thêm Special Gear của Alliance đối địch và nhận hiệu ứng từ cả 2 Special Gear.",
    weight: 1.2,
    color: "#FDF5E6",
  },
  {
    id: "CD055",
    name: "Music Lover",
    effect:
      "Mỗi khi chiến đấu với một kẻ địch sử dụng vũ khí là 'Instrument' hoặc có archetype 'Bard', nhận +1 vào 3 chỉ số ngẫu nhiên, áp dụng sau combat.",
    weight: 1.8,
    color: "#F8F8FF",
  },
  {
    id: "CD056",
    name: "A Lone Wolf",
    effect:
      "Khi vào vòng Tournament, nhận +2 vào 1 chỉ số ngẫu nhiên với mỗi 'Werebeast' có trong Tournament. Hiệu ứng này có thể kích hoạt tối đa 7 lần.",
    weight: 1.5,
    color: "#FFEBCD",
  },
  {
    id: "CD057",
    name: "Declares your Identity",
    effect:
      "Nhận Pronouns Wheel và nhận -1 all stats khi đối đầu với người có cùng Pronouns.",
    weight: 1.2,
    color: "#FFF5EE",
  },
  {
    id: "CD058",
    name: "Supports Feminism",
    effect:
      "Khi đối đầu với người chơi có Pronouns 'She/Her', kẻ địch nhận 2 điểm khởi đầu combat.",
    weight: 1,
    color: "#FAFAD2",
  },
  {
    id: "CD059",
    name: "Too Emotional",
    effect:
      "Khi thi đấu, nhận +2 all stats nếu người cùng Alliance gần nhất giành chiến thắng và -2 all stats nếu người đó thua. Nếu trận thi đấu gần nhất là 2 người cùng Alliance đối đầu, không có gì xảy ra.",
    weight: 1.2,
    color: "#E6E6FA",
  },
  {
    id: "CD060",
    name: "Too Horny",
    effect:
      "Khi đối đầu với người chơi có Rizz, nhận +3 Strength và +2 Durability, nhưng IQ Base bị kéo về 0.",
    weight: 1.5,
    color: "#D8BFD8",
  },
  {
    id: "CD061",
    name: "Learned how to Rizz",
    effect: "Nhận Rizz Wheel và 33% khả năng nhận Power 'Rizzler'.",
    weight: 1.2,
    color: "#DCEDC1",
  },
  {
    id: "CD062",
    name: "Creator's Reforge",
    effect: "Loại bỏ vũ khí hiện tại, Creator sẽ chọn 1 vũ khí Normal cho bạn.",
    weight: 1.2,
    color: "#A7FFEB",
    multi: true,
  },
  {
    id: "CD063",
    name: "Become Perfectionist",
    effect: "Nhận Archetype 'Perfectionist'.",
    weight: 1.2,
    color: "#D500F9",
  },
  {
    id: "CD064",
    name: "Too Edgy",
    effect: "Nhận Archetype 'Edgelord'.",
    weight: 1.2,
    color: "#00B8D4",
  },
  {
    id: "CD065",
    name: "Crownless King",
    effect:
      "Nhận +1 all stats. Khi vào Tournament, nhận thêm +1 all stats nữa. Khi vào tới trận chung kết, xóa bỏ hiệu ứng cộng và nhận -2 all stats.",
    weight: 0.3,
    color: "#FFAB00",
  },
  {
    id: "CD066",
    name: "The Villain of All",
    effect:
      "Rời khởi Alliance của bản thân và loại bỏ Gear từ Alliance đó, sau đấy nhận +1 all stats. Mỗi khi đánh bại 1 người chơi, nhận +1 vào chỉ số thấp nhất.",
    weight: 0.4,
    color: "#C51162",
  },
];
