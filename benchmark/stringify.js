"use strict";

let _ = require("lodash");
let chalk = require("chalk");
let Benchmark = require("benchmark");

let safeStringify = require("fast-safe-stringify");

let data = {
  "status": 200,
  "data": [
    {
      "code": "M6lxRAPkpg",
      "title": "Eius sequi eligendi numquam a quis molestias mollitia exercitationem.",
      "content": "Quibusdam et est maiores similique adipisci qui. Dicta et iure. Officia id voluptates non. Ullam nisi autem occaecati voluptatem adipisci. Fugit temporibus deserunt dolor minima recusandae sed quisquam.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.796Z"
    },
    {
      "code": "6zYm6yBxen",
      "title": "Numquam nihil omnis soluta iusto exercitationem aut enim.",
      "content": "Eligendi cumque qui excepturi esse ut sit. Enim dolores autem. Placeat vel consectetur accusamus dolore amet qui aut modi laborum. Omnis labore molestiae. Eligendi a deserunt sint vel.\r\nCulpa tenetur et dignissimos dolorem dolores enim. Provident mollitia enim expedita eos distinctio dignissimos. Quis sapiente ea.",
      "author": {
        "code": "r5V3kG3blE",
        "username": "boyd.gerhold",
        "fullName": "Boyd Gerhold",
        "avatar": "https://gravatar.com/avatar/75b63d2cdecaa22227b99ef5b5edb4c2?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.787Z"
    },
    {
      "code": "6ZrxEa1xEg",
      "title": "Cum ratione qui est iure.",
      "content": "Quos dolorum velit dolore eum asperiores. Soluta magnam voluptatem voluptas at quisquam quod. Omnis adipisci quidem incidunt occaecati deleniti soluta. In sunt iure exercitationem molestiae aspernatur. Nihil mollitia dolor quo numquam. Ipsa sint dolores ex repellendus sed magni exercitationem odio deleniti.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.806Z"
    },
    {
      "code": "XW4w5y3wyV",
      "title": "Porro quae perspiciatis.",
      "content": "Repellat veritatis alias exercitationem et voluptatum ut quia. Cumque facere voluptatem quisquam perferendis quam et maiores adipisci. Quos repellat expedita iure in harum quod. Dolorum sit debitis. Unde temporibus harum facere.\r\nAut unde ad et quia dolorem tempore odio non exercitationem. Laudantium ut iusto reiciendis hic eum placeat quos. In aut maxime amet placeat occaecati odio ipsa ex. Sed molestias et in voluptate exercitationem eum quas.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.789Z"
    },
    {
      "code": "v7exnAzk31",
      "title": "Perspiciatis veritatis officia.",
      "content": "Totam aut eligendi non quia inventore sunt praesentium. Aut velit dolorem. Reprehenderit eius provident impedit quaerat corporis perferendis et est odio. Eius dolores velit ducimus assumenda est. Eligendi nihil accusamus debitis corporis. Sunt excepturi suscipit alias omnis illo et dolor officia.\r\nRecusandae atque quod dolorem aperiam qui non qui nisi. Et aut fuga nihil libero rerum et et tempora. Odit eligendi cupiditate architecto a ea. Error commodi ea dolorem placeat. Eaque eveniet labore quibusdam perferendis. Inventore tenetur beatae deserunt sint earum odit porro.",
      "author": {
        "code": "deqwWGwkM0",
        "username": "jerald80",
        "fullName": "Jerald Barton",
        "avatar": "https://gravatar.com/avatar/d0218b23cb8cd5e5810b271d45565142?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.800Z"
    },
    {
      "code": "ebaxd5emMD",
      "title": "Neque voluptatem expedita accusamus sit quae.",
      "content": "Consequuntur ut molestiae earum. Rerum nulla tempora harum corrupti. Inventore expedita nemo alias vero perspiciatis sequi. Nemo autem dignissimos consectetur. Nesciunt dolores aut sapiente facere porro delectus enim. Quia eaque accusamus laborum a ipsum doloribus nam veniam laborum.\r\nUllam quod ipsam. Exercitationem pariatur eos nam hic. Occaecati vitae magni blanditiis mollitia voluptatem et officiis.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.798Z"
    },
    {
      "code": "vEVmZp5kQZ",
      "title": "Deserunt voluptatum fuga autem architecto qui expedita accusantium quia.",
      "content": "Consequatur excepturi id dolor. Aut velit a aspernatur animi repudiandae doloribus dolorem nihil. Voluptates debitis autem et est nihil dolor et voluptas adipisci. Maiores et quaerat qui qui enim. Et consequatur labore dignissimos eum aspernatur cum dolore rerum voluptatibus.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.808Z"
    },
    {
      "code": "b7KwaODxal",
      "title": "Id neque quia voluptatem.",
      "content": "Eos quae voluptatum nisi omnis illum sit delectus esse. Sed aliquid et nostrum molestiae aut pariatur aut vero qui. Quam qui eius eaque repellat ad. Aliquid eum molestias. Qui accusantium id laboriosam.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.810Z"
    },
    {
      "code": "M6lxRAlkpg",
      "title": "Rerum dignissimos ipsum voluptatem alias ad sint.",
      "content": "Blanditiis est fugit dolorem non nostrum. Est est quidem quisquam laudantium veniam praesentium iusto et. Deleniti illo velit ducimus animi. Ea fugiat dolor officia sint excepturi. Aut non in deserunt ut.\r\nAutem sed dolores esse dolores. Modi debitis ut molestiae totam sed nihil aut et minus. Repellat modi rerum culpa pariatur doloremque corporis minus dignissimos unde. Ut sed placeat quibusdam in impedit rerum dolores non.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.792Z"
    },
    {
      "code": "MEgmyDjxe2",
      "title": "Ab tempore et dolore ea et quae.",
      "content": "Veniam ea ea vitae beatae occaecati ducimus nesciunt. Dolorem dolores provident velit fuga rerum. Et enim corporis mollitia sed iste esse aperiam.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.802Z"
    },
    {
      "code": "ebaxd5BmMD",
      "title": "Quia ratione voluptatibus porro in ratione ipsa.",
      "content": "Sapiente quas fugit aut. Ducimus consequatur aliquid temporibus laudantium. Quas et minima sed accusantium commodi quis debitis enim harum. Impedit id non qui dicta rerum provident ipsa neque.",
      "author": {
        "code": "r5V3kG3blE",
        "username": "boyd.gerhold",
        "fullName": "Boyd Gerhold",
        "avatar": "https://gravatar.com/avatar/75b63d2cdecaa22227b99ef5b5edb4c2?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.794Z"
    },
    {
      "code": "o1Kw0O6mjy",
      "title": "Quam molestias sequi unde minima veniam sunt et quia et.",
      "content": "A eos sapiente eum. Enim sapiente veritatis. Magnam at cum sint ut harum quam a tempore omnis.",
      "author": {
        "code": "deqwWGwkM0",
        "username": "jerald80",
        "fullName": "Jerald Barton",
        "avatar": "https://gravatar.com/avatar/d0218b23cb8cd5e5810b271d45565142?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.804Z"
    },
    {
      "code": "09YmQA2mRe",
      "title": "Maiores eos assumenda.",
      "content": "Ullam iusto doloremque quo eos ut aut tenetur. Rerum nam voluptatem. Esse nisi odit eum in dolorem in sit autem. Sed quia ut rerum ipsa dolor doloribus qui.\r\nEos sit iste soluta ipsam qui fuga quo quasi. Sed omnis voluptas quas. Occaecati quis libero exercitationem.",
      "author": {
        "code": "4XQ3XJwNKY",
        "username": "curtis.kemmer08",
        "fullName": "Curtis Kemmer",
        "avatar": "https://gravatar.com/avatar/6b02143f9d0a812926355a0f6ddaafaf?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.792Z"
    },
    {
      "code": "Q7Am7blxEP",
      "title": "Natus quam laborum voluptatem quasi voluptatem eum veritatis.",
      "content": "Quibusdam et ut eaque. Praesentium voluptas consequatur possimus illum aut. Soluta dolores corporis officiis maiores est ab suscipit et. Aspernatur ex ipsam placeat occaecati in animi aperiam rerum. Aut et quod libero similique aut dolorem officiis fuga reprehenderit.\r\nCum sit deleniti et recusandae occaecati quis. Eum eligendi qui assumenda et minus sed. Dolorem explicabo porro id necessitatibus optio dolores sed nulla deleniti. Odio qui corrupti totam quam. Repellat eos qui.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.802Z"
    },
    {
      "code": "nMVxVnRx5j",
      "title": "Deleniti totam vel quas sequi sit explicabo quasi reiciendis eos.",
      "content": "Eligendi delectus velit esse molestiae id voluptas voluptas omnis. Quod veritatis eum quia hic rerum. Qui distinctio quae est explicabo. Quisquam velit a rerum.",
      "author": {
        "code": "4XQ3XJwNKY",
        "username": "curtis.kemmer08",
        "fullName": "Curtis Kemmer",
        "avatar": "https://gravatar.com/avatar/6b02143f9d0a812926355a0f6ddaafaf?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.793Z"
    },
    {
      "code": "E7JwOWGwBR",
      "title": "Optio repellat aut ipsum eos.",
      "content": "Facilis molestiae vel accusamus qui sunt distinctio nobis ut omnis. Magnam est et cum aut voluptas aperiam qui rerum neque. Ea odit impedit et inventore dolor corporis veritatis. Est dolores autem aut dolore ad minus. Quibusdam error unde. Cupiditate excepturi eligendi esse nulla quia non id.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.804Z"
    },
    {
      "code": "X8PwzKykR9",
      "title": "Occaecati vero omnis explicabo quisquam dolores eum hic nihil.",
      "content": "Consequatur ipsa reiciendis quia sequi necessitatibus magni voluptates sint sapiente. Quaerat possimus est eaque amet inventore eos. Accusantium similique sit omnis corporis. Ducimus sunt aut alias aut consequatur omnis magni. Temporibus omnis nesciunt delectus.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.796Z"
    },
    {
      "code": "Dq6wMoLxAo",
      "title": "Blanditiis dolore est recusandae dolores consequatur a quas dolorem a.",
      "content": "Omnis eligendi et. Perspiciatis voluptatem vero nobis. Deleniti culpa eius laboriosam maxime in atque doloremque sit. Dolores eum eum eos voluptatem doloribus sed suscipit. Modi perspiciatis velit hic vero nihil.",
      "author": {
        "code": "r5V3kG3blE",
        "username": "boyd.gerhold",
        "fullName": "Boyd Gerhold",
        "avatar": "https://gravatar.com/avatar/75b63d2cdecaa22227b99ef5b5edb4c2?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.806Z"
    },
    {
      "code": "WD3x1VmqEj",
      "title": "Consequuntur deleniti ea alias ab eum sequi tempore sint.",
      "content": "Ea laboriosam vero. Ut id odit consectetur dolorum minima. Tempore blanditiis quis voluptate voluptas voluptas.\r\nQuia ipsa inventore voluptatem. Sit iure dignissimos beatae veniam dolorum omnis nihil. Et fuga impedit quos.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.786Z"
    },
    {
      "code": "2L1xPYm7aK",
      "title": "Qui sit error unde quas asperiores non aut inventore nesciunt.",
      "content": "Aut iure dolore fugiat recusandae ut. Sit asperiores dolorem perspiciatis qui quia fugit ab. Qui voluptate sit aut voluptatem et. Et asperiores iste ipsa ab quam aut nostrum mollitia.",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.789Z"
    },
    {
      "code": "y0bwL6Kx8d",
      "title": "Excepturi consectetur excepturi totam.",
      "content": "Repellendus sunt sunt iste sed fuga rerum. A ab quia numquam fugiat. Omnis fugiat sed soluta. Eveniet officiis alias officia ad ut aut dolorum nobis voluptate.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.798Z"
    },
    {
      "code": "Npnwoo3w6M",
      "title": "Autem cumque autem ex aut dolorem.",
      "content": "Illum dolor quod quam. Hic non quis autem minus nostrum sed assumenda sed ex. Eum harum maiores.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.808Z"
    },
    {
      "code": "MA3wg40kQ6",
      "title": "Officiis nobis voluptate.",
      "content": "Provident commodi recusandae quasi. Sit deserunt atque accusamus sed labore quia similique sunt. Deserunt assumenda doloremque fugit minus doloremque sequi incidunt dolore. Quos doloribus occaecati aperiam iure error numquam.\r\nIncidunt dolor perspiciatis. Consequatur vitae inventore odio odit recusandae. Veritatis libero aut libero reiciendis atque ab quis qui. Excepturi perferendis est.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.800Z"
    },
    {
      "code": "E7JwOWOwBR",
      "title": "Praesentium iure eos veritatis.",
      "content": "Est iure iure ipsam quibusdam officia. Eos voluptatum beatae minus ullam eos necessitatibus et porro. Voluptas deserunt ut impedit iure ut quia rem. Temporibus fugit alias similique dolore est ratione.",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.810Z"
    },
    {
      "code": "9g6k2KxYyZ",
      "title": "Architecto aspernatur nobis id nulla odio libero.",
      "content": "Qui qui dolores minima optio ducimus velit. Dolorum ut consequatur. Quo minima et voluptates ab voluptatum laborum aut repellat. Iste ab molestias dignissimos laudantium incidunt aut porro deleniti. Quas ut quaerat tenetur veritatis illum aut maxime praesentium.\r\nDebitis architecto laborum libero sequi iure hic a dicta voluptatibus. Aut asperiores consequatur minus aliquid quod dolorem. Voluptatum illo est rerum nihil in voluptatum.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.787Z"
    },
    {
      "code": "Jq1mKak362",
      "title": "Quas iusto et adipisci asperiores possimus quae.",
      "content": "Et voluptatem dolor ut iure ut et odio ducimus. At cupiditate cupiditate temporibus ut minima aliquid qui et nisi. Vel enim aut. A ab aut quaerat autem quibusdam modi deleniti minima.\r\nAccusamus porro cum. Atque sint rerum ea sapiente. Corporis aut voluptatem velit quod similique recusandae. Aspernatur ut aliquam magnam porro beatae molestiae soluta quod. Laudantium architecto nisi accusantium provident alias.",
      "author": {
        "code": "r5V3kG3blE",
        "username": "boyd.gerhold",
        "fullName": "Boyd Gerhold",
        "avatar": "https://gravatar.com/avatar/75b63d2cdecaa22227b99ef5b5edb4c2?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.790Z"
    },
    {
      "code": "4lVkl8kp57",
      "title": "Beatae qui aut laboriosam et aut quia ratione.",
      "content": "Laboriosam vitae provident perferendis ipsa tempore velit modi labore. Accusantium labore aliquid reiciendis. Vitae consequatur atque fugit. Qui soluta ut omnis neque ipsam nemo.\r\nAut molestiae et sunt suscipit. Qui sint animi odio minus dolor odio. Consequatur quia quam similique sunt sed. Consequatur non tenetur deserunt corporis et dolor aut. Quia culpa est. Quis culpa maxime culpa non dolorem debitis amet est.",
      "author": {
        "code": "deqwWGwkM0",
        "username": "jerald80",
        "fullName": "Jerald Barton",
        "avatar": "https://gravatar.com/avatar/d0218b23cb8cd5e5810b271d45565142?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.801Z"
    },
    {
      "code": "Db6k9lwPWl",
      "title": "Necessitatibus assumenda aut ea quia quidem et et.",
      "content": "Illo et pariatur aut quia ea id quis dolore qui. Non dolor dolor eos aut ipsam iusto eveniet et ea. Ipsum iste magni illo harum.\r\nQuo eius quibusdam excepturi aliquam quaerat quo. Excepturi et vel quos est alias et eaque quia. Numquam eligendi vel aspernatur aut aut molestiae eos unde. Enim ad illo aut pariatur. Sunt autem recusandae ea atque soluta.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.799Z"
    },
    {
      "code": "v7exnPbw31",
      "title": "Nihil ut nesciunt.",
      "content": "Odit ipsa doloremque beatae voluptatem consequatur. Voluptates expedita eveniet soluta qui repellendus. Qui est aperiam vitae eaque nobis esse.\r\nLibero ut mollitia mollitia odio vel. Nam non dolor id repellat modi. Sit est id facilis harum fuga quia ut quisquam. Mollitia inventore sed natus doloribus placeat iste sit. Magnam saepe facere aut labore aspernatur tenetur sit harum veniam.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.811Z"
    },
    {
      "code": "O5Vkvjnk3l",
      "title": "In voluptatum occaecati officiis ea debitis dolorem consectetur.",
      "content": "Quam qui et veritatis. Odio sed at nemo dolores a maxime voluptates aut ipsam. Ut molestias asperiores iste tempore illum et quo. Maxime illo repellendus libero sunt dicta sapiente sit. Nobis maiores ut ullam velit mollitia optio ut.\r\nEt ex eos quia necessitatibus minima ut esse voluptas. Et eum sit reprehenderit natus voluptas qui asperiores in voluptatem. Omnis est rerum eum ut repudiandae magni alias eos doloremque. Distinctio aliquam eum.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.809Z"
    },
    {
      "code": "vEVmZ3wQZr",
      "title": "Enim tempora consequatur.",
      "content": "Quisquam animi officia reiciendis excepturi dolor quia. Dolor ab ea rerum quae deserunt mollitia eos. Quasi labore saepe nulla quo est voluptas dolores.",
      "author": {
        "code": "deqwWGwkM0",
        "username": "jerald80",
        "fullName": "Jerald Barton",
        "avatar": "https://gravatar.com/avatar/d0218b23cb8cd5e5810b271d45565142?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.792Z"
    },
    {
      "code": "o49wpYlkOL",
      "title": "Commodi aut facilis aut sed distinctio laborum consectetur maiores.",
      "content": "Impedit occaecati ut deleniti delectus ducimus similique illum. Ab velit cum et. Eius iste sunt voluptatem numquam ullam deleniti animi dolorem.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.803Z"
    },
    {
      "code": "JGexWQwY4n",
      "title": "Molestias quia aspernatur incidunt commodi rerum.",
      "content": "Ratione aspernatur provident. Quos quaerat quo tempora qui totam fugit minus laboriosam molestias. Vel neque cupiditate modi quo assumenda. Libero eum laboriosam cumque accusantium doloribus ut. Iure modi assumenda ut dolores qui aperiam molestiae.\r\nNon sed harum voluptatem non voluptatem facilis et ullam quo. Impedit non omnis dolorem. Aut rerum sint. Aperiam magnam veniam est non omnis. Ducimus ipsam aut dolorem dolores. Dolorum illum ea sit eos ut.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.797Z"
    },
    {
      "code": "eNGwG6JmKE",
      "title": "Doloremque quisquam assumenda minima architecto et.",
      "content": "Ducimus fugiat minus vel. Fugiat et animi ea facilis magnam corrupti error. Laborum aliquid voluptatem quisquam modi accusamus quas.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.807Z"
    },
    {
      "code": "KoPx8vwz2j",
      "title": "Error id sequi cupiditate.",
      "content": "Tempore ipsum eum temporibus est. Voluptatibus occaecati molestias eum. Veritatis dignissimos voluptatibus aliquam voluptatem culpa corporis rerum natus nobis. Expedita eum tempore. Sed sed voluptas numquam.\r\nQui ex rerum. Quod quae recusandae maxime explicabo dolorem qui. Quisquam rerum quasi velit ea est.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.794Z"
    },
    {
      "code": "6X9weRakr0",
      "title": "Est quasi sed.",
      "content": "Quasi vel ducimus et dolor. Numquam qui exercitationem officiis. Dicta minus quod modi nihil iste voluptatem iste dolore.",
      "author": {
        "code": "4XQ3XJwNKY",
        "username": "curtis.kemmer08",
        "fullName": "Curtis Kemmer",
        "avatar": "https://gravatar.com/avatar/6b02143f9d0a812926355a0f6ddaafaf?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.805Z"
    },
    {
      "code": "y0bwLn2x8d",
      "title": "A ut aut.",
      "content": "Et accusantium iste quisquam. Laudantium harum aut unde laborum. Nihil fugiat impedit eveniet quod iure sunt. Voluptas minima eum praesentium ea dignissimos dolores. Nisi hic aliquam dolorem et qui ratione in quaerat.\r\nCulpa quod assumenda minima repudiandae quisquam provident. Velit fuga unde. Quisquam quaerat quisquam molestiae et. Provident molestias repellat et totam rerum. Neque et tempore autem in.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.795Z"
    },
    {
      "code": "JDNwrAZmW1",
      "title": "Molestias ut ut et vel numquam.",
      "content": "Laboriosam quia explicabo ullam nemo ipsa quo. Magni rerum fugiat ad. Voluptas voluptatem incidunt et eum. Quia non amet quasi id numquam delectus eligendi corrupti. Eos est qui ratione corporis facilis vel et veritatis voluptates. Sed odit ea porro quia.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.805Z"
    },
    {
      "code": "P3ZkD6YmEp",
      "title": "Non libero sequi exercitationem ut voluptas.",
      "content": "Rerum ea nisi culpa non laboriosam maiores rem ipsam. Nobis suscipit aut harum. Sunt voluptas illum aut a voluptatum aliquid. Impedit qui assumenda officiis vitae harum aut modi eaque.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.788Z"
    },
    {
      "code": "MA3wgJBmQ6",
      "title": "Voluptatibus et voluptatem voluptatem consequatur eius et.",
      "content": "Quis doloremque similique delectus eveniet. Nam aliquid molestiae et aut unde velit ad et magnam. Quasi repudiandae esse ipsam odit. Porro deleniti est ut aliquam at animi fugit aut illum. Tempora ipsam qui.\r\nEius omnis tempore exercitationem nulla. Facere qui dolores quod veniam recusandae reprehenderit. Omnis blanditiis nostrum iste est modi voluptatum laudantium autem placeat. Deleniti quo impedit omnis animi. Magni quia aut animi eveniet et libero voluptatem neque quae.",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.797Z"
    },
    {
      "code": "eNpwYpNmZj",
      "title": "Distinctio et laborum est nemo qui minima.",
      "content": "Qui earum in totam nulla. Perferendis distinctio occaecati delectus enim debitis natus doloremque. Numquam cumque molestiae enim. Laboriosam quod aut quia. Non enim eum voluptate quod. Sint ut saepe.\r\nEt et recusandae totam sapiente optio dolorum inventore doloremque blanditiis. Et tempore recusandae minus eos. Repellat hic id animi qui et. Iure et vel dolor sed.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.807Z"
    },
    {
      "code": "6zYm63gwen",
      "title": "Et et accusamus accusamus laborum.",
      "content": "Eius eos qui officiis ex nulla maxime. Dolor consequatur ipsum. Mollitia reiciendis sint.",
      "author": {
        "code": "r5V3kG3blE",
        "username": "boyd.gerhold",
        "fullName": "Boyd Gerhold",
        "avatar": "https://gravatar.com/avatar/75b63d2cdecaa22227b99ef5b5edb4c2?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.793Z"
    },
    {
      "code": "9QWmjWdwNY",
      "title": "Reiciendis eaque enim praesentium veritatis animi velit nulla necessitatibus.",
      "content": "Exercitationem dolorem beatae eum repellendus. Voluptatum eaque repudiandae nobis et asperiores. Iusto reiciendis voluptatem.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.803Z"
    },
    {
      "code": "0n7wB1lmN5",
      "title": "Autem quia in voluptas nisi omnis accusantium laboriosam incidunt.",
      "content": "Voluptatem est modi dolor maiores dolores minus similique dolorem. Quasi nam ullam. Recusandae possimus nihil magni quasi at. Dolores modi soluta accusamus explicabo ad. Dignissimos mollitia qui id.\r\nOccaecati et corporis veniam aperiam non molestiae voluptas porro aliquid. Temporibus deserunt quisquam delectus qui quia nostrum amet. Velit nemo repudiandae aspernatur.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.799Z"
    },
    {
      "code": "Q7Am73NmEP",
      "title": "Praesentium corporis enim iure sed debitis exercitationem fuga.",
      "content": "Sed iusto iure reprehenderit dolores non similique in. Voluptates et possimus excepturi esse. Fuga ut pariatur qui officiis iste ipsa voluptates. Expedita sed laudantium aliquid.\r\nUt illo praesentium modi aut nihil sint praesentium excepturi. Doloribus alias sed libero in illo. Error ipsam non voluptate voluptatem repellendus et voluptas id. Eveniet sunt natus exercitationem ut soluta quis.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.809Z"
    },
    {
      "code": "o49wpEQkOL",
      "title": "Aut ad est quia adipisci maiores tenetur et voluptates ut.",
      "content": "Saepe in et molestiae modi optio eligendi doloribus ut. Et repellendus et cum sed. Quod incidunt rem et veritatis quidem. Est nulla aut.\r\nIncidunt et in et quo neque ratione cupiditate. Fugit recusandae veniam laudantium est ipsam repudiandae. Veritatis similique quia architecto pariatur. Quae illo aliquid rerum ut nostrum. Officia autem sunt optio ex qui ipsam aut quo voluptas.",
      "author": {
        "code": "KYG3ZoRy1k",
        "username": "chad15",
        "fullName": "Chad Roob",
        "avatar": "https://gravatar.com/avatar/c1e9cc58e7e8b0dce8895e617b3ab55a?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.791Z"
    },
    {
      "code": "3VexbdNwD5",
      "title": "Tenetur iste quisquam et esse omnis sapiente expedita voluptas illum.",
      "content": "Reprehenderit et consequatur voluptatem nostrum in perferendis quasi inventore. Rerum officia quo in esse repellendus illum. Cumque ut deserunt excepturi culpa voluptatum aut omnis quo. Commodi id sint eaque facilis quae. Blanditiis autem quas dolorum nisi autem sunt veritatis numquam sapiente.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.801Z"
    },
    {
      "code": "P3ZkDQexEp",
      "title": "Nihil reiciendis soluta omnis molestias doloremque sit earum et.",
      "content": "Reiciendis incidunt quos temporibus voluptatem esse suscipit voluptatibus et atque. Deserunt incidunt ea corporis inventore voluptas incidunt consequuntur. Eum rerum temporibus enim veritatis. Dolorem qui quas asperiores error illo quo. Necessitatibus et officiis esse consectetur qui rerum enim nesciunt magni.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.811Z"
    },
    {
      "code": "7KYmqVMwZL",
      "title": "Aperiam placeat tempore consequatur qui repellat.",
      "content": "Iusto officia sunt voluptas molestiae et et. Quas sunt reprehenderit. Molestiae rerum architecto recusandae corrupti veritatis voluptas architecto tempore quae. Eius sequi temporibus iure natus. Repellendus ea minus eius qui praesentium eos et voluptate dolore.",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.785Z"
    },
    {
      "code": "KoPx817mz2",
      "title": "Repellat accusantium placeat et eos.",
      "content": "Et quidem et voluptatem possimus perferendis cum molestiae et. Et non aut sint possimus est voluptas. Eos et placeat voluptate consectetur quaerat enim sunt. Animi nobis voluptas qui et provident est minima provident. Sequi temporibus animi.\r\nNobis tempora quis omnis nostrum quos architecto ullam molestiae. Distinctio reprehenderit laudantium. Ad repellat sunt harum. Vel non laborum soluta a atque autem.",
      "author": {
        "code": "emxRN0Pja8",
        "username": "test",
        "fullName": "Test User",
        "avatar": "https://gravatar.com/avatar/d2326f31a18f0bae30343a983894885a?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:47:28.970Z",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.797Z"
    },
    {
      "code": "GLzwAXQmKj",
      "title": "Quisquam non voluptates amet eveniet deleniti praesentium.",
      "content": "Inventore facere quo inventore rem illum autem. Omnis magni sint iure doloribus. Iure nemo perspiciatis ea similique. Sequi qui dolorem ut fugiat dicta ea autem deleniti. Omnis odio unde vel nihil inventore est veritatis et incidunt. Eius ut totam exercitationem omnis qui doloribus molestiae qui autem.\r\nSint illum blanditiis sint provident architecto. Ut sed provident eos. Saepe porro autem dolorem quod reiciendis. Provident ab et.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.807Z"
    },
    {
      "code": "Dq6wMolxAo",
      "title": "Exercitationem quia omnis atque accusantium magni.",
      "content": "Enim quisquam laborum ad. Et placeat accusamus unde veritatis esse id delectus. Cupiditate consectetur et.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.789Z"
    },
    {
      "code": "JGexWzNkY4",
      "title": "Facere dolores ut ducimus.",
      "content": "Facere consequatur commodi dolorem illo aut nam. Distinctio cum esse perspiciatis. Labore non vero voluptatem.\r\nAspernatur sunt provident et corporis dolor voluptas. Vel quod culpa explicabo eos. Magni aut recusandae quia voluptatem. Et non et omnis blanditiis aut reprehenderit aut.",
      "author": {
        "code": "deqwWGwkM0",
        "username": "jerald80",
        "fullName": "Jerald Barton",
        "avatar": "https://gravatar.com/avatar/d0218b23cb8cd5e5810b271d45565142?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.800Z"
    },
    {
      "code": "v7exnMzk31",
      "title": "Nisi quia et pariatur voluptas et earum asperiores ex mollitia.",
      "content": "Eveniet est delectus quia. Autem magni iste natus est et dolorem. Qui voluptatibus id id fugit id totam ex non doloremque. Temporibus minus et sunt. Nihil perspiciatis pariatur id aut voluptatem.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.810Z"
    },
    {
      "code": "NpnwolXk6M",
      "title": "Test",
      "content": "test",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T13:47:49.314Z"
    },
    {
      "code": "Jq1mK6zx36",
      "title": "Assumenda officiis molestias placeat recusandae laborum est rerum iste voluptas.",
      "content": "Illum nobis accusamus aperiam et. Porro voluptate omnis et expedita minus. Sint nam est voluptatum ut rerum nemo.\r\nEx incidunt molestiae. Perferendis optio doloribus. Consequuntur accusamus rerum cumque ipsam et ipsa tempora quia laborum. Occaecati consequuntur fugiat vitae quisquam nulla perferendis possimus doloremque aut. Deserunt voluptatum molestias numquam quasi.",
      "author": {
        "code": "r5V3kG3blE",
        "username": "boyd.gerhold",
        "fullName": "Boyd Gerhold",
        "avatar": "https://gravatar.com/avatar/75b63d2cdecaa22227b99ef5b5edb4c2?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.795Z"
    },
    {
      "code": "AnVwN7ekbM",
      "title": "Voluptas voluptatum non voluptatibus quidem perferendis.",
      "content": "Neque eum odit repudiandae odit aliquam ex error sint. Ea iste culpa molestias illo. Rerum in amet eveniet est est. Et reiciendis et id velit magni fuga neque ullam. Voluptas sunt dolores.\r\nEarum distinctio omnis nesciunt iusto. Minus omnis at quo fugiat delectus et eos nam porro. Fuga et quaerat quis eligendi ad voluptates ab. Eligendi est temporibus consequatur et voluptas et quis quo. Eum dolorem voluptas enim consectetur alias vitae. A quas vitae enim recusandae at.",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.805Z"
    },
    {
      "code": "Npnwo0Xk6M",
      "title": "Voluptates omnis accusantium minima.",
      "content": "Quo qui expedita deleniti culpa amet nam. Numquam eius quia. Quae facere debitis et veniam vero laborum omnis. Architecto dignissimos ea nihil neque qui reiciendis totam provident. Et voluptatem provident ad exercitationem quia magni ad qui. Nostrum in accusamus dolor et eveniet tempore.\r\nEt pariatur perferendis illum molestias id. Sit vitae vel cum numquam ut ab mollitia neque. Corporis id fugit veritatis qui sed eum. Sapiente tenetur alias omnis.",
      "author": {
        "code": "dkZw2KP19y",
        "username": "misty.raynor9661",
        "fullName": "Misty Raynor",
        "avatar": "https://gravatar.com/avatar/f408330b3d5baed308f549eb027050ed?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.791Z"
    },
    {
      "code": "Db6k9z0xPW",
      "title": "Odit autem in mollitia iste sit fuga quidem.",
      "content": "Ipsam quia non architecto deleniti id rerum voluptatem. Ipsam sunt aliquid impedit cupiditate. Ab iure dolores.\r\nSapiente neque consequatur est. Totam assumenda praesentium omnis hic deleniti. Consequatur aut facilis et non quo exercitationem iure. Ex porro molestiae sapiente ipsam alias neque est.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.802Z"
    },
    {
      "code": "05bx3eZw1e",
      "title": "Unde nostrum incidunt.",
      "content": "Vero placeat voluptatem sunt vel repudiandae. Voluptatum sunt incidunt iste officiis quae. Tempora non omnis tenetur. Dicta ut eaque suscipit blanditiis eum laboriosam sunt. Omnis excepturi nulla est dolorem.",
      "author": {
        "code": "MVWw47R7Kx",
        "username": "admin",
        "fullName": "Administrator",
        "avatar": "https://gravatar.com/avatar/2438366eb259126987a855fda4383b01?s=64&d=wavatar",
        "lastLogin": "2016-12-18T13:50:03.349Z",
        "roles": [
          "admin",
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.793Z"
    },
    {
      "code": "4lVklAlxp5",
      "title": "Reiciendis architecto et ea molestiae.",
      "content": "Est accusantium est vel eveniet quam consequatur perferendis corrupti beatae. Est sit dignissimos dicta. Et ut id quo sit fugit. Consequatur quam sint dolor.",
      "author": {
        "code": "ON13Kaw74x",
        "username": "janet69",
        "fullName": "Janet Schulist",
        "avatar": "https://gravatar.com/avatar/27b3d390ceb9e603a4bd73e07fd53275?s=64&d=wavatar",
        "roles": [
          "user"
        ]
      },
      "votes": 0,
      "voters": [],
      "views": 0,
      "createdAt": "2016-12-18T12:33:41.803Z"
    }
  ]
};

function benchBuiltInStringify() {
	return JSON.stringify(data);
}

function benchFastSafeStringify() {
	return safeStringify(data);
}

let suite = new Benchmark.Suite;

suite
	.add("Built-in JSON.stringify", benchBuiltInStringify)
	.add("fast-safe-stringify", benchFastSafeStringify)
	.on("cycle", function (event) {
		let bench = event.target;
		if (bench.error)
			console.error(chalk.red.bold(String(bench), bench.error.message, "\n", bench.error.stack || ""));
		else
			console.log("››", String(bench));
	})
	.on("complete", function () {
		console.log("---", "\nFastest:", this.filter("fastest").map("name").join(", "), "\nSlowest:", this.filter("slowest").map("name").join(", "));
	});

console.log(chalk.yellow.bold("Benchmark Stringify"));
suite.run();