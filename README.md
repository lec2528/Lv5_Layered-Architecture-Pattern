node.js 백엔드 구현
jwt를 이용한 회원가입, 로그인 인증 기능을 사용한 게시판/게시글 좋아요/댓글 기능 구현
sequelize라이브러리를 이용한 mysql 데이터 관리
23.07.13~ 계층형 아키텍처로 리팩토링 중
23.07.15 user, post, comment까지 리팩토링 완료 추후 에러핸들링 예정

ERD설계
![Uploading Lv4_ERD 설계.PNG…]()

```
Lv5_LayeredArchitecturePattern
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 04
│  │  │  ├─ 209b4cc8f13598cbf1016af0e07e8c1e58ab70
│  │  │  └─ 9ec05d9c42e8915456e440eceae18e47982ad7
│  │  ├─ 05
│  │  │  ├─ 036e97cf658cd0a0c5910b02644496153d99cf
│  │  │  └─ 6227709828e7c354e45827e81f8167fa45c39e
│  │  ├─ 06
│  │  │  ├─ 062bf3269f27486d8c01e0b5d82d45710a2e3f
│  │  │  └─ 380d4d1eed8edaad62ab9382bfa7071f97e644
│  │  ├─ 09
│  │  │  ├─ 38ce6a72ed1d29c6753416b6b366644c807267
│  │  │  └─ d8f1b9bde25f22a0c884852458a86447e934ad
│  │  ├─ 0a
│  │  │  └─ 391a93277bfcb040d524d3249b721037dc5beb
│  │  ├─ 0b
│  │  │  └─ 8e58dcd2bfe85a8188928dafa83b365bf5f3b1
│  │  ├─ 0c
│  │  │  └─ 8d1eb32677f0f3eb6c27fb1c620f1ad1b12a16
│  │  ├─ 12
│  │  │  └─ 8ab956b8b1a207e7b92e58d48eae8334f8bd2c
│  │  ├─ 13
│  │  │  └─ 7e7da686b531b2144123146b65c2167a0b8b43
│  │  ├─ 18
│  │  │  └─ c1b9da921bddca638d6f4d4e6e6de837ceba4e
│  │  ├─ 19
│  │  │  └─ 57e1cc5b30a722865f9e190f64124943629f0e
│  │  ├─ 1a
│  │  │  ├─ 1d2038ff12410ee6fefe1106dc0bd6132d7430
│  │  │  └─ be2d1601a9c186653a894e82119e9a461a19c9
│  │  ├─ 1b
│  │  │  ├─ a59e26aeb79fbcea7c88866eb06f730a659d17
│  │  │  └─ db5af08e5ec60b5417ab4f8e27a366dbd1bc46
│  │  ├─ 23
│  │  │  └─ 2b8e69ac72bb6d6f58a509997945ccc46eb31b
│  │  ├─ 24
│  │  │  ├─ 24d0666faae947ae831ca1b565cb1daee84b0b
│  │  │  └─ 6374be4455049cd7ab16478e19a2ae497c1f9c
│  │  ├─ 27
│  │  │  └─ 3c1a433571f43d8464a33e1158aeded83fe931
│  │  ├─ 2a
│  │  │  └─ c06993b5b7002695e89b374a7a353f7b5b9fff
│  │  ├─ 2d
│  │  │  ├─ 8300d3c2a238b381c6adc1a49d94c0f170e85f
│  │  │  └─ c26bce58010d2937f6af78bb795a120386b830
│  │  ├─ 2e
│  │  │  └─ a591a51e35d6ee0c6452d49b2cd0d5bcc1ea87
│  │  ├─ 32
│  │  │  └─ 564e6d036c14715bfd0691088b26d3ce55f2cf
│  │  ├─ 33
│  │  │  └─ e07e02278c8a6416fadc6ba892692d0877d39b
│  │  ├─ 35
│  │  │  ├─ c00437ff41b7f213eb75ab8ae6af21ab6aa020
│  │  │  └─ ec1033db566c8b6bfe016eb6bca2ec93105a0e
│  │  ├─ 39
│  │  │  ├─ 76685a06fa1ccb49c47b4fbe6544834b854be1
│  │  │  ├─ cd6eb88629d2c6fbbde7a3944c69763c8ba1c4
│  │  │  └─ e0a9bcfa6eed0a789e0cb8354ffa3bfa4e4cb9
│  │  ├─ 3d
│  │  │  └─ 5379e819c9d30f6d7af363cb2b14c9393fa89b
│  │  ├─ 3e
│  │  │  ├─ 477242786b4c9a45be51c7684b2280bbd2d833
│  │  │  └─ f8a4b8f22fb39523c5355dc24d89d21cccb48c
│  │  ├─ 45
│  │  │  ├─ 53fcc509f43c3244adfad16ef6c6f7549cd62c
│  │  │  └─ 68a99ecaad1e04b0cc423db539e8c8e08cd8c6
│  │  ├─ 46
│  │  │  ├─ 6a2fbdc1d2f58de68ee4d3aabafaa20186da54
│  │  │  └─ e3024f6e63d9d4cff182f5272cb6fe632f78a5
│  │  ├─ 47
│  │  │  └─ 6b74afb85e10a79f55873d84db88656390e850
│  │  ├─ 48
│  │  │  └─ 2c199270cf4e0835eb8774998e005760ae900a
│  │  ├─ 4a
│  │  │  └─ b77e1e606ffa950391d98f42ec8140612f0ce9
│  │  ├─ 4f
│  │  │  └─ cb08ea5a4978e91f171e2334f9b71890646990
│  │  ├─ 51
│  │  │  └─ d47950a57a3d8ef26e50d7fc33e82013885903
│  │  ├─ 53
│  │  │  └─ afa9c3ccb3d831f3a90644f2e0a7855b17db39
│  │  ├─ 54
│  │  │  └─ e213d61154758a6d38e9bc71f118ff50d38cca
│  │  ├─ 55
│  │  │  └─ 5e8e5033285ff1c118c8cc4ee18d34ad5268e5
│  │  ├─ 57
│  │  │  ├─ 18e5c826ad2da81a21a1cba763a2e71f67643b
│  │  │  └─ 6a80bd01ab9ad46816224c464c223df42cb979
│  │  ├─ 58
│  │  │  ├─ 49aa58fd7a21c84ba8b638b598b4753ffa4d10
│  │  │  └─ bad5b202d203c7385b6e700fbf2c29726485d9
│  │  ├─ 59
│  │  │  ├─ 6b92ae43f4521ea0989ec948759f70268668f1
│  │  │  └─ ee86e8d048d02b4a7b81db04c76c27d9a13554
│  │  ├─ 5a
│  │  │  └─ 31d6efba20a02ea519177198a292d11be9d2af
│  │  ├─ 5e
│  │  │  └─ 010c2f38eadcda4b527ab464dfdd052932ae33
│  │  ├─ 63
│  │  │  ├─ 3a3d392a5cd4c066df29832738ee4fba042470
│  │  │  └─ d0bd1e898ebee5c25f63c7f9f52be68ae0da5f
│  │  ├─ 64
│  │  │  ├─ 04a71134caccd90af1e84cde968197907d0dc4
│  │  │  └─ c6916522b658908c88a7820b02b15d0dfc993d
│  │  ├─ 65
│  │  │  └─ dec77fe47e36782cce1f45079f992a2bd554b6
│  │  ├─ 68
│  │  │  ├─ 1f6d620d2286068eff2760ca8ccc47d2ee836a
│  │  │  └─ 8f78a5b2eeaac0179d38df78db272d4e4a5d09
│  │  ├─ 6a
│  │  │  └─ 6efa9b34bb5b56f16fe6953cfb07cb745c5af5
│  │  ├─ 6b
│  │  │  └─ edac4af0a4e3889f5a9bd975aeee8ff91575e8
│  │  ├─ 6c
│  │  │  ├─ 6381bc32eec55212025d9cb0dfdd69e8daa52a
│  │  │  └─ d7c8a54ef47cf5774b8f79de9e3f6f82adc552
│  │  ├─ 6e
│  │  │  ├─ 337ec7dc67de4e1470ff88fbf87aa3e4340a8c
│  │  │  └─ 6d9ff92b279bfa3edec577f7d3d813e739c468
│  │  ├─ 6f
│  │  │  └─ 06ba8b3ceb9bb8e087d8092d98a5d431753402
│  │  ├─ 70
│  │  │  └─ 1a05cf47b62520396446f1197a4e623ef793af
│  │  ├─ 71
│  │  │  ├─ 1723a52d2de9c9e14b5918fd8ae3633fcf39b0
│  │  │  ├─ 3ea33a4cd43d127df0f21dc6053ab30e7e0ac1
│  │  │  └─ 608fdb082e5132bc7e27e1a94ad13dfbe2fa34
│  │  ├─ 72
│  │  │  └─ e5ea1c6e205f4f7c575085f0d8068f61a958f1
│  │  ├─ 73
│  │  │  └─ 6458970f338734558c563edd926e1baf9a9d53
│  │  ├─ 76
│  │  │  └─ 1f44b53b834e05667d0a9c69c4a1ae46dbd81c
│  │  ├─ 79
│  │  │  └─ 7fee4044a423955af76cf7fd89088cbdcabfc7
│  │  ├─ 7b
│  │  │  └─ 5f369fa51ba29daa77098362e701c04d0ffffe
│  │  ├─ 7e
│  │  │  └─ 562506e19bf73d75f395edde58bb6408725c97
│  │  ├─ 7f
│  │  │  ├─ 91cdabeda6066dca45d78e7b5f84c3f75256fb
│  │  │  └─ aa67eda9195399eef1ccf94d6ccdbb58dac136
│  │  ├─ 81
│  │  │  └─ ff6c50a75958b382d593e4762d121b3cedb94d
│  │  ├─ 82
│  │  │  └─ 104a71c0ce6ff96927ce6c828e3af1ef4f627e
│  │  ├─ 84
│  │  │  ├─ 1f9639c8161e098ba7e699863748896ff4ec7a
│  │  │  └─ f771e1dd4ef1f252839490fd13cb95a4b80997
│  │  ├─ 85
│  │  │  └─ 6d606b220c948fe164f5424ed21d22744e2d7e
│  │  ├─ 87
│  │  │  └─ 17906087e921425a8a9bb7871136f2da5702d0
│  │  ├─ 88
│  │  │  ├─ 187d997d37db389d4e5b300e54991b90c51a52
│  │  │  └─ 384800b767f4769647d45d9f831bbc88d1210d
│  │  ├─ 89
│  │  │  └─ c9c94844da99297ed0fa0cda20af48aec9c2e4
│  │  ├─ 8b
│  │  │  └─ 6ced917720dfe888bd68a188a191e05a074234
│  │  ├─ 8c
│  │  │  └─ 49aa669623867987c0b0b29f1cd625118a319f
│  │  ├─ 8d
│  │  │  ├─ 43236d4e3229809db5a32e6b83558b83cb5007
│  │  │  ├─ d440321ef6f2b1260cf2020a639b25f66073d3
│  │  │  └─ e39cb43f197d609414093ff48d1b4680698515
│  │  ├─ 8f
│  │  │  ├─ a736597bef03303788a44be71e1f0b1759a1d2
│  │  │  └─ d3dc0c6c74dde95c97c6f3976f133345cd3b3d
│  │  ├─ 91
│  │  │  ├─ 9286535c047d88a1a48610318230d1a41b6735
│  │  │  └─ e464ba600854aa47fbc70f5db02ed51fea7283
│  │  ├─ 92
│  │  │  ├─ 5ba2e9ac86dde62c1ed566643e5537cc3fe573
│  │  │  ├─ bbeac8e726f1e5a6b859d7e8d0a0de0aa6072d
│  │  │  ├─ e547df893abd770b824ba45b8da6269249dc4e
│  │  │  └─ fa3d6c3ae351bbab8dfea86b54b876fd95b58c
│  │  ├─ 93
│  │  │  └─ 3d04486fc962fd4312e112c23190a2f75553a3
│  │  ├─ 95
│  │  │  ├─ 8afa8e01d377bec93f70a9e160263e55eee4b6
│  │  │  └─ cd5506dd896bbbb3252157b2e699a2b82edbad
│  │  ├─ 96
│  │  │  ├─ 52305337079fa3c68fd57433e9e54497c8ed74
│  │  │  └─ f5e8e5dc0b943163b71f2ecaadb00bb35dbbab
│  │  ├─ 97
│  │  │  └─ 393405e6cc51ecf485818ec1e9e448e1280139
│  │  ├─ 99
│  │  │  └─ 20939f7c57284e65be5c4a7b477fc507f75345
│  │  ├─ 9b
│  │  │  ├─ 567f00727cf38ef95d9cefbe97f5fdd573d088
│  │  │  └─ b9ab39d8b0c8565ba385ae71d053ff5b3119ff
│  │  ├─ 9c
│  │  │  └─ 344c1a0544e8fcc59578cdeeee9edd5e80707c
│  │  ├─ 9d
│  │  │  └─ 4e415deeca0acfe5cd8720264a586b3f1a8cc7
│  │  ├─ 9f
│  │  │  └─ 230689f127512e7100abd8245b429b0fe527d0
│  │  ├─ a1
│  │  │  └─ c2baaa4195adcc1fbc4327cc23e8628536b924
│  │  ├─ a2
│  │  │  ├─ 540e8238a9b32dc531f6337f1c21f9d7ba9faf
│  │  │  └─ cb8a3122e556c3098d44dc0038875e8369f6a0
│  │  ├─ a4
│  │  │  ├─ 621da44df9f103ebabfabe23279bbc8fc7d1d2
│  │  │  └─ a6df8884499daec5eaa4cbc82cfb9f2c111182
│  │  ├─ a5
│  │  │  ├─ 36bcee6c3a4def05ff542ad0bb21a3d8f0c475
│  │  │  └─ c24320a4a5ec4eb2786b6cde176b6aaed4fd31
│  │  ├─ a6
│  │  │  ├─ 6959d8a35619bdb5a6b8e785228f59f4adc6d9
│  │  │  └─ 8e17afec6585c3b01aa3157e36340fc21ac7b2
│  │  ├─ a8
│  │  │  └─ 2b07232c451aa686555fe40b4db048a40dc9ed
│  │  ├─ a9
│  │  │  └─ e8928f04ac71d9206dfaeb70747cc24914eade
│  │  ├─ aa
│  │  │  └─ fa2cbf54f018ae1836755d5878d0076ce680e5
│  │  ├─ ab
│  │  │  └─ d48baaa5ec8abccfbb1ec1c0486f32698fa4a7
│  │  ├─ ae
│  │  │  ├─ 1732f22a44d323bc7d0f258156b1a757c80b15
│  │  │  └─ 3bacba2f3b3be4a5ccb0606b44b9cd4e697885
│  │  ├─ af
│  │  │  └─ 341081fb83158b48fdc98b00f0bb7d5dca4c52
│  │  ├─ b1
│  │  │  └─ c480f0403c1d09e418eb6ba9f463b2b84a4900
│  │  ├─ b5
│  │  │  └─ 5b9fc77db11286afaf926f844de00c4ebb4a3d
│  │  ├─ ba
│  │  │  └─ 87795585cf872caa4b2a341cc57d206cbe4346
│  │  ├─ bb
│  │  │  └─ 8cc3ad31000a0ffac2de955a2858b869199503
│  │  ├─ be
│  │  │  └─ a9d671b685d0e787388b1322dff5f8874f2f86
│  │  ├─ bf
│  │  │  └─ a8a9e0dfdccfb56d96b909a45f47e9294f32da
│  │  ├─ c0
│  │  │  ├─ bfaf342759db6e56322647903a5fb27f79f27c
│  │  │  └─ eba7b6ba248fa8844c099443e98625ead56a7e
│  │  ├─ c2
│  │  │  ├─ 1b16cea75b0bf01ba534b1c0638acf814eb6da
│  │  │  ├─ 51902b313dc23ade25244b7fc3729ac8f922c0
│  │  │  └─ 901537474ced9d94e0be8f3b2f23f534a9a192
│  │  ├─ c3
│  │  │  ├─ d15a5b767c32a39b33b3dcd1e7731f2ced97c8
│  │  │  └─ e4d2aad8e7e066d0a24615343eb2f2733fc0a2
│  │  ├─ c4
│  │  │  ├─ 9748f477c9f59be03865338f131815cf2c5865
│  │  │  └─ fe575dcae108394bac19d5970a2a6bd29f0119
│  │  ├─ c5
│  │  │  └─ 8db8c14a10323d986d8c300e8cbbf060e9ede3
│  │  ├─ c8
│  │  │  └─ 05e386fb993b7c4a466c250fc54c7498e202e4
│  │  ├─ c9
│  │  │  └─ 7db7d0982a1fb56c1e7c689a64b06f3f35e0ad
│  │  ├─ cc
│  │  │  ├─ 17184de3f8b13edac618b8eae5a713e8890ede
│  │  │  ├─ 213219cca74ec452f4fe1b73bf26d1a150a473
│  │  │  ├─ 344a0788ded85c725cf51f16dec69f230fa91a
│  │  │  └─ f3a1faf14c4122c66f1c8c95d5d00e981f8bf7
│  │  ├─ cd
│  │  │  └─ 69cd062b796fffd46a3b44c5451febcbc671e3
│  │  ├─ ce
│  │  │  ├─ 18f57bd15c9efceeae604a1ce7923cb103ec72
│  │  │  └─ db06fa00e646ade76e1d842ab12a9c0db197a6
│  │  ├─ cf
│  │  │  └─ 7f3540c45b7c8b6505dde6e7979ccff78da4c4
│  │  ├─ d0
│  │  │  └─ 4dd955430dc6a1af3dd2b921dccef4a3eadada
│  │  ├─ d3
│  │  │  ├─ 97335f6151b1195d7bc2de94ecd7c3b9568e90
│  │  │  └─ a0455831fdb1dfd9746b782c83bd71e8cafb26
│  │  ├─ d5
│  │  │  ├─ 3797f0c04a243e3defa4cfe0bf2a59d65552c1
│  │  │  └─ 7e0e7f66fc75b5eba91796a179927b6bbdf007
│  │  ├─ d8
│  │  │  └─ 9ad24fa1f83a24ac6e268c95ce7096e06d4a7f
│  │  ├─ d9
│  │  │  └─ 85e57e4b78a65b26d242b10d5f39751612e8d2
│  │  ├─ da
│  │  │  └─ 6e33814174e5340ba94c1a1ef7040356a014c4
│  │  ├─ db
│  │  │  ├─ 0950e16ef873e6240d8492fd1e992cfe5e5ecb
│  │  │  └─ b2c56fb74d59305ef57f39b0d85b116363fdb8
│  │  ├─ df
│  │  │  └─ 4dddb667e7a475cca0972c5e7bbd85cd4172dd
│  │  ├─ e2
│  │  │  └─ 0d4f5d9255c5f9f588650d8586673fedd24c33
│  │  ├─ e3
│  │  │  └─ 6d164b20707d0d5208eb24343fa077901cccf4
│  │  ├─ e4
│  │  │  ├─ 24c7cc6893b8528ef087e606c62f4fe96e9c55
│  │  │  ├─ 460fa9020f77ac2af4368aca74f63199bcefad
│  │  │  └─ 5927ea321ab0a6fbbd394d30898dde8d3b7299
│  │  ├─ e5
│  │  │  └─ 060b9c9ae1bb350a2fcc4df2e962b89ba3dc2d
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ 2d7a500d02af3d55a7b2743020b6a3f7a3001e
│  │  ├─ e8
│  │  │  ├─ 95282db62ffbc5b21d8d75520eb7896c2c5104
│  │  │  └─ fdd69e730dc95e230b002267fd9db6def9b5c7
│  │  ├─ eb
│  │  │  ├─ 046494d9d1de3bc3af67e9dd6f51f1e29b4693
│  │  │  ├─ 581913cc22e616653a4f13b85ba1607d106652
│  │  │  └─ 6ba0b5eda02d0e0bef1fa79c2cc4e42b69551c
│  │  ├─ ec
│  │  │  ├─ 7957fb00634aaf13b76e3015bae8fb8b0bf10a
│  │  │  └─ 7af4029350360467c053f5c45b827ad868f2ce
│  │  ├─ ee
│  │  │  ├─ 125959a7689832c2111846816803938d583842
│  │  │  ├─ 4bbd007bddaabbdaef6b422eb90c0ddd289532
│  │  │  ├─ c7500dea59db49d1cd95c0e021070b09532118
│  │  │  └─ d267a705892393fab21a8b3911d52ab8d26d52
│  │  ├─ ef
│  │  │  └─ 861ba69796b5752940b95e2686167c90fb7668
│  │  ├─ f0
│  │  │  └─ 2e2d919c7e1b5d76addff148dd5c3a142b2b84
│  │  ├─ f1
│  │  │  └─ 0927c6310fe7e1ab367e50dcb364fc75461415
│  │  ├─ f2
│  │  │  └─ a1a9d3038353460c3a2e65ede2604a1f92a32a
│  │  ├─ f6
│  │  │  ├─ 3b527df43f6c3328d2bb234424b317cb98f39c
│  │  │  └─ 511f46f7612cb820cfb2de7eec3fa421aebb0e
│  │  ├─ fa
│  │  │  └─ f184c5a06fdac1b0c7b1af6bf9b21fde210870
│  │  ├─ fc
│  │  │  ├─ 47ae792233fdb834c5d9da024c0708a9d99a2d
│  │  │  └─ 4f301fe2630a9e025d6124da2605065c0a34ec
│  │  ├─ fd
│  │  │  └─ c0ba00e93497894d7db6622a2702f813ccb697
│  │  ├─ ff
│  │  │  ├─ 444bf8dae198de85b5e0e0c3b5c35f26d741bd
│  │  │  └─ b8cb4de7d54ab38d430dc3b210aaad36bc9561
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ .prettierrc.js
├─ app.js
├─ controllers
│  ├─ comments.controller.js
│  ├─ posts.controller.js
│  └─ users.controller.js
├─ Middleware
│  └─ loginmiddleware.js
├─ models
│  ├─ comments.js
│  ├─ index.js
│  ├─ likes.js
│  ├─ posts.js
│  └─ users.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ repositories
│  ├─ comments.repository.js
│  ├─ posts.repository.js
│  └─ users.repository.js
├─ seeders
└─ services
   ├─ comments.services.js
   ├─ posts.services.js
   └─ users.services.js

```