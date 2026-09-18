const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-C_1Xwdl4.js","assets/index.esm-CuPcQWPt.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./rolldown-runtime-hePW80VL.js";import{n as r}from"./src-BuEy9DVt.js";import{n as i,t as a}from"./jsx-runtime-DE3RlOCf.js";import{a as o,r as s,t as c}from"./runtime-DRHALcRS.js";import{r as l}from"./analytics-DZYII9tU.js";import{a as u,f as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./SoundToggle-DCXTIXUj.js";import{i as b,n as x,r as S,t as C}from"./lang-DYGpdZLL.js";import{i as w,n as T,t as E}from"./game-lifecycle-QSZxzeZR.js";import{c as D,d as O,i as k,n as A,o as ee,s as te,u as j}from"./game-pause-DLSkgy91.js";var M=i(),N={$comment:`単位: 距離=FORMATIONグリッド1セル / 速度=セル毎秒 / 攻撃間隔=秒。canMoveWhileFighting=移動命令を維持したまま戦闘可能。この表がゲームバランスの初期値（GAME_SPEC.md 兵士の種類 2026-08-24更新）`,unitTypes:{strategist:{cost:0,hp:100,attack:0,range:0,attackInterval:0,moveSpeed:1,canMoveWhileFighting:!0,arrowMul:1,settleSec:0},inf_shield:{cost:1,hp:200,attack:8,range:1,attackInterval:1,moveSpeed:.8,canMoveWhileFighting:!1,arrowMul:.5,settleSec:0,knockbackResist:.6},inf_sword:{cost:1,hp:100,attack:15,range:1,attackInterval:1,moveSpeed:1,canMoveWhileFighting:!1,arrowMul:.7,settleSec:0},inf_spear:{cost:1,hp:100,attack:15,range:2,attackInterval:2.5,moveSpeed:1,canMoveWhileFighting:!1,arrowMul:.7,settleSec:0},inf_bow:{cost:1,hp:80,attack:11,range:20,attackInterval:2.6,moveSpeed:1,canMoveWhileFighting:!1,arrowMul:1,settleSec:.8},cav_sword:{cost:2,hp:140,attack:15,range:1,attackInterval:1,moveSpeed:3.5,canMoveWhileFighting:!0,arrowMul:1.2,settleSec:0},cav_bow:{cost:2,hp:140,attack:18,range:16,attackInterval:3,moveSpeed:3,canMoveWhileFighting:!0,arrowMul:1.2,settleSec:0}},combat:{$comment:`戦闘定数。正面ダメージは1倍固定。sideDamageMul=側面倍率、rearDamageMul=背面倍率（どちらも有限かつ0以上。不正値は既定値へ戻す） frontAngleDeg=正面判定±角度 rearAngleDeg=背面判定角度(超) arrowSpeed=矢の飛翔速度 arrowHitRadius=着弾ヒット半径 idleDetectionMinRange=待機中の最低索敵距離(単位=セル) squadSelectionRadius=戦闘画面の部隊選択円半径(単位=セル) engagedMoveSpeedMul=交戦中の移動速度倍率 strategistHpBuffMul=軍師の所属部隊の兵のHP倍率(軍師本人には掛けない。軍師死亡で1.0へ戻す) strategistDeadArmySpeedMul=チーム戦で軍師死亡時の自軍速度倍率 enemyMassRadius=寄せ先にする敵の塊の半径(単位=セル) chargeGraceSec=移動命令が切れたあと助走が残る秒数 chargeKnockback=突貫の一撃で敵を押し込む距離(単位=セル・突撃倍率に比例) chargeSpeedRatio=助走とみなす速度(全速比) chargeRunningRatio=助走とみなす「全速で走っている兵」の割合 chargeCancelTurnDeg=助走中に移動命令で進行方向をこれ以上(度)変えたら助走を捨てる(0〜180) reachExtraRange=交戦中に射程に敵がいない兵が個別に寄る「射程＋この距離」(単位=セル) reachLeash=個別に寄るときスロットから離れてよい上限(単位=セル・これ以上離れたら隊列へ戻る) shooterHoldRatio=射手だけの部隊が交戦で寄るとき止まる距離(射程に対する割合。縁で止めると撃ち漏らす)`,sideDamageMul:2,rearDamageMul:3,frontAngleDeg:65,rearAngleDeg:135,turnSpeedDegPerSec:360,arrowSpeed:20,arrowHitRadius:.5,idleDetectionMinRange:5,squadSelectionRadius:6.5,unitRadius:.4,engagedMoveSpeedMul:.5,strategistHpBuffMul:1.4,strategistDeadArmySpeedMul:.8,matchDurationSec:300,chargeMinSec:2,settleMoveThreshold:.2,chargeReference:20,chargeMaxMul:5,routSpeedMul:2.5,enemyMassRadius:6,chargeGraceSec:1.5,chargeKnockback:1.5,chargeSpeedRatio:.7,chargeRunningRatio:.5,chargeCancelTurnDeg:90,reachExtraRange:1,reachLeash:1.5,shooterHoldRatio:.8},battlefield:{$comment:`mapSize=対戦人数ごとの戦場の広さ(セル)。この値をそのまま使う。軍が大きくて布陣が収まらないときは、戦場を軍1つぶんまで広げたうえで布陣の半径を縮めて収める。ここに書いていない人数(5人以上など)だけ、布陣が収まる大きさから自動算出する / deploySeparation=3軍以上で隣り合う軍のあいだに空けるセル数 / duelGap=1v1で両軍の正面に空けるセル数 / margin=軍の外周と戦場の縁の余白 / minAspect=自動算出のときの最小アスペクト比(短辺/長辺) / moveSpeedMul=対戦人数ごとの移動速度の倍率(画面には出さない内部の倍率。戦場が広い人数ほど行軍が間延びしないよう速くする。MULTIの速度スライダーにはこの倍率を掛ける)。2026-09-13: 部隊グリッド 11→9 にあわせて間隔を 9/11 に縮め(34/6/8 → 28/5/7)、人数ごとの広さを mapSize に出した(それまでの自動算出と同じ値)`,mapSize:{2:{w:98,h:61},3:{w:101,h:109},4:{w:111,h:111}},moveSpeedMul:{2:1,3:1.2,4:1.4},deploySeparation:7,duelGap:28,margin:5,minAspect:.62},formation:{$comment:`squadGridSize=部隊編成グリッド(9x9。2026-09-13 に 11 から縮小。保存データは store.ts が v2→v3 で移行する) / armyGridSize=軍の陣形グリッド(7x7・1部隊=1マス)`,squadGridSize:9,armyGridSize:7,maxSquadCost:20,maxSquads:20,maxArmies:10,armySlots:10,rotationStepDeg:5},ai:{$comment:`敵AI。orderIntervalSec=AIが命令を出す最短間隔(秒。この間隔で1部隊ずつ動かす) hitAndRunMinSpeed=この速度以上の近接だけの部隊(騎兵)は追撃ではなく敵陣を突き抜けるヒット＆ランをする hitAndRunOvershoot=突き抜けるとき敵の重心の何セル先を目的地にするか`,orderIntervalSec:3,hitAndRunMinSpeed:2,hitAndRunOvershoot:10},ui:{$comment:`戦闘画面の演出・カメラ。toastDurationSec=部隊壊滅トーストの表示時間(カットイン〜フェードアウト完了まで) toastCutInMs=カットインの長さ toastFadeOutMs=フェードアウトの長さ(次のトーストが待っているときは省略して即カットイン) scrollMarginCells=ズーム中に盤の縁の外側まで画面移動できる余白(セル数。0で縁ぴったり。手前の行で判定するので奥の行ではこれより広く外側が映る)`,toastDurationSec:3,toastCutInMs:220,toastFadeOutMs:600,scrollMarginCells:2},se:{$comment:`操作・演出のSE。assets/output/strategists-war/audio/ 内のファイル名を書く。空文字なら鳴らさない。squadSelect=部隊選択時 orderConfirm=移動先/追撃の決定時 squadWiped=部隊壊滅トースト表示時`,squadSelect:`se002.mp3`,orderConfirm:`se002.mp3`,squadWiped:`se003.mp3`}},P={ja:{"app.title":`軍師大戦`,"top.playerName":`プレイヤー名`,"app.backToPark":`ホームへ戻る`,"top.single":`SINGLE PLAY`,"top.multi":`MULTI PLAY`,"top.formation":`FORMATION`,"top.single.desc":`AIと対戦（2〜4人）`,"top.multi.desc":`気軽に通信対戦`,"top.formation.desc":`部隊と軍を編成する`,"top.howTo":`遊び方`,"top.howTo.desc":`基本と応用を確認する`,"top.lang":`Language`,"modal.notImplemented.title":`未実装`,"modal.notImplemented.multi":`MULTI PLAY は現在開発中です。もうしばらくお待ちください。`,"modal.notImplemented.single":`SINGLE PLAY は現在開発中です。まずは FORMATION で部隊と軍を編成できます。`,"modal.close":`閉じる`,"common.back":`← 戻る`,"common.help":`ヘルプ`,"common.save":`保存`,"common.delete":`削除`,"common.cancel":`キャンセル`,"common.ok":`OK`,"common.on":`ON`,"common.off":`OFF`,"common.new":`新規作成`,"common.name":`名前`,"howTo.title":`遊び方`,"howTo.tab.basic":`基本`,"howTo.tab.advanced":`応用`,"howTo.basic.step1.title":`兵隊を並べて部隊を作る`,"howTo.basic.step1.body":`FORMATIONの「部隊」で兵種を選び、盤上に兵隊を配置します。

配置できる兵隊は、歩兵が盾・剣・槍・弓、騎兵が剣・弓の6種。自由に組み合わせて、お好みの陣形を作りましょう。

部隊にはCost制限があり、最大{maxCost}コストまで配置できます（歩兵は1、騎兵は2）。`,"howTo.basic.step1.imageAlt":`盤上に兵隊を配置して部隊を作る画面`,"howTo.basic.step2.title":`部隊を組み合わせて軍を作る`,"howTo.basic.step2.body":`作った部隊を最大{slots}個選び、軍の陣形に配置します。いずれかの部隊に、必ず軍師を置く必要があります。`,"howTo.basic.step2.note":`尚、軍師の所属する部隊は、兵のHPが{hpMul}倍になります！`,"howTo.basic.step2.imageAlt":`部隊を組み合わせて軍の陣形を作る画面`,"howTo.basic.step3.title":`部隊をスワイプして移動`,"howTo.basic.step3.body":`戦闘では自分の部隊をタッチ（クリック）し、そのまま移動先までスワイプ（ドラッグ）して指示します。兵隊は陣形を保って移動し、敵への攻撃は自動です。

敵部隊の上でスワイプを終えると、その部隊を追い続ける「追撃」の指示になります（赤い破線の輪が目印）。`,"howTo.basic.step3.imageAlt":`部隊をスワイプして移動先を指定する画面`,"howTo.basic.step4.title":`相手軍師を倒したら勝利`,"howTo.basic.step4.body":`相手の軍師を倒せば勝ちです。時間切れの場合は、生き残っている兵の数が多いほうが勝利。`,"howTo.basic.step4.imageAlt":`軍師撃破と生存兵数による勝利条件を示す戦闘画面`,"howTo.advanced.step1.title":`側面・後方から攻める`,"howTo.advanced.step1.body":`正面以外からの攻撃は強力です。側面からのダメージは{side}倍、後方からは{rear}倍になります。部隊を回り込ませて挟撃しましょう。`,"howTo.advanced.step1.imageAlt":`側面と後方から攻撃する戦術の説明図`,"howTo.advanced.step2.title":`突撃で敵陣を崩す`,"howTo.advanced.step2.body":`部隊が正面へ{chargeSec}秒以上まっすぐ進むと「突撃」状態になります。突撃したまま敵に当たると、最初の一撃の火力が大きく上がり（最大{chargeMax}倍）、敵兵を押し込んで陣形を乱します。

兵の多い部隊ほど、足の速い兵ほど突撃は強力。弓兵は突撃しません。`,"howTo.advanced.step2.imageAlt":`騎兵の部隊が正面から突撃して敵の列を押し込む場面`,"howTo.advanced.step3.title":`弓兵を活用しよう`,"howTo.advanced.step3.body":`弓兵は離れた敵を撃てます（射程{range}セル）。ただし矢の通りやすさは相手で変わります。騎兵には{cavArrow}倍とよく効きますが、剣・槍の歩兵には{infArrow}倍、盾兵には{shieldArrow}倍とほとんど効きません。

弓は止まって構えないと撃てないので、前列に歩兵を置いて守りましょう。`,"howTo.advanced.step3.imageAlt":`弓兵の矢が騎兵・歩兵・盾兵にそれぞれどれだけ効くかを示す図`,"howTo.advanced.step4.title":`軍師の部隊と、部隊の足`,"howTo.advanced.step4.body":`軍師の所属部隊は兵のHPが{hpMul}倍になりますが、軍師の足は{strategistSpeed}で固定です。部隊全体の移動速度は、いちばん足の遅い兵に引きずられるので、軍師を騎兵部隊に入れると部隊ごと遅くなります。

軍師が倒れれば負け。後方の歩兵部隊に置いて守るのが基本です。`,"howTo.advanced.step4.imageAlt":`後方の歩兵部隊に守られた軍師と、足の遅い兵に合わせて進む部隊の図`,"formation.title":`FORMATION`,"formation.squads":`部隊 (Squad)`,"formation.armies":`軍 (Army)`,"squadList.title":`部隊一覧`,"squadList.count":`{n} / {max} 部隊`,"squadList.full":`部隊はこれ以上作成できません（最大{max}）`,"squadList.unitCount":`{n}体`,"squadList.usedBy":`使用中: {names}`,"squadEdit.title":`部隊編集`,"squadEdit.name":`部隊名`,"squadEdit.namePlaceholder":`兵を置くと自動で入ります`,"squadEdit.defaultName":`{unit}部隊`,"squadEdit.nameRequired":`部隊名を入力してください`,"squadEdit.cost":`コスト`,"squadEdit.stat.hp":`HP`,"squadEdit.stat.dps":`DPS`,"squadEdit.stat.range":`Range`,"squadEdit.stat.speed":`Speed`,"squadEdit.stat.arrow":`弓耐性`,"squadEdit.tool.paint":`配置`,"squadEdit.tool.erase":`消去`,"squadEdit.tool.select":`選択`,"squadEdit.changeType":`兵種変更`,"squadEdit.rotate":`向き`,"squadEdit.lock":`向きLOCK`,"squadEdit.lock.on":`LOCK中`,"squadEdit.lock.off":`LOCKなし`,"squadEdit.costOver":`コスト上限（{max}）を超えるため配置できません`,"squadEdit.costOverType":`コスト上限（{max}）を超えるため変更できない兵がいます`,"squadEdit.emptyWarn":`兵が配置されていないため保存できません`,"squadEdit.front":`▲ 正面（FRONT）`,"squadEdit.help":`兵種を選び、マスをなぞって配置します
「消去」に切り替えてなぞると消せます
「選択」に切り替えてなぞると選べます（選んだ兵は下のボタンで回転・LOCK）
「配置」中は、置いた兵をドラッグで移動・入れ替えできます
グリッドの外へ出すと、その兵を削除します
PC: 右ドラッグで消去、中ドラッグで選択`,"squadEdit.deleteConfirm":`この部隊を削除しますか？`,"squadEdit.deleteUsedWarn":`この部隊は軍で使用されています: {names}。削除すると該当枠は空になります。`,"armyList.title":`軍一覧`,"armyList.count":`{n} / {max} 軍`,"armyList.full":`軍はこれ以上作成できません（最大{max}）`,"armyList.squadCount":`{n} / {slots} 部隊`,"armyList.noStrategist":`⚠ 軍師未配置`,"armyEdit.title":`軍編成`,"armyEdit.name":`軍名`,"armyEdit.defaultName":`{name}軍`,"armyEdit.nameRequired":`軍名を入力してください`,"armyEdit.formationHint":`上の部隊カードで、置く部隊を選びます
空きマスをタップ、またはなぞって配置します
駒はドラッグで移動・入れ替え、盤の外へ出すと軍から外れます
駒をタップすると、その部隊の配置図が「軍師の配置」に出ます
「消去」に切り替えてなぞると、駒を軍から外します`,"armyEdit.tool.place":`配置`,"armyEdit.tool.erase":`消去`,"armyEdit.strategist.section":`軍師の配置`,"armyEdit.slotsFull":`配置できる部隊は{max}までです`,"armyEdit.strategist":`軍師`,"armyEdit.strategist.cellHint":`軍師を立たせる空きセルをタップしてください（他のユニットと同じセルには置けません）`,"armyEdit.strategist.pickSquad":`盤上の部隊をタップすると、その部隊の配置図が出ます`,"armyEdit.strategist.none":`軍師がどの部隊にも配置されていません`,"armyEdit.noSquads":`部隊がありません。先に部隊を作成してください。`,"armyEdit.emptyWarn":`部隊が1つも配置されていないため保存できません`,"armyEdit.deleteConfirm":`この軍を削除しますか？`,"unit.strategist":`軍師`,"unit.inf_shield":`歩兵(盾)`,"unit.inf_sword":`歩兵(剣)`,"unit.inf_spear":`歩兵(槍)`,"unit.inf_bow":`歩兵(弓)`,"unit.cav_sword":`騎兵(剣)`,"unit.cav_bow":`騎兵(弓)`,"unit.short.strategist":`軍`,"unit.short.inf_shield":`盾`,"unit.short.inf_sword":`剣`,"unit.short.inf_spear":`槍`,"unit.short.inf_bow":`弓`,"unit.short.cav_sword":`剣`,"unit.short.cav_bow":`弓`,"preset.wedge":`楔形陣`,"preset.phalanx":`ファランクス`,"preset.testudo":`亀甲陣`,"preset.shieldwall":`盾壁`,"preset.line":`横隊`,"preset.column":`縦隊`,"preset.square":`方陣`,"preset.crescent":`三日月形陣`,"preset.rhombus":`菱形陣`,"preset.echelon":`雁行陣`,"preset.cantabrian":`カンタブリア円陣`,"preset.defaultArmy":`デフォルト軍`,"tutorial.armyName":`チュートリアル`,"single.title":`SINGLE PLAY`,"single.selectArmy":`出撃する軍を選んでください（軍師配置済みの軍のみ）`,"single.notReady":`出撃不可（部隊または軍師が未設定）`,"single.enemyNote":`対戦相手: プリセット陣形からランダム編成されたAI軍`,"single.start":`出撃`,"single.players":`対戦人数`,"single.duration":`制限時間(秒)`,"single.moveSpeed":`移動速度倍率`,"single.mode":`形式`,"mode.ffa":`FFA（個人戦）`,"mode.team":`2v2 チーム戦`,"battle.you":`自軍`,"battle.ally":`味方軍`,"battle.enemyN":`敵軍{n}`,"battle.enemy":`敵軍`,"battle.exit":`退却`,"battle.exitConfirm":`マッチを放棄してTOPに戻りますか？`,"battle.hint":`自分の部隊をタッチ→スワイプで移動先を指定。空白ドラッグで画面移動、ピンチ/ホイールで拡大縮小`,"battle.vs":`VS`,"battle.go":`開戦！`,"battle.decided":`決着！`,"battle.eliminated":`{name}軍が敗北！`,"battle.squadWiped":`{army}軍の{squad}部隊が壊滅`,"battle.result.victory":`勝利！`,"battle.result.defeat":`敗北…`,"battle.result.draw":`引き分け`,"battle.result.strategist":`軍師が討たれ、勝敗が決した。`,"battle.result.lastman":`最後まで軍師が生き残った。`,"battle.result.timeup":`時間切れ`,"battle.result.counts":`生存数`,"battle.result.title":`リザルト`,"battle.result.winner":`勝者`,"battle.result.alive":`生存数`,"battle.result.kills":`撃破数`,"battle.returnTop":`TOPへ戻る`,"multi.title":`MULTI PLAY`,"multi.random":`ランダムマッチ`,"multi.random.desc":`オンラインの対戦相手を自動で探す`,"multi.host":`部屋を作る（ホスト）`,"multi.host.desc":`ルームコードを発行して対戦相手を待つ`,"multi.join":`コードで参加`,"multi.join.desc":`ホストから聞いたルームコードで接続する`,"multi.roomCode":`ルームコード`,"multi.creating":`作成中…`,"multi.codeShare":`このコードを対戦相手に伝えてください（最大4人）`,"multi.codeInput":`ホストから聞いた6文字のルームコードを入力してください`,"multi.connect":`接続`,"multi.players":`参加者`,"multi.start":`開戦`,"multi.waitingHost":`接続しました。ホストの開戦を待っています…`,"multi.hostName":`HOST`,"multi.guestName":`GUEST`,"multi.aborted":`接続が切断されました。このマッチは無効です。`,"multi.searching":`対戦相手を探しています…`,"multi.randomWaiting":`対戦相手が来るのを待っています。相手が見つかると自動で合流します。`,"multi.errOffline":`オンライン機能に接続できませんでした。ランダムマッチは利用できません。ルームコードでの対戦をお試しください。`,"multi.errPeer":`接続に失敗しました。コードの確認、または時間をおいて再試行してください。（環境によっては接続できない場合があります）`},en:{"app.title":`Strategists’ War`,"top.playerName":`Player Name`,"app.backToPark":`Back to Home`,"top.single":`SINGLE PLAY`,"top.multi":`MULTI PLAY`,"top.formation":`FORMATION`,"top.single.desc":`Battle the AI (2-4 players)`,"top.multi.desc":`Jump into an online battle`,"top.formation.desc":`Edit squads and armies`,"top.howTo":`HOW TO PLAY`,"top.howTo.desc":`Learn the basics and tactics`,"top.lang":`Language`,"modal.notImplemented.title":`Coming Soon`,"modal.notImplemented.multi":`MULTI PLAY is under development. Please check back later.`,"modal.notImplemented.single":`SINGLE PLAY is under development. Meanwhile, build your squads and armies in FORMATION.`,"modal.close":`Close`,"common.back":`← Back`,"common.help":`Help`,"common.save":`Save`,"common.delete":`Delete`,"common.cancel":`Cancel`,"common.ok":`OK`,"common.on":`ON`,"common.off":`OFF`,"common.new":`New`,"common.name":`Name`,"howTo.title":`HOW TO PLAY`,"howTo.tab.basic":`Basics`,"howTo.tab.advanced":`Tactics`,"howTo.basic.step1.title":`Build a squad from units`,"howTo.basic.step1.body":`In FORMATION, open "Squad", choose unit types and place soldiers on the grid.

Six unit types are available — shield, sword, spear and bow infantry, plus sword and bow cavalry. Mix them freely and build the formation you like.

Each squad has a Cost limit of {maxCost} (infantry cost 1, cavalry cost 2).`,"howTo.basic.step1.imageAlt":`Placing soldiers on a grid to build a squad`,"howTo.basic.step2.title":`Build an army from squads`,"howTo.basic.step2.body":`Choose up to {slots} of your saved squads and place them in the army formation. You must assign the strategist to one of the squads.`,"howTo.basic.step2.note":`Soldiers in the strategist's squad get ×{hpMul} HP!`,"howTo.basic.step2.imageAlt":`Arranging squads into an army formation`,"howTo.basic.step3.title":`Swipe to move a squad`,"howTo.basic.step3.body":`Touch (or click) one of your squads, then swipe (or drag) to its destination. Soldiers keep formation while moving and attack enemies automatically.

End the swipe on an enemy squad to order a pursuit — your squad keeps chasing that target (marked by a red dashed ring).`,"howTo.basic.step3.imageAlt":`Swiping a squad to set its destination`,"howTo.basic.step4.title":`Defeat the enemy strategist to win`,"howTo.basic.step4.body":`Bring down the enemy strategist and you win. If time runs out, the side with more surviving soldiers wins.`,"howTo.basic.step4.imageAlt":`Battle scene illustrating victory by defeating the strategist or having more surviving soldiers`,"howTo.advanced.step1.title":`Strike the flank or rear`,"howTo.advanced.step1.body":`Attacks from the flank deal ×{side} damage; attacks from the rear deal ×{rear}. Maneuver around the enemy and attack from more than one side.`,"howTo.advanced.step1.imageAlt":`Tactical diagram showing flank and rear attacks`,"howTo.advanced.step2.title":`Break the line with a charge`,"howTo.advanced.step2.body":`Advance straight ahead for {chargeSec}+ seconds and the squad starts charging. The first blow of a charge hits far harder (up to ×{chargeMax}) and shoves the enemy line out of shape.

Bigger squads and faster soldiers charge harder; archers never charge.`,"howTo.advanced.step2.imageAlt":`A cavalry squad charging head-on and pushing back the enemy line`,"howTo.advanced.step3.title":`Make the most of archers`,"howTo.advanced.step3.body":`Archers shoot from a distance (range {range} cells), but how well the arrows land depends on the target. Cavalry take ×{cavArrow} damage, sword and spear infantry only ×{infArrow}, and shield infantry a mere ×{shieldArrow}.

Archers must stop and set before firing, so screen them with infantry in front.`,"howTo.advanced.step3.imageAlt":`Diagram showing how much arrows hurt cavalry, infantry and shield bearers`,"howTo.advanced.step4.title":`The strategist's squad and squad speed`,"howTo.advanced.step4.body":`Soldiers in the strategist's squad get ×{hpMul} HP, but the strategist walks at speed {strategistSpeed} — and a squad moves only as fast as its slowest soldier, so putting the strategist in a cavalry squad slows the whole squad down.

Lose the strategist and you lose the battle: keep that squad behind your infantry.`,"howTo.advanced.step4.imageAlt":`A strategist guarded inside a rear infantry squad, and a squad pacing itself to its slowest soldier`,"formation.title":`FORMATION`,"formation.squads":`Squads`,"formation.armies":`Armies`,"squadList.title":`Squads`,"squadList.count":`{n} / {max} squads`,"squadList.full":`Squad limit reached (max {max})`,"squadList.unitCount":`{n} units`,"squadList.usedBy":`Used by: {names}`,"squadEdit.title":`Edit Squad`,"squadEdit.name":`Squad Name`,"squadEdit.namePlaceholder":`Filled in when you place a soldier`,"squadEdit.defaultName":`{unit}`,"squadEdit.nameRequired":`Enter a squad name`,"squadEdit.cost":`Cost`,"squadEdit.stat.hp":`HP`,"squadEdit.stat.dps":`DPS`,"squadEdit.stat.range":`Range`,"squadEdit.stat.speed":`Speed`,"squadEdit.stat.arrow":`VS BOW`,"squadEdit.tool.paint":`Place`,"squadEdit.tool.erase":`Erase`,"squadEdit.tool.select":`Select`,"squadEdit.changeType":`Change type`,"squadEdit.rotate":`Facing`,"squadEdit.lock":`Facing LOCK`,"squadEdit.lock.on":`Locked`,"squadEdit.lock.off":`Unlocked`,"squadEdit.costOver":`Cannot place: squad cost limit ({max}) exceeded`,"squadEdit.costOverType":`Some units were not changed: cost limit ({max}) exceeded`,"squadEdit.emptyWarn":`Cannot save an empty squad`,"squadEdit.front":`▲ FRONT`,"squadEdit.help":`Pick a soldier type, then swipe over cells to place them
Switch to Erase and swipe to remove them
Switch to Select and swipe to select them (rotate or lock below)
While placing, drag a soldier to move or swap it
Drag one off the grid to delete it
PC: right-drag to erase, middle-drag to select`,"squadEdit.deleteConfirm":`Delete this squad?`,"squadEdit.deleteUsedWarn":`This squad is used by: {names}. Deleting it will leave those slots empty.`,"armyList.title":`Armies`,"armyList.count":`{n} / {max} armies`,"armyList.full":`Army limit reached (max {max})`,"armyList.squadCount":`{n} / {slots} squads`,"armyList.noStrategist":`⚠ No strategist`,"armyEdit.title":`Edit Army`,"armyEdit.name":`Army Name`,"armyEdit.defaultName":`{name}’s Army`,"armyEdit.nameRequired":`Enter an army name`,"armyEdit.formationHint":`Pick the squad to place from the cards above
Tap or swipe over empty cells to place it
Drag pieces to move or swap them; drag one off the board to remove it
Tap a piece to show its layout under Strategist Placement
Switch to Erase and swipe to take pieces out of the army`,"armyEdit.tool.place":`Place`,"armyEdit.tool.erase":`Erase`,"armyEdit.strategist.section":`Strategist Placement`,"armyEdit.slotsFull":`An army holds at most {max} squads`,"armyEdit.strategist":`Strategist`,"armyEdit.strategist.cellHint":`Tap an EMPTY cell to place the strategist (cannot share a cell with another unit)`,"armyEdit.strategist.pickSquad":`Tap a squad on the board to show its layout`,"armyEdit.strategist.none":`The strategist is not assigned to any squad`,"armyEdit.noSquads":`No squads yet. Create a squad first.`,"armyEdit.emptyWarn":`Cannot save an army with no squads`,"armyEdit.deleteConfirm":`Delete this army?`,"unit.strategist":`Strategist`,"unit.inf_shield":`Shieldbearer`,"unit.inf_sword":`Swordsman`,"unit.inf_spear":`Spearman`,"unit.inf_bow":`Archer`,"unit.cav_sword":`Cavalry (Sword)`,"unit.cav_bow":`Horse Archer`,"unit.short.strategist":`G`,"unit.short.inf_shield":`D`,"unit.short.inf_sword":`S`,"unit.short.inf_spear":`L`,"unit.short.inf_bow":`B`,"unit.short.cav_sword":`S`,"unit.short.cav_bow":`B`,"preset.wedge":`Wedge`,"preset.phalanx":`Phalanx`,"preset.testudo":`Testudo`,"preset.shieldwall":`Shieldwall`,"preset.line":`Line`,"preset.column":`Column`,"preset.square":`Square`,"preset.crescent":`Crescent`,"preset.rhombus":`Rhomboid`,"preset.echelon":`Echelon`,"preset.cantabrian":`Cantabrian`,"preset.defaultArmy":`1st Army`,"tutorial.armyName":`Tutorial`,"single.title":`SINGLE PLAY`,"single.selectArmy":`Choose an army to deploy (armies with a strategist only)`,"single.notReady":`Not ready (missing squads or strategist)`,"single.enemyNote":`Opponents: AI armies randomly built from formation presets`,"single.start":`Deploy`,"single.players":`Players`,"single.duration":`Time Limit (sec)`,"single.moveSpeed":`Move Speed Multiplier`,"single.mode":`Mode`,"mode.ffa":`FFA`,"mode.team":`2v2 Teams`,"battle.you":`Your Army`,"battle.ally":`Ally`,"battle.enemyN":`Enemy {n}`,"battle.enemy":`Enemy`,"battle.exit":`Retreat`,"battle.exitConfirm":`Abandon the match and return to TOP?`,"battle.hint":`Touch one of your squads, then swipe to set its destination. Drag empty ground to pan; pinch or scroll to zoom`,"battle.vs":`VS`,"battle.go":`BATTLE!`,"battle.decided":`DECIDED!`,"battle.eliminated":`{name} is defeated!`,"battle.squadWiped":`{army}’s {squad} squad was wiped out`,"battle.result.victory":`Victory!`,"battle.result.defeat":`Defeat...`,"battle.result.draw":`Draw`,"battle.result.strategist":`The strategist has fallen. The battle is decided.`,"battle.result.lastman":`The last strategist standing.`,"battle.result.timeup":`Time up`,"battle.result.counts":`Survivors`,"battle.result.title":`Result`,"battle.result.winner":`WINNER`,"battle.result.alive":`Survivors`,"battle.result.kills":`Defeated`,"battle.returnTop":`Back to TOP`,"multi.title":`MULTI PLAY`,"multi.random":`Random match`,"multi.random.desc":`Automatically find an online opponent`,"multi.host":`Create a room (Host)`,"multi.host.desc":`Get a room code and wait for opponents`,"multi.join":`Join with a code`,"multi.join.desc":`Connect using the host's room code`,"multi.roomCode":`Room code`,"multi.creating":`Creating...`,"multi.codeShare":`Share this code with your opponents (up to 4 players)`,"multi.codeInput":`Enter the 6-letter room code from the host`,"multi.connect":`Connect`,"multi.players":`Players`,"multi.start":`Start battle`,"multi.waitingHost":`Connected. Waiting for the host to start...`,"multi.hostName":`HOST`,"multi.guestName":`GUEST`,"multi.aborted":`Connection lost. This match is void.`,"multi.searching":`Looking for an opponent...`,"multi.randomWaiting":`Waiting for an opponent. They will join automatically once found.`,"multi.errOffline":`Could not reach the online service. Random match is unavailable - try playing with a room code instead.`,"multi.errPeer":`Failed to connect. Check the code or try again later. (Some networks cannot connect.)`}};function F(e,t,n){let r=P[e][t]??t;if(n)for(let[e,t]of Object.entries(n))r=r.replaceAll(`{${e}}`,String(t));return r}function ne(){return x()}var re=N.formation.squadGridSize,I=N.formation.armyGridSize,L=[`wedge`,`phalanx`,`testudo`,`shieldwall`,`line`,`column`,`square`,`crescent`,`rhombus`,`echelon`,`cantabrian`],ie=e=>(t,n,r,i=0,a=!1)=>({cell:t*e+n,type:r,angle:i,locked:a});function ae(e,t,n,r,i,a,o){let s=[];for(let c=t;c<=r;c++)for(let l=n;l<=i;l++){let u=c===t,d=c===r,f=l===n,p=l===i;if(!u&&!d&&!f&&!p)continue;let m=0;m=u&&f?315:u&&p?45:d&&f?225:d&&p?135:u?0:d?180:f?270:90,s.push(e(c,l,a,m,o))}return s}function oe(e,t,n,r,i,a){let o=[];for(let s=t;s<t+r;s++)for(let t=n;t<n+i;t++)o.push(e(s,t,a));return o}function se(e,t,n,r,i=0,a=!1){return Array.from({length:n},(n,o)=>e(t,o,r,i,a))}function ce(e,t,n,r,i){let a=(n-r)%2==1?2:1;return Array.from({length:r},(o,s)=>e(t,Math.round((n-1)/2+(s-(r-1)/2)*a),i))}function le(e,t){if(e.length===0)return e;let n=e.map(e=>Math.floor(e.cell/t)),r=e.map(e=>e.cell%t),i=Math.floor((t-(Math.max(...n)-Math.min(...n)+1))/2)-Math.min(...n),a=Math.floor((t-(Math.max(...r)-Math.min(...r)+1))/2)-Math.min(...r);return e.map(e=>({...e,cell:(Math.floor(e.cell/t)+i)*t+e.cell%t+a}))}function ue(e,t=re){return le(de(e,t),t)}function de(e,t){let n=ie(t),r=Math.min(10,t);switch(e){case`wedge`:{let e=[n(0,3,`cav_sword`),n(0,4,`cav_sword`),n(0,5,`cav_sword`),n(0,6,`cav_sword`)],t=[...oe(n,1,2,1,6,`inf_spear`),...oe(n,2,3,1,4,`inf_spear`),...oe(n,3,4,1,2,`inf_spear`)];return[...e,...t]}case`phalanx`:return oe(n,2,2,4,5,`inf_spear`);case`testudo`:return[...ae(n,3,3,7,7,`inf_shield`,!0),n(4,5,`inf_spear`),n(5,4,`inf_spear`),n(5,6,`inf_spear`),n(6,5,`inf_spear`)];case`shieldwall`:return[...se(n,4,r,`inf_shield`,0,!0),...se(n,5,r,`inf_spear`),...ce(n,6,r,20-2*r,`inf_spear`)];case`line`:return[...se(n,4,r,`inf_sword`),...se(n,5,r,`inf_bow`),...ce(n,6,r,20-2*r,`inf_bow`)];case`column`:return oe(n,0,3,5,4,`inf_spear`);case`square`:return[...ae(n,2,2,6,6,`inf_spear`,!1),n(3,4,`inf_bow`),n(4,3,`inf_bow`),n(4,5,`inf_bow`),n(5,4,`inf_bow`)];case`rhombus`:return[n(0,4,`cav_sword`),n(1,3,`cav_sword`),n(1,5,`cav_sword`),n(2,2,`cav_sword`),n(2,4,`cav_sword`),n(2,6,`cav_sword`),n(3,3,`cav_sword`),n(3,4,`cav_sword`),n(3,5,`cav_sword`),n(4,4,`cav_sword`)];case`echelon`:return[0,1,2,3,4].flatMap(e=>[n(e,e,`cav_sword`),n(e,e+1,`cav_sword`)]);case`cantabrian`:return[n(0,1,`cav_bow`,315,!0),n(0,2,`cav_bow`,0,!0),n(0,3,`cav_bow`,45,!0),n(1,0,`cav_bow`,270,!0),n(1,4,`cav_bow`,90,!0),n(2,0,`cav_bow`,270,!0),n(2,4,`cav_bow`,90,!0),n(3,1,`cav_bow`,225,!0),n(3,2,`cav_bow`,180,!0),n(3,3,`cav_bow`,135,!0)];case`crescent`:{let e=Array.from({length:r},(e,t)=>Math.min(4,1+Math.min(t,r-1-t))),t=e.map((e,t)=>n(e,t,`inf_sword`));t.push(n(2,0,`inf_sword`),n(2,r-1,`inf_sword`));let i=Array.from({length:r-2},(e,t)=>t+1).sort((e,t)=>Math.abs(e-(r-1)/2)-Math.abs(t-(r-1)/2)),a=20-t.length,o=i.slice(0,a).map(t=>n(e[t]+1,t,`inf_bow`)),s=a-i.length;for(let e=0;e<s;e++)o.push(n(6,Math.round((r-1)/2+(e-(s-1)/2)*2),`inf_bow`));return[...t,...o]}}}function fe(e){if(e.length===0)return null;let t=re,n=new Set(e.map(e=>e.cell)),r=e.reduce((e,n)=>e+n.cell%t,0)/e.length,i=e.reduce((e,n)=>e+Math.floor(n.cell/t),0)/e.length,a=null,o=1/0;for(let e=0;e<t*t;e++){if(n.has(e))continue;let s=(e%t-r)**2+(Math.floor(e/t)-i)**2;s<o&&(o=s,a=e)}return a}var pe=[[1,0],[2,3],[3,3],[3,5],[3,1],[2,0],[4,3],[1,3],[2,2],[2,4]],me=[`rhombus`,`phalanx`,`testudo`,`line`,`line`,`column`,`square`,`wedge`,`shieldwall`,`shieldwall`];function he(){return pe.map(([e,t])=>e*I+t)}function ge(e){return L.map((t,n)=>({id:`preset-${t}-${n}`,name:F(e,`preset.${t}`),units:ue(t)}))}var _e=`rts.savedata`,R=N;function ve(e){return e.slice(0,16)}function z(e,t,n,r){let i=F(e,t,{[n]:r});if(i.length<=16)return i;let a=r.slice(0,Math.max(1,r.length-(i.length-16)));return ve(F(e,t,{[n]:a}))}var ye=/^preset-([a-z]+)-\d+$/,be=`army-default`;function xe(e,t,n){if(t===n)return;let r=(e,r)=>e===F(t,r)?ve(F(n,r)):e;for(let t of e.squads){let e=ye.exec(t.id);e&&(t.name=r(t.name,`preset.${e[1]}`))}for(let t of e.armies)t.id===be&&(t.name=r(t.name,`preset.defaultArmy`))}function B(e){return e.units.reduce((e,t)=>e+(R.unitTypes[t.type]?.cost??0),0)}function Se(){let e=ne(),t=ge(e),n=e=>t[L.indexOf(e)]?.id??null,r=t[L.indexOf(me[6])],i=r?fe(r.units):null;return{schemaVersion:4,squads:t,armies:[{id:`army-default`,name:F(e,`preset.defaultArmy`),slots:me.map(n),slotCells:he(),strategistSlot:6,strategistCell:i}],settings:{lang:e,playerName:`Player`}}}function V(e){if(typeof e!=`object`||!e)return!1;let t=e,n=t.schemaVersion;return(n===1||n===2||n===3||n===4)&&Array.isArray(t.squads)&&Array.isArray(t.armies)&&typeof t.settings==`object`&&t.settings!==null&&(t.settings.lang===`ja`||t.settings.lang===`en`)}var H=11;function Ce(e){let t=H,n=new Map;for(let r of e.squads){let e=r.units.map(e=>Math.floor(e.cell/10)),i=r.units.map(e=>e.cell%10),a=r.units.length===0?0:Math.floor((t-(Math.max(...e)-Math.min(...e)+1))/2)-Math.min(...e),o=r.units.length===0?0:Math.floor((t-(Math.max(...i)-Math.min(...i)+1))/2)-Math.min(...i);n.set(r.id,{dr:a,dc:o}),r.units=r.units.map(e=>({...e,cell:(Math.floor(e.cell/10)+a)*t+e.cell%10+o}))}for(let r of e.armies){if(r.strategistSlot!==null&&typeof r.strategistCell==`number`){let e=r.slots[r.strategistSlot],i=e?n.get(e):void 0;if(i){let e=Math.floor(r.strategistCell/10)+i.dr,n=r.strategistCell%10+i.dc;r.strategistCell=e>=0&&e<t&&n>=0&&n<t?e*t+n:null}else r.strategistCell=null}let e=Array.isArray(r.slotCells)?r.slotCells:[],i=e.filter(e=>typeof e==`number`),a=i.length?i.reduce((e,t)=>e+t%10,0)/i.length:4.5,o=i.length?i.reduce((e,t)=>e+Math.floor(t/10),0)/i.length:4.5,s=new Set,c=he();r.slotCells=Array.from({length:10},(t,n)=>{let r=e[n],i=Math.floor(I/2),l=typeof r==`number`?Math.round(i+Math.floor(r/10)-o):Math.floor(c[n]/I),u=typeof r==`number`?Math.round(i+r%10-a):c[n]%I;l=Math.max(0,Math.min(I-1,l)),u=Math.max(0,Math.min(I-1,u));let d=l*I+u;if(s.has(d)){let e=-1,t=1/0;for(let n=0;n<I*I;n++){if(s.has(n))continue;let r=(n%I-u)**2+(Math.floor(n/I)-l)**2;r<t&&(t=r,e=n)}d=e}return s.add(d),d})}e.schemaVersion=2}function we(e,t){if(e.length===0)return``;let n=e.map(e=>Math.floor(e.cell/t)),r=e.map(e=>e.cell%t),i=Math.min(...n),a=Math.min(...r);return e.map(e=>`${Math.floor(e.cell/t)-i},${e.cell%t-a},${e.type},${e.angle},${+!!e.locked}`).sort().join(`|`)}function Te(e){let t=H,n=re,r=new Map;for(let i of e.squads){let e=ye.exec(i.id)?.[1];if(e&&L.includes(e)&&we(i.units,t)===we(ue(e,t),t)){i.units=ue(e,n),r.set(i.id,null);continue}if(i.units.length===0){r.set(i.id,{dr:0,dc:0});continue}let a=i.units.map(e=>Math.floor(e.cell/t)),o=i.units.map(e=>e.cell%t),s=Math.floor((n-(Math.max(...a)-Math.min(...a)+1))/2)-Math.min(...a),c=Math.floor((n-(Math.max(...o)-Math.min(...o)+1))/2)-Math.min(...o);r.set(i.id,{dr:s,dc:c});let l=new Set,u=[],d=[];for(let e of i.units){let r=Math.floor(e.cell/t)+s,i=e.cell%t+c;r>=0&&r<n&&i>=0&&i<n&&!l.has(r*n+i)?(l.add(r*n+i),u.push({...e,cell:r*n+i})):d.push(e)}for(let e of d){let r=Math.max(0,Math.min(n-1,Math.floor(e.cell/t)+s)),i=Math.max(0,Math.min(n-1,e.cell%t+c)),a=-1,o=1/0;for(let e=0;e<n*n;e++){if(l.has(e))continue;let t=(e%n-i)**2+(Math.floor(e/n)-r)**2;t<o&&(o=t,a=e)}a<0||(l.add(a),u.push({...e,cell:a}))}i.units=u}for(let i of e.armies){if(i.strategistSlot===null||typeof i.strategistCell!=`number`)continue;let a=i.slots[i.strategistSlot],o=a?e.squads.find(e=>e.id===a):void 0,s=a?r.get(a):void 0;if(!o){i.strategistCell=null;continue}let c=null;if(s){let e=Math.floor(i.strategistCell/t)+s.dr,r=i.strategistCell%t+s.dc;e>=0&&e<n&&r>=0&&r<n&&!o.units.some(t=>t.cell===e*n+r)&&(c=e*n+r)}i.strategistCell=c??fe(o.units)}let i=new Set(e.squads.map(e=>ye.exec(e.id)?.[1]).filter(e=>!!e));L.forEach((t,r)=>{i.has(t)||e.squads.length>=N.formation.maxSquads||e.squads.push({id:`preset-${t}-${r}`,name:ve(F(e.settings.lang,`preset.${t}`)),units:ue(t,n)})}),e.schemaVersion=3}var Ee={cav_spear:`cav_sword`};function De(e){for(let t of e.squads)t.units=t.units.map(e=>{let t=Ee[e.type];return t?{...e,type:t}:e});e.schemaVersion=4}function Oe(){try{let e=y(_e);if(e){let t=JSON.parse(e);if(V(t)){(typeof t.settings.playerName!=`string`||t.settings.playerName===``)&&(t.settings.playerName=`Player`),t.schemaVersion===1&&Ce(t),t.schemaVersion===2&&Te(t),t.schemaVersion===3&&De(t);for(let e of t.armies)(!Array.isArray(e.slotCells)||e.slotCells.length!==10)&&(e.slotCells=he());let e=S();return e&&(xe(t,t.settings.lang,e),t.settings.lang=e),t.settings.playerName=ve(t.settings.playerName),t.squads=t.squads.map(e=>({...e,name:ve(typeof e.name==`string`?e.name:``)})),t.armies=t.armies.map(e=>({...e,name:ve(typeof e.name==`string`?e.name:``)})),t}}}catch{}return Se()}var U=Oe(),ke=new Set;Ae(),p(()=>{U=Oe(),je()});function Ae(){d(_e,JSON.stringify(U))}function je(){Ae();for(let e of ke)e()}function Me(e){return ke.add(e),()=>ke.delete(e)}function Ne(){return U}function Pe(){return(0,M.useSyncExternalStore)(Me,Ne)}function Fe(e){let t={...U,squads:U.squads.map(e=>({...e})),armies:U.armies.map(e=>({...e})),settings:{...U.settings,lang:e}};xe(t,U.settings.lang,e),U=t,b(e),je()}function Ie(e){U={...U,settings:{...U.settings,playerName:ve(e)}},je()}function Le(){return U.settings.playerName.trim()||`Player`}var Re=0;function ze(e){return Re+=1,`${e}-${Date.now().toString(36)}-${Re}`}function Be(e){let t=U.squads.some(t=>t.id===e.id);return!t&&U.squads.length>=R.formation.maxSquads?!1:(U={...U,squads:t?U.squads.map(t=>t.id===e.id?{...e,name:ve(e.name)}:t):[...U.squads,{...e,name:ve(e.name)}]},je(),!0)}function Ve(e){U={...U,squads:U.squads.filter(t=>t.id!==e),armies:U.armies.map(t=>{if(!t.slots.includes(e))return t;let n=t.slots.map(t=>t===e?null:t),r=t.strategistSlot!==null&&t.slots[t.strategistSlot]===e;return{...t,slots:n,strategistSlot:r?null:t.strategistSlot,strategistCell:r?null:t.strategistCell}})},je()}function He(e){return U.armies.filter(t=>t.slots.includes(e))}function Ue(e){let t=U.armies.some(t=>t.id===e.id);return!t&&U.armies.length>=R.formation.maxArmies?!1:(U={...U,armies:t?U.armies.map(t=>t.id===e.id?{...e,name:ve(e.name)}:t):[...U.armies,{...e,name:ve(e.name)}]},je(),!0)}function We(){U={...U,squads:U.squads.filter(e=>!e.id.startsWith(`preset-line-`)),armies:U.armies.filter(e=>e.id!==`army-default`)},je()}function Ge(e){U={...U,armies:U.armies.filter(t=>t.id!==e)},je()}var W=a(),Ke=N.formation.squadGridSize;function qe({children:e,className:t=``}){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`div`,{className:`rts-screen-head${t?` ${t}`:``}`,children:e}),(0,W.jsx)(`div`,{className:`rts-screen-divider`,"aria-hidden":`true`})]})}var Je={strategist:`#d9a94e`,inf_shield:`#7b96bd`,inf_sword:`#c99a3f`,inf_spear:`#7da05a`,inf_bow:`#5c7fc0`,cav_sword:`#c99a3f`,cav_bow:`#5c7fc0`};function Ye(e){return e.startsWith(`cav_`)}function Xe({type:e}){let t=e.replace(`inf_`,``).replace(`cav_`,``),n={width:`68%`,height:`68%`,viewBox:`0 0 24 24`,"aria-hidden":!0};return t===`shield`?(0,W.jsxs)(`svg`,{...n,children:[(0,W.jsx)(`path`,{d:`M12 3 L19 5.5 V12 C19 16.8 15.6 19.8 12 21 C8.4 19.8 5 16.8 5 12 V5.5 Z`,fill:`currentColor`}),(0,W.jsx)(`path`,{d:`M12 6 V18`,stroke:`#00000055`,strokeWidth:`1.6`,fill:`none`})]}):t===`sword`?(0,W.jsxs)(`svg`,{...n,children:[(0,W.jsx)(`path`,{d:`M12 2.5 L14 5 V13.5 H10 V5 Z`,fill:`currentColor`}),(0,W.jsx)(`rect`,{x:`7.5`,y:`13.5`,width:`9`,height:`2.4`,rx:`1`,fill:`currentColor`}),(0,W.jsx)(`rect`,{x:`10.9`,y:`15.9`,width:`2.2`,height:`4.2`,fill:`currentColor`}),(0,W.jsx)(`circle`,{cx:`12`,cy:`21.2`,r:`1.5`,fill:`currentColor`})]}):t===`spear`?(0,W.jsxs)(`svg`,{...n,children:[(0,W.jsx)(`path`,{d:`M12 2 L15 9 H9 Z`,fill:`currentColor`}),(0,W.jsx)(`rect`,{x:`10.9`,y:`9`,width:`2.2`,height:`13`,fill:`currentColor`})]}):(0,W.jsxs)(`svg`,{...n,children:[(0,W.jsx)(`path`,{d:`M8 3 C 16.5 7 16.5 17 8 21`,stroke:`currentColor`,strokeWidth:`2.2`,fill:`none`,strokeLinecap:`round`}),(0,W.jsx)(`path`,{d:`M8 3 L8 21`,stroke:`currentColor`,strokeWidth:`1.2`,fill:`none`}),(0,W.jsx)(`path`,{d:`M8 12 H18 M18 12 L14.8 9.6 M18 12 L14.8 14.4`,stroke:`currentColor`,strokeWidth:`1.8`,fill:`none`,strokeLinecap:`round`})]})}var Ze=[`inf_shield`,`inf_sword`,`inf_spear`,`inf_bow`,`cav_sword`,`cav_bow`];function Qe({units:e,label:t}){let n=Ze.filter(t=>e.some(e=>e.type===t));return n.length===0?null:(0,W.jsx)(`span`,{className:`rts-type-icons`,children:n.map(e=>(0,W.jsx)(`span`,{className:`rts-chip${Ye(e)?` cav`:``}`,style:{background:Je[e]},role:`img`,"aria-label":t?.(e),title:t?.(e),children:(0,W.jsx)(Xe,{type:e})},e))})}function $e({units:e}){return(0,W.jsx)(`svg`,{viewBox:`0 0 ${Ke} ${Ke}`,width:`88%`,height:`88%`,"aria-hidden":!0,children:e.map((e,t)=>(0,W.jsx)(`rect`,{x:e.cell%Ke+.1,y:Math.floor(e.cell/Ke)+.1,width:.8,height:.8,rx:.28,fill:Je[e.type]},t))})}function et({front:e,help:t,helpLabel:n,style:r}){let[i,a]=(0,M.useState)(!1),o=(0,M.useRef)(null);return(0,M.useEffect)(()=>{if(!i)return;let e=e=>{o.current?.contains(e.target)||a(!1)};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[i]),(0,W.jsxs)(`div`,{className:`rts-front-row`,style:r,ref:o,children:[(0,W.jsx)(`span`,{className:`rts-grid-front`,children:e}),(0,W.jsx)(`button`,{type:`button`,className:`rts-help-btn`,"aria-label":n,"aria-expanded":i,onPointerEnter:e=>{e.pointerType===`mouse`&&a(!0)},onPointerLeave:e=>{e.pointerType===`mouse`&&a(!1)},onPointerUp:e=>{e.pointerType!==`mouse`&&a(e=>!e)},onClick:e=>{e.detail===0&&a(e=>!e)},children:`?`}),i&&(0,W.jsx)(`ul`,{className:`rts-help-pop`,role:`tooltip`,children:t.split(`
`).map((e,t)=>(0,W.jsx)(`li`,{children:e},t))})]})}function tt(){let[e,t]=(0,M.useState)(null),n=(0,M.useRef)(null);(0,M.useEffect)(()=>()=>{n.current!==null&&clearTimeout(n.current)},[]);let r=(0,M.useCallback)(e=>{t(e),n.current!==null&&clearTimeout(n.current),n.current=window.setTimeout(()=>t(null),2600)},[]);return[e?(0,W.jsx)(`div`,{className:`rts-toast`,role:`status`,children:e}):null,r]}function nt({title:e,children:t,actions:n}){return(0,W.jsx)(`div`,{className:`rts-modal-backdrop`,children:(0,W.jsxs)(`div`,{className:`rts-modal`,children:[(0,W.jsx)(`h3`,{children:e}),(0,W.jsx)(`p`,{children:t}),(0,W.jsx)(`div`,{className:`rts-actions`,children:n})]})})}var rt=`rts.tutorial`,it={step:0,done:!1,started:!1};function at(){try{let e=y(rt);if(!e)return it;let t=JSON.parse(e);if(typeof t!=`object`||!t)return it;let n=t;return{step:typeof n.step==`number`&&n.step>=0?Math.floor(n.step):0,done:n.done===!0,started:n.started===!0}}catch{return it}}var ot=at(),st={screen:`top`},ct=new Set;function lt(){for(let e of ct)e()}function ut(){try{d(rt,JSON.stringify(ot))}catch{}}function dt(e){if(JSON.stringify(e)===JSON.stringify(st))return;st=e;let t=window;t.__rtsDebug&&(t.__rtsTutorial=e),lt()}function ft(){return st}function pt(e){return ct.add(e),()=>{ct.delete(e)}}function mt(){return(0,M.useSyncExternalStore)(e=>pt(e),()=>gt(),()=>gt())}var ht={snapshot:st,progress:ot};function gt(){return(ht.snapshot!==st||ht.progress!==ot)&&(ht={snapshot:st,progress:ot}),ht}function _t(){return ot}function vt(){return!ot.started&&!ot.done}function yt(){ot={step:0,done:!1,started:!0},ut(),lt()}function bt(e){ot.done||e<=ot.step||(ot={...ot,step:e,started:!0},ut(),lt())}function xt(){ot.done||(ot={...ot,done:!0,started:!0},ut(),lt())}var St=null;function Ct(e){St=e}function wt(e){return e.length===0||!St?[]:St(e)}function Tt(){if(ot.done)return!1;let e=Et[ot.step];return e!==void 0&&e.screen===`battle`&&e.advance===`tap`}var Et=[];function Dt(e){Et=e}var Ot={_note:`初回チュートリアルの文言。進行順・ハイライト対象・待ち条件は src/strategists-war/tutorial/steps.ts が持つ。ここは文言だけを編集する。`,ui:{skip:{ja:`スキップ`,en:`Skip`},tapToContinue:{ja:`タップで次へ`,en:`Tap to continue`},waiting:{ja:`操作してください`,en:`Your turn`}},steps:{formationIntro:{ja:`戦の為の軍を作るには、まず部隊の編成が必要になる。`,en:`To raise an army, you must first form a squad.`},squadNew:{ja:`新しい部隊の編成を作るのだ`,en:`Create a new squad formation.`},placeSwordIntro:{ja:`まずは一般的な剣歩兵を配置する。`,en:`We begin with plain swordsmen.`},placeSword:{ja:`盤面の明るいところをなぞってみよ`,en:`Trace the lit cells on the board.`},palette:{ja:`組み合わせる兵の種類は重要だ。慎重に検討しよう`,en:`The mix of soldier types matters. Choose with care.`},selectBow:{ja:`剣歩兵の後ろに弓兵を並べ、援護させよう`,en:`Line archers up behind the swordsmen to support them.`},placeBow:{ja:`いま選択した弓兵を配置する。盤面の明るいところをなぞってみよ`,en:`Now place those archers. Trace the lit cells on the board.`},cost:{ja:`１部隊には20コストまで配置可能だ。歩兵であればあと２つ配置できるので、このままでは不利になってしまう。`,en:`A squad holds up to 20 cost. Two more foot soldiers still fit — leaving them out would put you at a disadvantage.`},placeBowExtra:{ja:`ここにも弓兵を配置しよう`,en:`Place archers here as well.`},saveSquad:{ja:`この部隊はこれで良いな。保存を忘れないように`,en:`This squad will do. Don't forget to save it.`},backFromSquad:{ja:`部隊の編成はこれで終わりだ。戻るとしよう`,en:`That's the squad done. Let us head back.`},savedSquad:{ja:`作成した部隊はこのように保存され、いつでも編集可能だ。`,en:`Your squad is saved here, and you can edit it any time.`},squadList:{ja:`既に一般的な陣形は登録してあるので、活用するといい。`,en:`Common formations are already registered — put them to use.`},goArmies:{ja:`では部隊を組み合わせて、軍を編成するぞ`,en:`Now let us combine squads into an army.`},armyNew:{ja:`新しい軍の編成を作るのだ`,en:`Create a new army formation.`},pickTutorialSquad:{ja:`さきほど作成した部隊を配置しよう`,en:`Place the squad you just made.`},placeSquads:{ja:`自由に配置してみよ`,en:`Arrange them as you like.`},pickTestudo:{ja:`あとは、守備にたけた部隊がほしいな`,en:`We could also use a squad that excels at defence.`},placeTestudo:{ja:`自由に配置してみよ`,en:`Arrange it as you like.`},strategistIntro:{ja:`戦場には軍師も直接立ち、指示を出す必要がある`,en:`The strategist must stand on the field and give the orders.`},strategistPick:{ja:`この部隊を選択してみよ`,en:`Select this squad.`},strategistSquad:{ja:`今回は守備にたけた、この部隊に入ることにしよう`,en:`This time, join the squad that excels at defence.`},strategistCell:{ja:`この位置がいい`,en:`This spot will do.`},saveArmy:{ja:`この軍はこれで良いな。保存を忘れないように`,en:`This army will do. Don't forget to save it.`},backFromArmy:{ja:`軍の編成はこれで終わりだ。戻るとしよう`,en:`That's the army done. Let us head back.`},backToTop:{ja:`編成は済んだ。戻るとしよう`,en:`The formations are done. Let us head back.`},goSingle:{ja:`いよいよ戦だ`,en:`Now, to battle.`},startBattle:{ja:`さあ、この軍でさっそく出陣じゃ`,en:`Take this army and march out.`},battleOrder:{ja:`部隊に指示を出し、敵部隊を殲滅しよう`,en:`Give your squads orders and wipe out the enemy.`},battleSwipe:{ja:`自部隊をなぞって敵部隊に当てるのだ`,en:`Swipe from your squad onto the enemy squad.`},battleReinforce:{ja:`１部隊同士では心もとないな。援軍を送ろう`,en:`One squad alone is not enough. Send reinforcements.`},battleWiped:{ja:`うまく敵を殲滅できたな。`,en:`Well done — the enemy squad is gone.`},battleFlank:{ja:`余裕があるときは、敵部隊を横や後ろから攻撃すると、高い火力を見込めるぞ。`,en:`When you can, strike from the flank or the rear for far greater damage.`},battleStrategist:{ja:`あれが敵軍師のいる部隊だ。敵軍師を倒せば戦は終わる。`,en:`That squad holds the enemy strategist. Fell the strategist and the battle ends.`},battleStrategistOrder:{ja:`さあ、移動指示を出すのだ。`,en:`Now, give the order to advance.`},battleDone:{ja:`これが戦の一連の流れとなる。`,en:`That is the shape of a battle.`},battleOutro:{ja:`良き部隊を編成し、強き軍を編成して、戦に勝利するのだ`,en:`Build good squads, raise a strong army, and win your wars.`}}},kt=N.formation.squadGridSize,At=N.formation.armyGridSize,jt=4,Mt=5,Nt=6,Pt=Math.min(10,kt),Ft=[3,5],It=`preset-testudo-`,Lt=(e,t)=>t.map(t=>e*kt+t),Rt=e=>Lt(e,Array.from({length:Pt},(e,t)=>t)),zt=e=>`.rts-grid:not(.rts-army-grid) .rts-cell[data-cell="${e}"]`;function Bt(){let e=Ne().squads;return e.length>0?e[e.length-1].id:null}function Vt(){return Ne().squads.find(e=>e.id.startsWith(It))?.id??null}var Ht=e=>e?[`[data-squad="${e}"]`]:[],Ut=e=>e.squadEdit?.units??{},Wt=(e,t,n)=>t.every(t=>Ut(e)[t]===n),Gt=(e,t)=>t===null?0:Object.values(e.armyEdit?.pieces??{}).filter(e=>e===t).length,Kt=[{id:`formationIntro`,screen:`squads`,advance:`tap`},{id:`squadNew`,screen:`squads`,targets:[`[data-tut="squad-new"]`],advance:`wait`,done:e=>e.screen===`squadEdit`},{id:`placeSwordIntro`,screen:`squadEdit`,targets:[`.rts-grid:not(.rts-army-grid)`],advance:`tap`},{id:`placeSword`,screen:`squadEdit`,targets:Rt(jt).map(zt),advance:`wait`,done:e=>Wt(e,Rt(jt),`inf_sword`)},{id:`palette`,screen:`squadEdit`,targets:[`.rts-palette`],advance:`tap`},{id:`selectBow`,screen:`squadEdit`,targets:[`.rts-palette button[data-unit="inf_bow"]`],advance:`wait`,done:e=>e.squadEdit?.brush===`inf_bow`},{id:`placeBow`,screen:`squadEdit`,targets:Rt(Mt).map(zt),advance:`wait`,done:e=>Wt(e,Rt(Mt),`inf_bow`)},{id:`cost`,screen:`squadEdit`,targets:[`.rts-cost-bar`],advance:`tap`},{id:`placeBowExtra`,screen:`squadEdit`,targets:Lt(Nt,Ft).map(zt),advance:`wait`,done:e=>Wt(e,Lt(Nt,Ft),`inf_bow`)},{id:`saveSquad`,screen:`squadEdit`,targets:[`[data-tut="save"]`],advance:`wait`,done:e=>e.squadEdit?.saved===!0},{id:`backFromSquad`,screen:`squadEdit`,targets:[`[data-tut="back"]`],advance:`wait`,done:e=>e.screen===`squads`},{id:`savedSquad`,screen:`squads`,targets:()=>Ht(Bt()),advance:`tap`},{id:`squadList`,screen:`squads`,targets:[`[data-tut="squad-list"]`],advance:`tap`},{id:`goArmies`,screen:`squads`,targets:[`[data-tut="tab-armies"]`],advance:`wait`,done:e=>e.screen===`armies`},{id:`armyNew`,screen:`armies`,targets:[`[data-tut="army-new"]`],advance:`wait`,done:e=>e.screen===`armyEdit`},{id:`pickTutorialSquad`,screen:`armyEdit`,targets:()=>Ht(Bt()),advance:`wait`,done:e=>e.armyEdit?.brush===Bt()},{id:`placeSquads`,screen:`armyEdit`,targets:[`.rts-army-grid`,`.rts-cost-bar`],advance:`wait`,done:e=>Gt(e,Bt())>=9},{id:`pickTestudo`,screen:`armyEdit`,targets:()=>Ht(Vt()),advance:`wait`,done:e=>e.armyEdit?.brush===Vt()},{id:`placeTestudo`,screen:`armyEdit`,targets:[`.rts-army-grid`,`.rts-cost-bar`],advance:`wait`,done:e=>Gt(e,Vt())>=1},{id:`strategistIntro`,screen:`armyEdit`,advance:`tap`},{id:`strategistPick`,screen:`armyEdit`,targets:e=>{let t=Vt(),n=Object.entries(e.armyEdit?.pieces??{}).find(([,e])=>e===t)?.[0];return n===void 0?[`.rts-army-grid`]:[`.rts-army-grid .rts-cell[data-cell="${n}"]`]},advance:`wait`,done:e=>e.armyEdit?.selectedSquadId===Vt()},{id:`strategistSquad`,screen:`armyEdit`,targets:[`.rts-grid:not(.rts-army-grid)`],advance:`tap`},{id:`strategistCell`,screen:`armyEdit`,targets:[zt(Math.floor(kt/2)*kt+Math.floor(kt/2))],advance:`wait`,done:e=>e.armyEdit?.strategistSquadId===Vt()&&e.armyEdit?.strategistCell!==null},{id:`saveArmy`,screen:`armyEdit`,targets:[`[data-tut="save"]`],advance:`wait`,done:e=>e.armyEdit?.saved===!0},{id:`backFromArmy`,screen:`armyEdit`,targets:[`[data-tut="back"]`],advance:`wait`,done:e=>e.screen===`armies`},{id:`backToTop`,screen:`armies`,targets:[`[data-tut="back"]`],advance:`wait`,done:e=>e.screen===`top`},{id:`goSingle`,screen:`top`,targets:[`[data-tut="menu-single"]`],advance:`wait`,done:e=>e.screen===`single`},{id:`startBattle`,screen:`single`,targets:[`[data-tut="single-start"]`],advance:`wait`,done:e=>e.screen===`battle`},{id:`battleOrder`,screen:`battle`,advance:`tap`,battleTargets:e=>({mine:qt(e,1)})},{id:`battleSwipe`,screen:`battle`,advance:`wait`,battleTargets:e=>({mine:qt(e,1),enemies:Jt(e)===null?[]:[Jt(e)]}),done:e=>Yt(e,Jt(e)).length>=1},{id:`battleReinforce`,screen:`battle`,advance:`wait`,battleTargets:e=>({mine:qt(e,3),enemies:Jt(e)===null?[]:[Jt(e)]}),done:e=>Yt(e,Jt(e)).length>=3},{id:``,screen:`battle`,advance:`wait`,battleTargets:e=>({enemies:Jt(e)===null?[]:[Jt(e)]}),done:e=>Jt(e)===null},{id:`battleWiped`,screen:`battle`,advance:`tap`},{id:`battleFlank`,screen:`battle`,advance:`tap`},{id:`battleStrategist`,screen:`battle`,advance:`tap`,battleTargets:e=>({enemies:e.battle?.enemyStrategistSquad===null||e.battle?.enemyStrategistSquad===void 0?[]:[e.battle.enemyStrategistSquad]})},{id:`battleStrategistOrder`,screen:`battle`,advance:`wait`,battleTargets:e=>({mine:qt(e,3),enemies:e.battle?.enemyStrategistSquad==null?[]:[e.battle.enemyStrategistSquad]}),done:e=>Yt(e,e.battle?.enemyStrategistSquad??null).length>=3},{id:``,screen:`battle`,advance:`wait`,battleTargets:e=>{let t=e.battle?.enemyStrategistSquad??null,n=Yt(e,t);return{mine:n.length>0?n:qt(e,3),enemies:t===null?[]:[t]}},done:e=>e.battle?.enemyStrategistDead===!0||e.battle?.result===!0},{id:`battleDone`,screen:`battle`,advance:`tap`},{id:`battleOutro`,screen:`battle`,advance:`tap`}];Dt(Kt.map(e=>({screen:e.screen,advance:e.advance})));function qt(e,t){return Object.entries(e.battle?.mine??{}).filter(([,e])=>e>0).map(([e])=>Number(e)).slice(0,t)}function Jt(e){let t=e.battle?.enemyStrategistSquad??null,n=Object.entries(e.battle?.enemies??{}).find(([e,n])=>n>0&&Number(e)!==t)?.[0];return n===void 0?null:Number(n)}function Yt(e,t){return t===null?[]:e.battle?.attacking?.[t]??[]}function Xt(e,t,n){return e?.[t]??e?.ja??n}function Zt(e,t){if(e===``)return``;let n=Ot.steps;return Xt(n[e],t,e)}function Qt(e,t){let n=Ot.ui;return Xt(n[e],t,e)}function $t(e){let t=_t();if(t.done||!t.started)return``;let n=Kt[t.step];return n!==void 0&&(n.screen===`squadEdit`||n.id===`squadNew`)?F(e,`preset.line`):``}function en(e){let t=_t();if(t.done||!t.started)return null;let n=Kt[t.step];return n!==void 0&&(n.screen===`armyEdit`||n.id===`armyNew`)?ve(F(e,`tutorial.armyName`)):null}function tn(){let e=_t();if(e.done||!e.started)return!1;let t=Kt[e.step];return t!==void 0&&(t.screen===`battle`||t.id===`startBattle`)}function nn(){let e=_t();if(e.done||!e.started)return!1;let t=Kt[e.step];return t!==void 0&&(t.screen===`squadEdit`||t.screen===`armyEdit`)}var rn=1.5;function an(){let e=_t();if(e.done||!e.started)return null;let t=Kt[e.step];if(t===void 0||t.screen!==`battle`||t.battleTargets===void 0)return null;let n=t.battleTargets(ft());return{mine:n.mine??[],enemies:n.enemies??[]}}function on(){let e=_t();if(e.done||!e.started)return!1;let t=Kt[e.step];return t!==void 0&&(t.id===`battleOrder`||t.id===`battleSwipe`||t.id===`battleReinforce`)}Math.floor(At/2)*At+Math.floor(At/2);var sn=R.formation.squadGridSize,cn=R.formation.maxSquadCost,ln=R.formation.rotationStepDeg,un=[`inf_shield`,`inf_sword`,`inf_spear`,`inf_bow`,`cav_sword`,`cav_bow`];function dn(e){let t={};for(let n of e)t[n.cell]=n;return t}function fn(e){return B({units:Object.values(e)})}function pn(e){let t=Math.sign(e)*Math.round(Math.abs(e)*10)/10;return(Object.is(t,-0)?0:t).toString()}function mn(e){return`${Math.round((1-(e.arrowMul??1))*100)}%`}function hn(e,t){return t>0?1/t*e:0}function gn({lang:e,squadId:t,onBack:n}){let r=(t,n)=>F(e,t,n),i=t?Ne().squads.find(e=>e.id===t)??null:null,[a,o]=(0,M.useState)(i?.name??$t(e)),[s,c]=(0,M.useState)(!1),[l,u]=(0,M.useState)(!1),d=(0,M.useRef)(null),[f,p]=(0,M.useState)(()=>dn(i?.units??[])),[m,h]=(0,M.useState)(()=>new Set),[g,_]=(0,M.useState)(`paint`),[v,y]=(0,M.useState)(`inf_sword`),[b,x]=(0,M.useState)(!1),[S,C]=(0,M.useState)(null),[w,T]=tt(),E=(0,M.useRef)(null),D=(0,M.useRef)({active:!1,kind:`paint`,addSelect:!0,warned:!1,visited:new Set,sourceCell:null}),O=fn(f);(0,M.useEffect)(()=>{let e={};for(let t of Object.values(f))e[t.cell]=t.type;dt({screen:`squadEdit`,squadEdit:{units:e,brush:v,cost:O,saved:l}})},[f,v,O,l]);let k=(0,M.useMemo)(()=>[...m].filter(e=>f[e]),[m,f]);function A(t){if(D.current.visited.has(t))return;D.current.visited.add(t);let n=D.current.kind;if(n!==`move`){if(n===`toggle-select`){if(!f[t])return;h(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n})}else if(n===`paint`)a===``&&Object.keys(f).length===0&&o(z(e,`squadEdit.defaultName`,`unit`,r(`unit.${v}`))),p(e=>e[t]?e:fn(e)+R.unitTypes[v].cost>cn?(D.current.warned||(D.current.warned=!0,T(r(`squadEdit.costOver`,{max:cn}))),e):{...e,[t]:{cell:t,type:v,angle:0,locked:!1}});else if(n===`erase`)p(e=>{if(!e[t])return e;let n={...e};return delete n[t],n}),h(e=>{if(!e.has(t))return e;let n=new Set(e);return n.delete(t),n});else{if(!f[t])return;h(e=>{let n=new Set(e);return D.current.addSelect?n.add(t):n.delete(t),n})}}}function ee(e,t){let n=document.elementFromPoint(e,t)?.closest(`[data-cell]`);if(!n||!E.current?.contains(n))return null;let r=Number(n.dataset.cell);return Number.isInteger(r)&&r>=0&&r<sn*sn?r:null}function te(e){let t=ee(e.clientX,e.clientY);if(t===null)return;e.currentTarget.setPointerCapture(e.pointerId);let n=g;if(e.pointerType===`mouse`&&e.button===1){e.preventDefault(),D.current={active:!0,kind:`toggle-select`,addSelect:!0,warned:!1,visited:new Set,sourceCell:null},A(t);return}if(e.button===2)n=`erase`;else if(g===`paint`&&f[t]){D.current={active:!0,kind:`move`,addSelect:!0,warned:!1,visited:new Set,sourceCell:t},C({sourceCell:t,hoverCell:t});return}D.current={active:!0,kind:n,addSelect:!m.has(t),warned:!1,visited:new Set,sourceCell:null},A(t)}function j(e){if(!D.current.active)return;if(D.current.kind===`toggle-select`&&!(e.buttons&4)){N();return}let t=ee(e.clientX,e.clientY);D.current.kind===`move`?C(e=>e&&{...e,hoverCell:t}):t!==null&&A(t)}function N(){D.current.active=!1,D.current.sourceCell=null,C(null)}function P(e){if(D.current.active){if(D.current.kind===`move`){let t=D.current.sourceCell,n=ee(e.clientX,e.clientY);t!==null&&n===null?(p(e=>{if(!e[t])return e;let n={...e};return delete n[t],n}),h(e=>{if(!e.has(t))return e;let n=new Set(e);return n.delete(t),n})):t!==null&&n!==null&&n!==t&&(p(e=>{let r=e[t];if(!r)return e;let i=e[n],a={...e,[n]:{...r,cell:n}};return i?a[t]={...i,cell:t}:delete a[t],a}),h(new Set))}N()}}function ne(){D.current.active&&N()}function re(e){if(_(`paint`),k.length===0){y(e);return}y(e),p(t=>{let n={...t},i=fn(t),a=!1;for(let t of k){let r=n[t];if(!r||r.type===e)continue;let o=R.unitTypes[e].cost-R.unitTypes[r.type].cost;if(i+o>cn){a=!0;continue}i+=o,n[t]={...r,type:e}}return a&&T(r(`squadEdit.costOverType`,{max:cn})),n})}function I(e){k.length!==0&&p(t=>{let n={...t};for(let t of k){let r=n[t];r&&(n[t]={...r,angle:((r.angle+e)%360+360)%360})}return n})}function L(){k.length!==0&&p(e=>{let t=k.some(t=>e[t]&&!e[t].locked),n={...e};for(let e of k){let r=n[e];r&&(n[e]={...r,locked:t})}return n})}function ie(){let e=Object.values(f);if(e.length===0){T(r(`squadEdit.emptyWarn`));return}if(a.trim()===``){c(!0),T(r(`squadEdit.nameRequired`));return}let t={id:i?.id??d.current??ze(`squad`),name:a.trim(),units:e};if(!Be(t)){T(r(`squadList.full`,{max:R.formation.maxSquads}));return}d.current=t.id,u(!0),!nn()&&n()}function ae(){i&&(Ve(i.id),n())}let oe=i?He(i.id).map(e=>e.name).join(`, `):``,se=k.length>0&&k.every(e=>f[e]?.locked);return(0,W.jsxs)(`div`,{className:`rts-screen`,children:[(0,W.jsxs)(qe,{children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,"data-tut":`back`,onClick:n,children:r(`common.back`)}),(0,W.jsx)(`h2`,{children:r(`squadEdit.title`)}),(0,W.jsx)(`span`,{className:`rts-count`})]}),(0,W.jsxs)(`div`,{className:`rts-name-row rts-editor-name-row${s?` error`:``}`,style:{"--grid-n":sn},children:[(0,W.jsx)(`label`,{htmlFor:`rts-squad-name`,children:r(`squadEdit.name`)}),(0,W.jsx)(`input`,{id:`rts-squad-name`,value:a,maxLength:16,placeholder:r(`squadEdit.namePlaceholder`),onChange:e=>{o(ve(e.target.value)),c(!1)}})]}),(0,W.jsx)(`div`,{className:`rts-palette`,children:un.map(e=>{let t=R.unitTypes[e],n=[[`hp`,pn(t.hp)],[`dps`,pn(hn(t.attack,t.attackInterval))],[`range`,pn(t.range)],[`speed`,pn(t.moveSpeed)],[`arrow`,mn(t)]];return(0,W.jsxs)(`button`,{"data-unit":e,className:v===e?`active`:``,onClick:()=>re(e),children:[(0,W.jsx)(`span`,{className:`rts-chip${Ye(e)?` cav`:``}`,style:{background:Je[e]},children:(0,W.jsx)(Xe,{type:e})}),(0,W.jsx)(`span`,{className:`rts-unit-name`,children:r(`unit.${e}`)}),(0,W.jsx)(`span`,{className:`rts-unit-stats`,children:n.map(([e,t])=>(0,W.jsxs)(`span`,{className:`rts-unit-stat`,children:[(0,W.jsx)(`span`,{children:r(`squadEdit.stat.${e}`)}),(0,W.jsx)(`strong`,{children:t})]},e))}),(0,W.jsxs)(`small`,{children:[r(`squadEdit.cost`),` `,pn(t.cost)]})]},e)})}),(0,W.jsxs)(`div`,{className:`rts-grid-wrap`,children:[(0,W.jsx)(et,{front:r(`squadEdit.front`),help:r(`squadEdit.help`),helpLabel:r(`common.help`),style:{"--grid-n":sn}}),(0,W.jsx)(`div`,{ref:E,className:`rts-grid`,style:{"--grid-n":sn},onPointerDown:te,onPointerMove:j,onPointerUp:P,onPointerCancel:ne,onLostPointerCapture:ne,onAuxClick:e=>{e.button===1&&e.preventDefault()},children:Array.from({length:sn*sn},(e,t)=>{let n=f[t];return(0,W.jsx)(`div`,{className:`rts-cell${S?.sourceCell===t?` move-source`:``}${S?.sourceCell===t&&S.hoverCell===null?` move-remove`:``}${S?.hoverCell===t?` move-target`:``}`,"data-cell":t,children:n&&(0,W.jsxs)(`span`,{className:`rts-unit${Ye(n.type)?` cav`:``}${m.has(t)?` selected`:``}`,style:{background:Je[n.type]},children:[(0,W.jsx)(Xe,{type:n.type}),(0,W.jsx)(`i`,{className:`rts-dir`,style:{transform:`translateX(-50%) rotate(${n.angle}deg)`}}),n.locked&&(0,W.jsx)(`span`,{className:`rts-lockmark`,title:r(`squadEdit.lock`),children:(0,W.jsxs)(`svg`,{width:`9`,height:`9`,viewBox:`0 0 24 24`,"aria-hidden":!0,children:[(0,W.jsx)(`path`,{d:`M7 11 V8 a5 5 0 0 1 10 0 v3`,stroke:`currentColor`,strokeWidth:`3`,fill:`none`}),(0,W.jsx)(`rect`,{x:`5`,y:`11`,width:`14`,height:`10`,rx:`2`,fill:`currentColor`})]})})]})},t)})})]}),(0,W.jsxs)(`div`,{className:`rts-editor-tools-row`,children:[(0,W.jsx)(`div`,{className:`rts-cost-bar${O+R.unitTypes[v].cost>cn?` over`:``}`,title:r(`squadEdit.cost`),children:(0,W.jsxs)(`strong`,{children:[O,(0,W.jsxs)(`em`,{children:[`+`,R.unitTypes[v].cost]}),` / `,cn]})}),(0,W.jsx)(`div`,{className:`rts-toolbar`,children:[`paint`,`erase`,`select`].map(e=>(0,W.jsx)(`button`,{className:`rts-btn small${g===e?` active`:``}`,onClick:()=>_(e),children:r(`squadEdit.tool.${e}`)},e))})]}),(0,W.jsxs)(`div`,{className:`rts-sel-panel`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:r(`squadEdit.rotate`)}),(0,W.jsx)(`button`,{className:`rts-btn small`,disabled:k.length===0,onClick:()=>I(-45),children:`-45°`}),(0,W.jsxs)(`button`,{className:`rts-btn small`,disabled:k.length===0,onClick:()=>I(-ln),children:[`-`,ln,`°`]}),(0,W.jsxs)(`button`,{className:`rts-btn small`,disabled:k.length===0,onClick:()=>I(ln),children:[`+`,ln,`°`]}),(0,W.jsx)(`button`,{className:`rts-btn small`,disabled:k.length===0,onClick:()=>I(45),children:`+45°`}),(0,W.jsxs)(`button`,{className:`rts-btn small`,disabled:k.length===0,onClick:L,children:[r(`squadEdit.lock`),`: `,r(se?`squadEdit.lock.on`:`squadEdit.lock.off`)]})]}),(0,W.jsxs)(`div`,{className:`rts-actions rts-squad-editor-actions`,children:[i&&(0,W.jsx)(`button`,{className:`rts-btn danger`,onClick:()=>x(!0),children:r(`common.delete`)}),(0,W.jsx)(`button`,{className:`rts-btn primary`,"data-tut":`save`,onClick:ie,children:r(`common.save`)})]}),b&&(0,W.jsxs)(nt,{title:r(`common.delete`),actions:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{className:`rts-btn`,onClick:()=>x(!1),children:r(`common.cancel`)}),(0,W.jsx)(`button`,{className:`rts-btn danger`,onClick:ae,children:r(`common.delete`)})]}),children:[r(`squadEdit.deleteConfirm`),oe&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`br`,{}),r(`squadEdit.deleteUsedWarn`,{names:oe})]})]}),w]})}var _n=r(),vn=R.formation.armySlots,yn=R.formation.squadGridSize,bn=R.formation.armyGridSize,xn=`min(11.5vw, 52px)`,Sn=6,Cn=[`place`,`erase`],wn=6;function Tn({lang:e,armyId:t,onBack:n}){let r=(t,n)=>F(e,t,n),i=Ne().squads,a=t?Ne().armies.find(e=>e.id===t)??null:null,[o,s]=(0,M.useState)(a?.name??en(e)??z(e,`armyEdit.defaultName`,`name`,Le())),[c,l]=(0,M.useState)(!1),[u,d]=(0,M.useState)(!1),f=(0,M.useRef)(null),[p,m]=(0,M.useState)(()=>a?.slots??Array.from({length:vn},()=>null)),[h,g]=(0,M.useState)(()=>{let e=a?.slotCells??he(),t=new Set,n=he();return Array.from({length:vn},(r,i)=>{let a=typeof e[i]==`number`&&e[i]<bn*bn?e[i]:n[i];return t.has(a)&&(a=n.concat(Array.from({length:bn*bn},(e,t)=>t)).find(e=>!t.has(e))??a),t.add(a),a})}),[_,v]=(0,M.useState)(a?.strategistSlot??null),[y,b]=(0,M.useState)(()=>{let e=a?.strategistCell??null;if(e===null||a?.strategistSlot===null||a===null)return e;let t=a.slots[a.strategistSlot],n=i.find(e=>e.id===t);return n&&n.units.some(t=>t.cell===e)?null:e}),[x,S]=(0,M.useState)(a?.strategistSlot??null),[C,w]=(0,M.useState)(`place`),[T,E]=(0,M.useState)(i[0]?.id??null),[D,O]=(0,M.useState)(null),[k,A]=(0,M.useState)(null),ee=(0,M.useRef)(null),[te,j]=(0,M.useState)(!1),[N,P]=tt(),ne=e=>{let t=p[e];return t?i.find(e=>e.id===t)??null:null},re=e=>h.findIndex((t,n)=>t===e&&p[n]!==null),I=x===null?null:ne(x),L=_!==null&&y!==null&&ne(_)!==null;(0,M.useEffect)(()=>{let e={};p.forEach((t,n)=>{let r=h[n];t!==null&&r!==null&&(e[r]=t)}),dt({screen:`armyEdit`,armyEdit:{pieces:e,brush:T,selectedSquadId:x===null?null:p[x],strategistSquadId:L&&_!==null?p[_]:null,strategistCell:L?y:null,saved:u}})},[p,h,T,x,_,y,L,u]);function ie(e,t){if(T===null)return!0;let n=p.findIndex((e,n)=>e===null&&!t?.has(n));return n<0?!1:(t?.add(n),m(e=>e.map((e,t)=>t===n?T:e)),g(t=>t.map((t,r)=>r===n?e:t)),!0)}function ae(e,t){let n=re(t);n!==e&&g(r=>{let i=[...r];if(n>=0){let t=i[e];i[e]=i[n],i[n]=t}else i[e]=t;return i})}function oe(e){m(t=>t.map((t,n)=>n===e?null:t)),_===e&&(v(null),b(null)),x===e&&S(null)}function se(e){ne(e)&&S(e)}function ce(e){x!==null&&(v(x),b(e))}function le(e,t){let n=document.elementFromPoint(e,t)?.closest(`[data-cell]`);return!n||!n.closest(`.rts-army-grid`)?null:Number(n.dataset.cell)}function ue(e,t){if(e.visited.has(t))return;e.visited.add(t);let n=re(t);if(e.tool===`erase`){n>=0&&oe(n);return}n>=0||!ie(t,e.usedSlots)&&!e.warned&&(e.warned=!0,P(r(`armyEdit.slotsFull`,{max:vn})))}function de(e){let t=ee.current;if(!t)return;if(t.kind===`paint`){let n=le(e.clientX,e.clientY);O(n),n!==null&&ue(t,n);return}if(!t.moved&&Math.hypot(e.clientX-t.startX,e.clientY-t.startY)<Sn)return;t.moved=!0;let n=le(e.clientX,e.clientY);O(n),A({x:e.clientX,y:e.clientY,units:ne(t.slot)?.units??[],remove:n===null,fromSlot:t.slot})}function fe(e){let t=ee.current;if(ee.current=null,O(null),A(null),!t||t.kind===`paint`)return;if(!t.moved){se(t.slot);return}let n=le(e.clientX,e.clientY);n===null?oe(t.slot):ae(t.slot,n)}function pe(e){let t=le(e.clientX,e.clientY);if(t===null)return;let n=re(t);if(C===`place`&&n>=0){e.currentTarget.setPointerCapture(e.pointerId),ee.current={kind:`move`,slot:n,moved:!1,startX:e.clientX,startY:e.clientY};return}e.currentTarget.setPointerCapture(e.pointerId);let r={kind:`paint`,tool:C,visited:new Set,usedSlots:new Set,warned:!1};ee.current=r,ue(r,t)}function me(){if(p.every(e=>e===null)){P(r(`armyEdit.emptyWarn`));return}if(o.trim()===``){l(!0),P(r(`armyEdit.nameRequired`));return}let e={id:a?.id??f.current??ze(`army`),name:o.trim(),slots:p,slotCells:h,strategistSlot:L?_:null,strategistCell:L?y:null};if(!Ue(e)){P(r(`armyList.full`,{max:R.formation.maxArmies}));return}f.current=e.id,d(!0),!nn()&&n()}function ge(){a&&(Ge(a.id),n())}return(0,W.jsxs)(`div`,{className:`rts-screen`,children:[(0,W.jsxs)(qe,{children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,"data-tut":`back`,onClick:n,children:r(`common.back`)}),(0,W.jsx)(`h2`,{children:r(`armyEdit.title`)}),(0,W.jsx)(`span`,{className:`rts-count`})]}),(0,W.jsxs)(`div`,{className:`rts-name-row rts-editor-name-row${c?` error`:``}`,style:{"--grid-n":bn,"--cell":xn},children:[(0,W.jsx)(`label`,{htmlFor:`rts-army-name`,children:r(`armyEdit.name`)}),(0,W.jsx)(`input`,{id:`rts-army-name`,value:o,maxLength:16,onChange:e=>{s(ve(e.target.value)),l(!1)}})]}),i.length===0&&(0,W.jsx)(`p`,{className:`rts-hint`,children:r(`armyEdit.noSquads`)}),(0,W.jsx)(`div`,{className:`rts-army-tray`,style:{"--grid-n":bn,"--cell":xn,"--tray-n":wn},children:i.map(e=>(0,W.jsxs)(`button`,{type:`button`,className:`rts-army-tray-item${T===e.id?` active`:``}`,title:e.name,"aria-label":e.name,"aria-pressed":T===e.id,"data-squad":e.id,onClick:()=>{E(e.id),w(`place`)},children:[(0,W.jsx)($e,{units:e.units}),(0,W.jsx)(`span`,{className:`rts-army-tray-name`,children:e.name})]},e.id))}),(0,W.jsxs)(`div`,{className:`rts-grid-wrap`,children:[(0,W.jsx)(et,{front:r(`squadEdit.front`),help:r(`armyEdit.formationHint`),helpLabel:r(`common.help`),style:{"--grid-n":bn,"--cell":xn}}),(0,W.jsx)(`div`,{className:`rts-grid rts-army-grid`,style:{"--cell":xn},onPointerDown:pe,onPointerMove:de,onPointerUp:fe,onPointerCancel:fe,children:Array.from({length:bn*bn},(e,t)=>{let n=re(t),r=n>=0?ne(n):null;return(0,W.jsx)(`div`,{className:`rts-cell${D===t?` drop`:``}`,"data-cell":t,style:{cursor:`pointer`},children:r&&(0,W.jsxs)(`span`,{className:`rts-army-piece${x===n?` picked`:``}${L&&_===n?` has-strategist`:``}${k?.fromSlot===n?` dragging`:``}`,title:r.name,children:[(0,W.jsx)($e,{units:r.units}),L&&_===n&&(0,W.jsx)(`i`,{className:`rts-piece-flag`,children:`⚑`})]})},t)})})]}),(0,W.jsxs)(`div`,{className:`rts-editor-tools-row`,children:[(0,W.jsx)(`div`,{className:`rts-cost-bar`,title:r(`armyEdit.title`),children:(0,W.jsxs)(`strong`,{children:[p.filter(Boolean).length,` / `,vn]})}),(0,W.jsx)(`div`,{className:`rts-toolbar`,children:Cn.map(e=>(0,W.jsx)(`button`,{className:`rts-btn small${C===e?` active`:``}`,onClick:()=>w(e),children:r(`armyEdit.tool.${e}`)},e))})]}),(0,W.jsx)(`span`,{className:`rts-army-section`,children:r(`armyEdit.strategist.section`)}),!L&&(0,W.jsx)(`p`,{className:`rts-warn-strong`,children:r(`armyEdit.strategist.none`)}),I?(0,W.jsxs)(`div`,{className:`rts-grid-wrap`,children:[(0,W.jsx)(`p`,{className:`rts-hint`,children:r(`armyEdit.strategist.cellHint`)}),(0,W.jsx)(`div`,{className:`rts-grid`,style:{"--cell":`min(6.6vw, 28px)`,"--grid-n":yn},children:Array.from({length:yn*yn},(e,t)=>{let n=I.units.find(e=>e.cell===t);return(0,W.jsxs)(`div`,{className:`rts-cell`,"data-cell":t,onClick:()=>{n||ce(t)},style:n?void 0:{cursor:`pointer`},children:[n&&(0,W.jsx)(`span`,{className:`rts-unit${Ye(n.type)?` cav`:``}`,style:{background:Je[n.type],opacity:.55},children:(0,W.jsx)(Xe,{type:n.type})}),_===x&&y===t&&!n&&(0,W.jsx)(`span`,{className:`rts-strategist`,children:`⚐`})]},t)})})]}):(0,W.jsx)(`p`,{className:`rts-hint`,children:r(`armyEdit.strategist.pickSquad`)}),(0,W.jsxs)(`div`,{className:`rts-actions rts-army-editor-actions`,children:[a&&(0,W.jsx)(`button`,{className:`rts-btn danger`,onClick:()=>j(!0),children:r(`common.delete`)}),(0,W.jsx)(`button`,{className:`rts-btn primary`,"data-tut":`save`,onClick:me,children:r(`common.save`)})]}),k&&(0,_n.createPortal)((0,W.jsx)(`span`,{className:`rts-army-ghost${k.remove?` remove`:``}`,style:{left:k.x,top:k.y},"aria-hidden":!0,children:(0,W.jsx)($e,{units:k.units})}),document.body),te&&(0,W.jsx)(nt,{title:r(`common.delete`),actions:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{className:`rts-btn`,onClick:()=>j(!1),children:r(`common.cancel`)}),(0,W.jsx)(`button`,{className:`rts-btn danger`,onClick:ge,children:r(`common.delete`)})]}),children:r(`armyEdit.deleteConfirm`)}),N]})}function En(e){let t=Ne().squads,n=e.slots.some(e=>e!==null&&t.some(t=>t.id===e&&t.units.length>0)),r=e.strategistSlot!==null&&e.strategistCell!==null&&e.slots[e.strategistSlot]!==null;return n&&r}function Dn({lang:e,onStart:t,onBack:n}){let r=(t,n)=>F(e,t,n),i=Pe(),a=i.armies.filter(En),[o,s]=(0,M.useState)(a[0]?.id??null),[c,l]=(0,M.useState)(2),[u,d]=(0,M.useState)(`ffa`),[f,p]=(0,M.useState)(180),[m,h]=(0,M.useState)(1);return(0,W.jsxs)(`div`,{className:`rts-screen`,children:[(0,W.jsxs)(qe,{children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,onClick:n,children:r(`common.back`)}),(0,W.jsx)(`h2`,{children:r(`single.title`)}),(0,W.jsx)(`span`,{className:`rts-count`})]}),(0,W.jsx)(`p`,{className:`rts-hint`,children:r(`single.selectArmy`)}),(0,W.jsx)(`ul`,{className:`rts-list`,children:i.armies.map(e=>{let t=En(e);return(0,W.jsxs)(`li`,{className:o===e.id?`selected`:void 0,onClick:()=>{t&&s(e.id)},style:{opacity:t?1:.45},children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:e.name}),(0,W.jsxs)(`span`,{className:`rts-item-meta`,children:[r(`armyList.squadCount`,{n:e.slots.filter(Boolean).length,slots:e.slots.length}),!t&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`br`,{}),(0,W.jsx)(`span`,{className:`rts-warn-text`,children:r(`single.notReady`)})]})]})]},e.id)})}),(0,W.jsxs)(`div`,{className:`rts-sel-panel rts-single-config`,children:[(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:r(`single.players`)}),(0,W.jsx)(`div`,{className:`rts-option-controls`,children:[2,3,4].map(e=>(0,W.jsx)(`button`,{className:`rts-btn small${c===e?` active`:``}`,onClick:()=>{l(e),e!==4&&d(`ffa`)},children:e},e))})]}),c===4&&(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:r(`single.mode`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`button`,{className:`rts-btn small${u===`ffa`?` active`:``}`,onClick:()=>d(`ffa`),children:r(`mode.ffa`)}),(0,W.jsx)(`button`,{className:`rts-btn small${u===`team`?` active`:``}`,onClick:()=>d(`team`),children:r(`mode.team`)})]})]}),(0,W.jsxs)(`label`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:r(`single.duration`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`output`,{children:f}),(0,W.jsx)(`input`,{type:`range`,min:120,max:300,step:10,value:f,onChange:e=>p(Number(e.target.value))})]})]}),(0,W.jsxs)(`label`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:r(`single.moveSpeed`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`output`,{children:m.toFixed(1)}),(0,W.jsx)(`input`,{type:`range`,min:1,max:2,step:.1,value:m,onChange:e=>h(Number(e.target.value))})]})]})]}),(0,W.jsx)(`p`,{className:`rts-hint`,children:r(`single.enemyNote`)}),(0,W.jsx)(`div`,{className:`rts-actions rts-single-actions`,children:(0,W.jsx)(`button`,{className:`rts-btn primary`,"data-tut":`single-start`,disabled:!o,onClick:()=>{o&&t({playerArmyId:o,playerCount:c,mode:u,durationSec:f,moveSpeedMul:m})},children:r(`single.start`)})})]})}var On=.05,kn=N.formation.squadGridSize,An=N.formation.armyGridSize;function jn(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>=0?e:t}var G={...N.combat,sideDamageMul:jn(N.combat.sideDamageMul,2),rearDamageMul:jn(N.combat.rearDamageMul,3)},Mn=N.unitTypes,Nn=Object.fromEntries(Object.entries(N.unitTypes).map(([e,t])=>[e,t.settleSec??0])),Pn=Object.fromEntries(Object.entries(N.unitTypes).map(([e,t])=>[e,t.arrowMul??1])),Fn=8,In=Object.fromEntries(Object.entries(N.unitTypes).map(([e,t])=>[e,t.knockbackResist??0]));function Ln(e,t){let n=0;for(let r of t.unitIds){let t=e.units[r];!t.alive||t.isStrategist||Mn[t.type].range>=Fn||(n+=Mn[t.type].cost)}return n}function Rn(e,t,n){if(Mn[n.type].range>=Fn)return 1;let r=Ln(e,t)*Mn[n.type].moveSpeed;return Math.min(G.chargeMaxMul,1+r/G.chargeReference)}var zn=.3,Bn=.2,Vn=e=>e*Math.PI/180,Hn=e=>(e%360+360)%360,Un=(e,t)=>{let n=Hn(e-t);return n>180&&(n-=360),n},Wn=(e,t)=>Hn(Math.atan2(e,-t)*180/Math.PI);function Gn(e,t,n){let r=Vn(n),i=Math.cos(r),a=Math.sin(r);return[e*i-t*a,e*a+t*i]}function Kn(e,t){let n=Hn(t),r=Math.abs(Un(n,e.facing));r>90&&r<270&&(e.formationLateralSign=e.formationLateralSign===1?-1:1),e.facing=n}function qn(e,t){return Gn(t.formationLateralSign*e.offX,e.offY,t.facing)}var Jn=kn-2,Yn=[22,23,24,25,26,29,30,31,32,33],Xn=N.battlefield,Zn=Xn.mapSize,Qn=Xn.moveSpeedMul;function $n(e){return e.army.slots.map((e,t)=>({squadId:e,slotIndex:t})).filter(e=>e.squadId!==null).map(({slotIndex:t},n)=>{let r=e.army.slotCells?.[t];return typeof r==`number`&&r>=0&&r<An*An?r:Yn[n%10]})}function er(e){if(e.length===0)return{front:kn,depth:kn};let t=e.map(e=>e%An),n=e.map(e=>Math.floor(e/An));return{front:(Math.max(...t)-Math.min(...t))*Jn+kn,depth:(Math.max(...n)-Math.min(...n))*Jn+kn}}function tr(e){let t=e.map(e=>er($n(e))),n=Math.max(kn,...t.map(e=>e.front)),r=Math.max(kn,...t.map(e=>e.depth)),i=Math.max(1,e.length),a=e.map((e,t)=>{let a=t/i*360+270,o=Math.sin(Vn(a)),s=-Math.cos(Vn(a)),c=Wn(-o,-s),l=Vn(c),u=Math.abs(Math.cos(l)),d=Math.abs(Math.sin(l));return{ux:o,uy:s,facing:c,halfX:n/2*u+r/2*d,halfY:n/2*d+r/2*u}}),o=i<=2?(r+Xn.duelGap)/2:(n+r)/2+Xn.deploySeparation/(2*Math.sin(Math.PI/i)),s=Zn[String(i)],c,l;if(s){c=Math.max(s.w,Math.ceil(2*(Math.max(...a.map(e=>e.halfX))+Xn.margin))),l=Math.max(s.h,Math.ceil(2*(Math.max(...a.map(e=>e.halfY))+Xn.margin)));let e=1;for(let t of a)Math.abs(t.ux)>1e-6&&(e=Math.min(e,(c/2-Xn.margin-t.halfX)/(Math.abs(t.ux)*o))),Math.abs(t.uy)>1e-6&&(e=Math.min(e,(l/2-Xn.margin-t.halfY)/(Math.abs(t.uy)*o)));o*=Math.max(0,Math.min(1,e))}else c=Math.ceil(2*(Math.max(...a.map(e=>Math.abs(e.ux)*o+e.halfX))+Xn.margin)),l=Math.ceil(2*(Math.max(...a.map(e=>Math.abs(e.uy)*o+e.halfY))+Xn.margin)),l=Math.max(l,Math.round(c*Xn.minAspect)),c=Math.max(c,Math.round(l*Xn.minAspect));let u=a.map(e=>({offX:e.ux*o,offY:e.uy*o,facing:e.facing,halfX:e.halfX,halfY:e.halfY}));return{worldW:c,worldH:l,places:u}}function nr(e,t={}){let{worldW:n,worldH:r,places:i}=tr(e),a=Qn[String(Math.max(1,e.length))]??1,o={time:0,freezeClock:t.freezeClock===!0,duration:Math.max(120,Math.min(300,t.durationSec??G.matchDurationSec)),moveSpeedMul:Math.max(1,Math.min(2,t.moveSpeedMul??1))*a,worldW:n,worldH:r,units:[],squads:[],projectiles:[],players:e.map((e,t)=>({id:t,name:e.name,color:e.color,team:e.team??t,strategistAlive:!1,aliveSoldiers:0,speedMul:1,eliminated:!1,eliminatedAt:0,kills:0,passive:e.passive===!0,hpFloor:!1})),result:null};return e.forEach((e,t)=>{let a=o.units.length,s=o.squads.length,c=i[t],l=n/2+c.offX,u=r/2+c.offY,d=c.facing,f=e.army.slots.map((e,t)=>({squadId:e,slotIndex:t})).filter(e=>e.squadId!==null),p=$n(e),m=p.reduce((e,t)=>e+t%An,0)/Math.max(1,p.length),h=p.reduce((e,t)=>e+Math.floor(t/An),0)/Math.max(1,p.length);f.forEach(({squadId:n,slotIndex:r},i)=>{let a=e.squads.find(e=>e.id===n);if(!a||a.units.length===0)return;let s=p[i],[c,f]=Gn((s%An-m)*Jn,(Math.floor(s/An)-h)*Jn,d),g=l+c,_=u+f,v={id:o.squads.length,playerId:t,name:a.name,unitIds:[],anchorX:g,anchorY:_,facing:d,formationLateralSign:1,speed:1/0,maxRange:0,order:null,engagedWith:null,chargeSec:0,pursuit:null},y=e.army.strategistSlot===r&&e.army.strategistCell!==null,b=(e,n,r,i,a)=>{let s=n%kn-(kn-1)/2,c=Math.floor(n/kn)-(kn-1)/2,[l,u]=Gn(s,c,d),f=Mn[e],p={id:o.units.length,playerId:t,team:o.players[t].team,squadId:v.id,type:e,x:g+l,y:_+u,px:g+l,py:_+u,facing:d,hp:f.hp*(y&&!a?G.strategistHpBuffMul:1),maxHp:f.hp*(y&&!a?G.strategistHpBuffMul:1),offX:s,offY:c,locked:i,lockAngle:r,cooldown:Math.random()*f.attackInterval,action:0,hitFlash:0,hitDirection:null,alive:!0,chargeUsed:!1,stillSec:99,isStrategist:a};o.units.push(p),v.unitIds.push(p.id),a?v.speed=Math.min(v.speed,f.moveSpeed):(v.speed=Math.min(v.speed,f.moveSpeed),v.maxRange=Math.max(v.maxRange,f.range))};for(let e of a.units)b(e.type,e.cell,e.angle,e.locked,!1);e.army.strategistSlot===r&&e.army.strategistCell!==null&&(b(`strategist`,e.army.strategistCell,0,!1,!0),o.players[t].strategistAlive=!0),v.speed===1/0&&(v.speed=1),o.squads.push(v)}),rr(o,a,s)}),ir(o),o}function rr(e,t,n){let r=e.units.slice(t);if(r.length===0)return;let i=2.5,a=Math.min(...r.map(e=>e.x)),o=Math.max(...r.map(e=>e.x)),s=Math.min(...r.map(e=>e.y)),c=Math.max(...r.map(e=>e.y)),l=0,u=0;if(a<i&&(l=i-a),o+l>e.worldW-i&&(l+=e.worldW-i-(o+l)),s<i&&(u=i-s),c+u>e.worldH-i&&(u+=e.worldH-i-(c+u)),l!==0||u!==0){for(let e of r)e.x+=l,e.y+=u,e.px+=l,e.py+=u;for(let t of e.squads.slice(n))t.anchorX+=l,t.anchorY+=u}}function ir(e){for(let t of e.players)t.aliveSoldiers=0,t.strategistAlive=!1;for(let t of e.units)t.alive&&(t.isStrategist?e.players[t.playerId].strategistAlive=!0:e.players[t.playerId].aliveSoldiers+=1)}function ar(e,t){if(t.order){let e=t.order.x-t.anchorX,n=t.order.y-t.anchorY;if(Math.hypot(e,n)>=1e-4)return Wn(e,n)}let n=0,r=0,i=0;for(let a of t.unitIds){let t=e.units[a];!t.alive||t.isStrategist||(n+=t.x-t.px,r+=t.y-t.py,i++)}return i===0||Math.hypot(n/i,r/i)<1e-4?null:Wn(n,r)}function or(e,t,n,r){if(t.chargeSec<=0)return;let i=ar(e,t);if(i===null)return;let a=Wn(n-t.anchorX,r-t.anchorY);if(!(Math.abs(Un(a,i))<G.chargeCancelTurnDeg)){t.chargeSec=0;for(let n of t.unitIds)e.units[n].chargeUsed=!1}}function sr(e,t,n,r){let i=e.squads[t];!i||e.result||(i.pursuit=null,ur(e,i,n,r))}function cr(e,t){let n=e.squads[t];if(!n)return null;let r=0,i=0,a=0;for(let t of n.unitIds){let n=e.units[t];n.alive&&(r+=n.x,i+=n.y,a++)}return a===0?null:{x:r/a,y:i/a}}function lr(e,t,n){let r=e.squads[t],i=e.squads[n];if(!r||!i||e.result||e.players[i.playerId].team===e.players[r.playerId].team)return;let a=cr(e,n);a&&(r.pursuit=n,ur(e,r,a.x,a.y))}function ur(e,t,n,r){let i=Math.max(1,Math.min(e.worldW-1,n)),a=Math.max(1,Math.min(e.worldH-1,r));or(e,t,i,a),t.order={x:i,y:a}}var dr=4,fr=class{map=new Map;constructor(e){for(let t of e){if(!t.alive)continue;let e=this.key(t.x,t.y),n=this.map.get(e);n?n.push(t):this.map.set(e,[t])}}key(e,t){return Math.floor(e/dr)*4096+Math.floor(t/dr)}eachNear(e,t,n,r){let i=Math.min(8,Math.ceil(n/dr)),a=Math.floor(e/dr),o=Math.floor(t/dr);for(let s=a-i;s<=a+i;s++)for(let a=o-i;a<=o+i;a++){let i=this.map.get(s*4096+a);if(i)for(let a of i)Math.hypot(a.x-e,a.y-t)<=n+1&&r(a)}}nearest(e,t,n,r){let i=Math.min(8,Math.ceil(n/dr)),a=Math.floor(e/dr),o=Math.floor(t/dr),s=null,c=n;for(let n=a-i;n<=a+i;n++)for(let a=o-i;a<=o+i;a++){let i=this.map.get(n*4096+a);if(i)for(let n of i){if(!n.alive||!r(n))continue;let i=Math.hypot(n.x-e,n.y-t);(i<c||i===c&&(s===null||n.id<s.id))&&(c=i,s=n)}}return s?{unit:s,dist:c}:null}};function pr(e,t,n){let r=Wn(t-e.x,n-e.y),i=Math.abs(Un(r,e.facing));return i<=G.frontAngleDeg?`front`:i>G.rearAngleDeg?`rear`:`side`}function mr(e){return e===`front`?1:e===`rear`?G.rearDamageMul:G.sideDamageMul}function hr(e,t,n,r,i,a){if(!t.alive)return;let o=pr(t,r,i);if(t.hitFlash=Bn,t.hitDirection=o,t.hp-=n*mr(o),e.players[t.playerId].hpFloor&&t.hp<1&&(t.hp=1),t.hp<=0){t.alive=!1,a>=0&&e.players[a]&&e.players[a].team!==t.team&&(e.players[a].kills+=1);let n=e.squads[t.squadId];n.speed=xr(e,n),n.maxRange=Or(e,n),t.isStrategist?vr(e,t.playerId,t.squadId):--e.players[t.playerId].aliveSoldiers}}var gr=3;function _r(e,t){let n=t.x,r=e.worldW-t.x,i=t.y,a=e.worldH-t.y,o=Math.min(n,r,i,a);return o===n?[-4,t.y]:o===r?[e.worldW+gr+1,t.y]:o===i?[t.x,-4]:[t.x,e.worldH+gr+1]}function vr(e,t,n){let r=e.players[t];r.strategistAlive=!1;let i=G.strategistHpBuffMul;if(i!==1)for(let t of e.squads[n]?.unitIds??[]){let n=e.units[t];n.isStrategist||!n.alive||(n.maxHp/=i,n.hp=Math.min(n.hp/i,n.maxHp))}if(e.result)return;if(e.players.some(e=>e.team!==e.id)){r.speedMul=G.strategistDeadArmySpeedMul,e.players.some(e=>e.team===r.team&&e.strategistAlive)||(e.result=br(e,`strategist`,e.players.filter(e=>e.team!==r.team).map(e=>e.id)),yr(e));return}if(e.players.length===2){let n=e.players.find(e=>e.id!==t);e.result=br(e,`strategist`,n?[n.id]:[]),yr(e);return}r.eliminated=!0,r.eliminatedAt=e.time;for(let n of e.squads)n.playerId===t&&(n.order=null,n.engagedWith=null);let a=e.players.filter(e=>!e.eliminated);a.length===1&&(e.result=br(e,`lastman`,[a[0].id]),yr(e))}function yr(e){let t=e.result;if(!t)return;let n=new Set(t.rankingGroups[0]??[]);if(n.size!==0&&n.size!==e.players.length){for(let t of e.players)n.has(t.id)||t.eliminated||(t.eliminated=!0,t.eliminatedAt===0&&(t.eliminatedAt=e.time));for(let t of e.squads)e.players[t.playerId].eliminated&&(t.order=null,t.engagedWith=null)}}function br(e,t,n){let r=n.length>0?[n]:[],i=e.players.filter(e=>!n.includes(e.id)),a=i.filter(e=>!e.eliminated).sort((e,t)=>t.aliveSoldiers-e.aliveSoldiers),o=new Map;for(let e of a){let t=o.get(e.aliveSoldiers);t?t.push(e.id):o.set(e.aliveSoldiers,[e.id])}for(let e of o.values())r.push(e);let s=i.filter(e=>e.eliminated).sort((e,t)=>t.eliminatedAt-e.eliminatedAt);for(let e of s)r.push([e.id]);return{reason:t,rankingGroups:r,counts:e.players.map(e=>e.aliveSoldiers),kills:e.players.map(e=>e.kills)}}function xr(e,t){let n=1/0;for(let r of t.unitIds){let t=e.units[r];t.alive&&(n=Math.min(n,Mn[t.type].moveSpeed))}return n===1/0?1:n}function Sr(e,t){let n=1/0;for(let r of t.unitIds){let t=e.units[r];t.alive&&!t.isStrategist&&(n=Math.min(n,Mn[t.type].range))}return n===1/0?1:n}function Cr(e,t,n){let r=null,i=1/0;for(let a of e.squads[n].unitIds){let n=e.units[a];if(!n.alive)continue;let o=Math.hypot(n.x-t.anchorX,n.y-t.anchorY);o<i&&(i=o,r=n)}return r}function wr(e,t){let n=e.players[t.playerId].team,r=null,i=1/0;for(let a of e.units){if(!a.alive||a.team===n)continue;let e=(a.x-t.anchorX)**2+(a.y-t.anchorY)**2;e<i&&(i=e,r=a)}return r}function Tr(e,t,n){let r=e.players[t.playerId].team,i=G.enemyMassRadius*G.enemyMassRadius,a=0,o=0,s=0;for(let t of e.units)!t.alive||t.team===r||(t.x-n.x)**2+(t.y-n.y)**2>i||(a+=t.x,o+=t.y,s++);return s===0?{x:n.x,y:n.y}:{x:a/s,y:o/s}}function Er(e,t){let n=Sr(e,t);return n>=Fn?n*G.shooterHoldRatio:Math.max(G.unitRadius*2,n-G.unitRadius/2)}function Dr(e,t,n,r){let i=e.players[t.playerId].team;return n.nearest(t.anchorX,t.anchorY,r,e=>e.team!==i)!==null}function Or(e,t){let n=0;for(let r of t.unitIds){let t=e.units[r];t.alive&&!t.isStrategist&&(n=Math.max(n,Mn[t.type].range))}return n}function kr(e,t,n,r,i){let a=null;for(let o of t.unitIds){let s=e.units[o];if(!s.alive)continue;let c=n.nearest(s.x,s.y,r,n=>n.team!==e.players[t.playerId].team&&(i===null||n.squadId===i));if(c){if(i!==null)return c.unit.squadId;a=c.unit.squadId;break}}return a}function Ar(e,t,n){let r=e.players[t.playerId].team,i=null;for(let a of t.unitIds){let t=e.units[a];if(!t.alive||t.isStrategist)continue;let o=Mn[t.type].range;if(o<=0)continue;let s=n.nearest(t.x,t.y,o,e=>e.team!==r);s&&(i===null||s.dist<i.dist||s.dist===i.dist&&s.unit.id<i.unitId)&&(i={squadId:s.unit.squadId,unitId:s.unit.id,dist:s.dist})}return i?.squadId??null}function jr(e){let t=On;!e.result&&!e.freezeClock&&(e.time+=t);for(let n of e.units)n.px=n.x,n.py=n.y,n.hitFlash>0&&(n.hitFlash=Math.max(0,n.hitFlash-t),n.hitFlash===0&&(n.hitDirection=null));let n=new fr(e.units);for(let r of e.squads){let i=r.unitIds.filter(t=>e.units[t].alive);if(i.length===0)continue;if(e.players[r.playerId].eliminated||e.players[r.playerId].passive){r.order=null,r.engagedWith=null,r.pursuit=null;continue}let a=Math.max(r.maxRange,G.idleDetectionMinRange);if(r.pursuit!==null){let t=cr(e,r.pursuit);t?Dr(e,r,n,Er(e,r)+G.unitRadius)?(r.order=null,r.engagedWith===null&&(r.engagedWith=kr(e,r,n,a,r.pursuit)??null)):r.order={x:Math.max(1,Math.min(e.worldW-1,t.x)),y:Math.max(1,Math.min(e.worldH-1,t.y))}:(r.pursuit=null,r.order=null)}if(r.order!==null)r.engagedWith=Ar(e,r,n);else if(r.engagedWith!==null)(kr(e,r,n,a,r.engagedWith)===null||e.squads[r.engagedWith].unitIds.every(t=>!e.units[t].alive))&&(r.engagedWith=null);else{let t=kr(e,r,n,a,null);t!==null&&(r.engagedWith=t)}if(r.order===null&&r.engagedWith!==null){let n=wr(e,r)??Cr(e,r,r.engagedWith);if(n){let a=Tr(e,r,n),o=a.x-r.anchorX,s=a.y-r.anchorY,c=Math.hypot(o,s),l=c;for(let t of i){let r=e.units[t];l=Math.min(l,Math.hypot(n.x-r.x,n.y-r.y))}let u=Er(e,r);if(l>u&&c>0){let n=Math.min(l-u,r.speed*G.engagedMoveSpeedMul*e.players[r.playerId].speedMul*e.moveSpeedMul*t);r.anchorX+=o/c*n,r.anchorY+=s/c*n}Kn(r,Wn(o,s))}}if(r.order){let n=r.order.x-r.anchorX,i=r.order.y-r.anchorY,a=Math.hypot(n,i);if(a<.1)r.order=null;else{let o=r.engagedWith===null?1:G.engagedMoveSpeedMul,s=Math.min(a,r.speed*o*e.players[r.playerId].speedMul*e.moveSpeedMul*t);r.anchorX+=n/a*s,r.anchorY+=i/a*s,Kn(r,Wn(n,i))}}}let r=(n,r,i,a)=>{let[o,s]=qn(n,r),c=r.anchorX+o,l=r.anchorY+s,u=c-n.x,d=l-n.y,f=Math.hypot(u,d);if(f<=.05)return;let p=r.engagedWith===null?1:G.engagedMoveSpeedMul,m=Math.min(f,i.moveSpeed*p*e.players[n.playerId].speedMul*e.moveSpeedMul*t);n.x+=u/f*m,n.y+=d/f*m,a&&Mr(n,Wn(u,d),t)},i=(r,i,a)=>{if(i.order!==null||r.action>0||a.range<=0)return!1;let o=n.nearest(r.x,r.y,a.range+G.reachExtraRange,e=>e.team!==r.team);if(!o)return!1;let[s,c]=qn(r,i),l=i.anchorX+s,u=i.anchorY+c,d=Math.hypot(l-r.x,u-r.y),f=o.unit.x-r.x,p=o.unit.y-r.y,m=Math.hypot(f,p)||.001;if(d>=G.reachLeash&&(l-r.x)*f+(u-r.y)*p<=0)return!1;let h=Math.min(m,a.moveSpeed*G.engagedMoveSpeedMul*e.players[r.playerId].speedMul*e.moveSpeedMul*t);return r.x+=f/m*h,r.y+=p/m*h,Mr(r,Wn(f,p),t),!0};for(let a of e.units){if(!a.alive)continue;a.cooldown>0&&(a.cooldown-=t),a.action>0&&(a.action=a.action-t<=1e-9?0:a.action-t);let o=e.squads[a.squadId],s=Mn[a.type];if(e.players[a.playerId].eliminated){let[n,r]=_r(e,a),i=n-a.x,o=r-a.y,c=Math.hypot(i,o)||.001,l=s.moveSpeed*G.routSpeedMul*e.players[a.playerId].speedMul*e.moveSpeedMul*t;a.x+=i/c*l,a.y+=o/c*l,Mr(a,Wn(i,o),t),(a.x<-3||a.x>e.worldW+gr||a.y<-3||a.y>e.worldH+gr)&&(a.alive=!1,a.isStrategist||--e.players[a.playerId].aliveSoldiers);continue}let c=o.engagedWith,l=o.order!==null&&(a.action<=0||s.canMoveWhileFighting);if(c!==null&&!a.isStrategist){let c=n.nearest(a.x,a.y,s.range,e=>e.team!==a.team);if(c){let n=c.unit;if(Mr(a,a.locked?Hn(o.facing+a.lockAngle):Wn(n.x-a.x,n.y-a.y),t),a.cooldown<=0&&a.stillSec>=Nn[a.type]){a.cooldown=s.attackInterval,a.action=zn;let t=Rn(e,o,a),r=t>1&&!a.chargeUsed&&o.chargeSec>=G.chargeMinSec;r&&(a.chargeUsed=!0);let i=s.attack*(r?t:1);if(s.range>=4){let t=n.x-a.x,r=n.y-a.y,o=Math.hypot(t,r)||.001;e.projectiles.push({x:a.x,y:a.y,px:a.x,py:a.y,tx:n.x,ty:n.y,vx:t/o*G.arrowSpeed,vy:r/o*G.arrowSpeed,damage:i,team:a.team,attackerId:a.playerId,attackerX:a.x,attackerY:a.y})}else if(hr(e,n,i,a.x,a.y,a.playerId),r&&n.alive){let e=G.chargeKnockback*((t-1)/Math.max(.001,G.chargeMaxMul-1))*(1-(In[n.type]??0));if(e>0){let t=n.x-a.x,r=n.y-a.y,i=Math.hypot(t,r)||.001;n.x+=t/i*e,n.y+=r/i*e}}}(a.action<=0||s.canMoveWhileFighting)&&r(a,o,s,!1)}else i(a,o,s)||(l||o.order===null&&a.action<=0)&&r(a,o,s,!0)}else{let[e,n]=qn(a,o),i=o.anchorX+e,c=o.anchorY+n,u=i-a.x,d=c-a.y;Math.hypot(u,d)>.05&&(o.order===null||l)?r(a,o,s,!0):o.order===null&&Mr(a,a.locked?Hn(o.facing+a.lockAngle):o.facing,t)}a.x=Math.max(.5,Math.min(e.worldW-.5,a.x)),a.y=Math.max(.5,Math.min(e.worldH-.5,a.y))}{let t=new fr(e.units),n=G.unitRadius*2;for(let r of e.units)r.alive&&t.eachNear(r.x,r.y,n,e=>{if(e.id<=r.id||!e.alive)return;let t=e.x-r.x,i=e.y-r.y,a=Math.hypot(t,i);if(a>=n)return;a<.001&&(t=(r.id%7-3)*.01||.01,i=(r.id%5-2)*.01||.01,a=Math.hypot(t,i));let o=(n-a)/2;r.x-=t/a*o,r.y-=i/a*o,e.x+=t/a*o,e.y+=i/a*o})}for(let n of e.squads){let r=0,i=0;for(let a of n.unitIds){let n=e.units[a];!n.alive||n.isStrategist||(r++,Math.hypot(n.x-n.px,n.y-n.py)/t>=Mn[n.type].moveSpeed*e.players[n.playerId].speedMul*e.moveSpeedMul*G.chargeSpeedRatio&&i++)}if(n.order!==null&&r>0&&i/r>=G.chargeRunningRatio)n.chargeSec=Math.min(G.chargeMinSec+G.chargeGraceSec,n.chargeSec+t);else if(n.chargeSec>0&&(n.chargeSec=Math.max(0,n.chargeSec-t),n.chargeSec===0))for(let t of n.unitIds)e.units[t].chargeUsed=!1}for(let n of e.units){if(!n.alive)continue;let r=e.squads[n.squadId];n.stillSec=r.order!==null&&r.engagedWith===null&&Math.hypot(n.x-n.px,n.y-n.py)/t>G.settleMoveThreshold?0:n.stillSec+t}let a=[];for(let r of e.projectiles)if(r.px=r.x,r.py=r.y,r.x+=r.vx*t,r.y+=r.vy*t,(r.x-r.tx)*r.vx+(r.y-r.ty)*r.vy>=0){let t=n.nearest(r.tx,r.ty,G.arrowHitRadius,e=>e.team!==r.team);t&&hr(e,t.unit,r.damage*(Pn[t.unit.type]??1),r.attackerX,r.attackerY,r.attackerId)}else r.x>-2&&r.x<e.worldW+2&&r.y>-2&&r.y<e.worldH+2&&a.push(r);if(e.projectiles=a,!e.result&&e.time>=e.duration){if(e.players.some(e=>e.team!==e.id)){let t=new Map;for(let n of e.players)t.set(n.team,(t.get(n.team)??0)+n.aliveSoldiers);let n=[...t.entries()].sort((e,t)=>t[1]-e[1]);e.result=n.length>1&&n[0][1]===n[1][1]?{reason:`timeup`,rankingGroups:[e.players.map(e=>e.id)],counts:e.players.map(e=>e.aliveSoldiers),kills:e.players.map(e=>e.kills)}:{reason:`timeup`,rankingGroups:n.map(([t])=>e.players.filter(e=>e.team===t).map(e=>e.id)),counts:e.players.map(e=>e.aliveSoldiers),kills:e.players.map(e=>e.kills)}}else e.result=br(e,`timeup`,[]);yr(e)}}function Mr(e,t,n){let r=Un(t,e.facing),i=G.turnSpeedDegPerSec*n;e.facing=Hn(e.facing+Math.max(-i,Math.min(i,r)))}var Nr=e=>N.unitTypes[e].range;function Pr(e){let t=[],n=[];for(let r=0;r<10;r++){let i=L[Math.floor(Math.random()*L.length)],a=`${e}-s${r}`;t.push({id:a,name:i,units:ue(i)}),n.push(a)}let r=fe(t[6].units);return{army:{id:e,name:e,slots:n,slotCells:he(),strategistSlot:6,strategistCell:r},squads:t}}var Fr=8,Ir=.95,Lr=N.ai.orderIntervalSec,Rr=N.ai.hitAndRunMinSpeed,zr=N.ai.hitAndRunOvershoot,Br=new WeakMap;function Vr(e,t){if(e.result)return;let n=Br.get(e);if(n||(n=new Map,Br.set(e,n)),e.time<(n.get(t)??0))return;let r=e.players[t],i=e=>e.isStrategist?0:Nr(e.type),a=[];for(let t of e.squads){if(e.players[t.playerId].team===r.team)continue;let n=cr(e,t.id);n&&a.push({id:t.id,...n})}if(a.length!==0)for(let r of e.squads){if(r.playerId!==t||r.pursuit!==null||r.order!==null)continue;let o=r.unitIds.map(t=>e.units[t]).filter(e=>e.alive);if(o.length===0||o.some(e=>e.isStrategist))continue;let s=o.reduce((e,t)=>e+t.x,0)/o.length,c=o.reduce((e,t)=>e+t.y,0)/o.length,l=a[0],u=1/0;for(let e of a){let t=(e.x-s)**2+(e.y-c)**2;t<u&&(u=t,l=e)}let d=o.map(i).filter(e=>e>0),f=Math.min(...d);if(!(f>=Fr&&Math.sqrt(u)<=f*Ir)){if(Math.max(...d)<Fr&&r.speed>=Rr){let t=Math.sqrt(u)||1,n=l.x+(l.x-s)/t*zr,i=l.y+(l.y-c)/t*zr;sr(e,r.id,n,i)}else lr(e,r.id,l.id);n.set(t,e.time+Lr);return}}}var Hr=`/assets/bgm001-H8dcLMyI.mp3`,Ur=`/assets/bgm002-BXTFirfK.mp3`,Wr=`/assets/bgm003-CIxaM2Ja.mp3`,Gr=`/assets/se001-BDQvb5Gu.mp3`,Kr=`/assets/se002-BjO1_hVx.mp3`,qr=`/assets/se003-duDo-tCz.mp3`,Jr=`/assets/jingle001-B2s3lU3I.mp3`;_();var Yr={se001:Gr,se002:Kr,se003:qr},Xr={title:Hr,battle1:Ur,battle2:Wr},Zr=[`battle1`,`battle2`];function Qr(e){return e===`battle`?Zr[Math.floor(Math.random()*Zr.length)]:e}var $r=.9,ei=.85,ti=6650,ni=.45,ri=900,ii=50,ai=300;function oi(e){f()||D(Yr[e],{volume:$r})}function si(e){return new Promise(t=>{let n=!1,r=0,i=null,a=()=>o(),o=()=>{n||(n=!0,window.clearTimeout(r),i?.stop(),e?.removeEventListener(`abort`,a),t())};if(e?.addEventListener(`abort`,a,{once:!0}),e?.aborted)return o();r=window.setTimeout(o,ti),!f()&&(i=D(Jr,{volume:ei,signal:e}),i.done.then(e=>{e===`ended`&&o()}))})}var ci=globalThis,li=ci.__rtsBgm??={channels:[],desired:null,timer:null,gestureWait:null},ui=[`pointerdown`,`keydown`,`touchend`];function di(){if(li.gestureWait){for(let e of ui)window.removeEventListener(e,li.gestureWait);li.gestureWait=null}}function fi(){if(li.gestureWait)return;let e=()=>{di(),yi()};li.gestureWait=e;for(let t of ui)window.addEventListener(t,e,{once:!0,passive:!0})}function pi(){li.timer!==null&&(clearInterval(li.timer),li.timer=null)}function mi(){li.timer===null&&(li.timer=window.setInterval(_i,ii))}function hi(e,t){_(),e.nextTryAt=t+ai;try{let t=e.audio.play();if(!t)return;e.pending=t.then(()=>{e.pending=null}).catch(t=>{e.pending=null,t?.name===`NotAllowedError`&&fi()})}catch{e.pending=null}}function gi(e){e.audio.volume=Math.max(0,Math.min(1,e.level*g()))}function _i(){let e=ii/ri*ni,t=Date.now(),n=!0;for(let r of li.channels){let i=r.target-r.level;Math.abs(i)<=e?r.level=r.target:(r.level=Math.max(0,Math.min(1,r.level+Math.sign(i)*e)),n=!1),gi(r),r.name===li.desired?r.audio.paused&&!li.gestureWait&&(n=!1,r.pending===null&&t>=r.nextTryAt&&hi(r,t)):r.level===0&&!r.audio.paused&&r.pending===null&&r.audio.pause()}n&&pi()}function vi(){di(),pi();for(let e of li.channels)e.audio.pause(),e.audio.removeAttribute(`src`);li.channels=[]}function yi(){if(u()||m()<=0){vi();return}try{for(let e of li.channels)e.target=e.name===li.desired?ni:0,e.name===li.desired&&(e.nextTryAt=0);if(li.desired!==null&&!li.channels.some(e=>e.name===li.desired)){let e=new Audio(Xr[li.desired]);e.loop=!0,e.preload=`auto`;let t=li.channels.some(e=>e.level>0)?0:ni,n={audio:e,name:li.desired,target:ni,level:t,pending:null,nextTryAt:0};gi(n),li.channels.push(n)}for(let e of li.channels)gi(e);_i(),mi()}catch{}}function bi(e){li.desired=e===null?null:Qr(e),yi()}h(()=>yi());var xi=Object.assign({"../../assets/output/strategists-war/audio/bgm001.mp3":`/assets/bgm001-H8dcLMyI.mp3`,"../../assets/output/strategists-war/audio/bgm002.mp3":`/assets/bgm002-BXTFirfK.mp3`,"../../assets/output/strategists-war/audio/bgm003.mp3":`/assets/bgm003-CIxaM2Ja.mp3`,"../../assets/output/strategists-war/audio/jingle001.mp3":`/assets/jingle001-B2s3lU3I.mp3`,"../../assets/output/strategists-war/audio/se001.mp3":`/assets/se001-BDQvb5Gu.mp3`,"../../assets/output/strategists-war/audio/se002.mp3":`/assets/se002-BjO1_hVx.mp3`,"../../assets/output/strategists-war/audio/se003.mp3":`/assets/se003-duDo-tCz.mp3`}),Si=new Set;function Ci(e){let t=N.se[e];if(!t||f())return;let n=Object.entries(xi).find(([e])=>e.endsWith(`/${t}`))?.[1];if(!n){Si.has(t)||(Si.add(t),console.warn(`[strategists-war] se.${e}: audio/${t} が見つかりません`));return}D(n,{volume:$r})}function wi(e,t){let n=[];for(let r of e(``,``).split(RegExp(`([])`)))r===``?n.push({name:t.armyName,color:t.color}):r===``?n.push({name:t.squadName,color:t.color}):r&&n.push(r);return n}var Ti=N.ui,Ei=200;function Di(e,t){return t.length===0?e:e.current?{...e,queue:[...e.queue,...t]}:{current:t[0],queue:t.slice(1),phase:`in`}}function Oi(e){let[t,...n]=e.queue;return t?{current:t,queue:n,phase:`in`}:{current:null,queue:[],phase:`in`}}function ki({source:e,format:t}){let[n,r]=(0,M.useState)({current:null,queue:[],phase:`in`}),i=(0,M.useRef)(new Map),a=(0,M.useRef)(0);(0,M.useEffect)(()=>{let n=window.setInterval(()=>{let n=[];for(let r of e())i.current.get(r.key)===!0&&!r.alive&&n.push({id:a.current++,parts:wi(t,r)}),i.current.set(r.key,r.alive);n.length>0&&r(e=>Di(e,n))},Ei);return()=>window.clearInterval(n)},[e,t]);let o=n.current?.id??null;return(0,M.useEffect)(()=>{o!==null&&Ci(`squadWiped`)},[o]),(0,M.useEffect)(()=>{if(o===null)return;let e=Math.max(0,Ti.toastDurationSec*1e3-Ti.toastFadeOutMs),t=window.setTimeout(()=>r(e=>e.current?.id===o?{...e,phase:`hold`}:e),Ti.toastCutInMs),n=window.setTimeout(()=>r(e=>e.current?.id===o?e.queue.length>0?Oi(e):{...e,phase:`out`}:e),e),i=window.setTimeout(()=>r(e=>e.current?.id===o?Oi(e):e),Ti.toastDurationSec*1e3);return()=>{window.clearTimeout(t),window.clearTimeout(n),window.clearTimeout(i)}},[o]),n.current===null?null:(0,W.jsx)(`div`,{className:`rts-wipe-toasts`,role:`status`,"aria-live":`polite`,children:(0,W.jsx)(`div`,{className:`rts-wipe-toast ${n.phase}`,style:{"--toast-in":`${Ti.toastCutInMs}ms`,"--toast-out":`${Ti.toastFadeOutMs}ms`},children:n.current.parts.map((e,t)=>typeof e==`string`?(0,W.jsx)(`span`,{children:e},t):(0,W.jsx)(`span`,{className:`rts-wipe-toast-name`,style:{color:e.color},children:e.name},t))},n.current.id)})}var Ai=480,ji=2500;function Mi({text:e}){let[t,n]=(0,M.useState)(!0);return(0,M.useEffect)(()=>{let e=window.setTimeout(()=>n(!1),ji);return()=>window.clearTimeout(e)},[]),t?(0,W.jsx)(`div`,{className:`rts-intro go`,role:`status`,children:(0,W.jsx)(`span`,{className:`rts-intro-go`,children:e})}):null}function Ni(e,t){let n=[],r=e=>n.push({kind:`name`,name:e.name,color:e.color});return t?[...new Set(e.map(e=>e.team))].sort((e,t)=>e-t).forEach((t,i)=>{i>0&&n.push({kind:`vs`}),e.filter(e=>e.team===t).forEach(r)}):e.forEach((e,t)=>{t>0&&n.push({kind:`vs`}),r(e)}),n}function Pi({lang:e,entrants:t,teamMode:n,onStart:r}){let i=t=>F(e,t),[a,o]=(0,M.useState)(`vs`),s=(0,M.useRef)(r);if((0,M.useEffect)(()=>{s.current=r},[r]),(0,M.useEffect)(()=>{let e=!0,t=0,n=new AbortController;return si(n.signal).then(()=>{e&&(s.current(),o(`go`),t=window.setTimeout(()=>{e&&o(`done`)},ji))}),()=>{e=!1,n.abort(),window.clearTimeout(t)}},[]),a===`done`)return null;let c=Ni(t,n);return(0,W.jsx)(`div`,{className:`rts-intro${a===`go`?` go`:``}`,role:`status`,children:a===`vs`?(0,W.jsx)(`div`,{className:`rts-intro-vs`,children:c.map((e,t)=>e.kind===`name`?(0,W.jsx)(`span`,{className:`rts-intro-name`,style:{color:e.color,animationDelay:`${t*Ai}ms`},children:e.name},t):(0,W.jsx)(`span`,{className:`rts-intro-sep`,style:{animationDelay:`${t*Ai}ms`},children:i(`battle.vs`)},t))}):(0,W.jsx)(`span`,{className:`rts-intro-go`,children:i(`battle.go`)})})}var Fi=1e3,Ii=300,Li=500;function Ri({lang:e,players:t,result:n,onExit:r}){let i=t=>F(e,t),a=n.rankingGroups[0]??[],o=e=>({alive:n.counts[e]??0,kills:n.kills?.[e]??0}),s=t.filter(e=>a.includes(e.id)),c=t.filter(e=>!a.includes(e.id)).sort((e,t)=>o(t.id).alive-o(e.id).alive),l=[...s.map(e=>({player:e,winner:!0})),...c.map(e=>({player:e,winner:!1}))],u=e=>e<s.length?0:Fi+(e-s.length)*Ii,d=l.length>0?u(l.length-1):0,[f,p]=(0,M.useState)(!1);return(0,M.useEffect)(()=>{let e=window.setTimeout(()=>p(!0),d+Li);return()=>window.clearTimeout(e)},[d]),(0,W.jsxs)(`div`,{className:`rts-result`,role:`dialog`,"aria-label":i(`battle.result.title`),children:[(0,W.jsx)(`div`,{className:`rts-result-list`,children:l.map(({player:e,winner:t},n)=>{let{alive:r,kills:a}=o(e.id);return(0,W.jsxs)(`div`,{className:`rts-result-row${t?` winner`:``}`,style:{animationDelay:`${u(n)}ms`},children:[t&&n===0&&(0,W.jsx)(`span`,{className:`rts-result-label`,children:i(`battle.result.winner`)}),(0,W.jsxs)(`div`,{className:`rts-result-card`,children:[(0,W.jsx)(`span`,{className:`rts-result-name`,style:{color:e.color},children:e.name}),(0,W.jsxs)(`span`,{className:`rts-result-stats`,children:[(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`i`,{children:i(`battle.result.alive`)}),r]}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`i`,{children:i(`battle.result.kills`)}),a]})]})]})]},e.id)})}),f&&(0,W.jsx)(`button`,{className:`rts-btn primary rts-result-back`,"data-se":`se003`,onClick:r,children:i(`battle.returnTop`)})]})}var zi=`/assets/rts-unit-dir3-attack-v1-D1liLEKl.webp`,Bi=`/assets/rts-unit-dir3-walk-v1-2wHgUKNt.webp`,Vi={generated_by:`documents/game_plans/strategists-war/work/tools/unit_art_harness.py pack`,image:`rts-unit-dir3-attack-v1.webp`,cell:256,cols:3,rows:8,views:[`front`,`right_3q`,`back`],notes:[`anchor_dx は px。描画側は板をこのぶん横へずらす（反転して使うセルでは符号を反転）`,`ground はコマ内の接地線 y。歩兵・軍師 234、騎兵 240（unit_art_spec）`],units:{strategist:{row:0,ground:234,anchor_dx:[.57,.4,.48],foot_spread:.17,source:`pipelines/unit-art-dir3/final/strategist_dir3_attack.png`,pixel_sha256:`2ed185569fdcaa6aede8121b4a480ab57af8f8fffbf6a66eedfb4bca4bd6440f`},inf_shield:{row:1,ground:234,anchor_dx:[1.94,2.08,.88],foot_spread:1.2,source:`pipelines/unit-art-dir3/final/inf_shield_dir3_attack.png`,pixel_sha256:`7ee5c699052bcb552ce79c51aad21d50f75bb8c4e92b7bde88c810834d4ac7f3`},inf_sword:{row:2,ground:234,anchor_dx:[1.34,1.62,1.5],foot_spread:.28,source:`pipelines/unit-art-dir3/final/inf_sword_dir3_attack.png`,pixel_sha256:`c08156ae3ab705f06d26352bd81873347dd934456ecb7bdea5cc8dd76d2f270c`},inf_spear:{row:3,ground:234,anchor_dx:[.21,32.78,-.32],foot_spread:33.1,source:`pipelines/unit-art-dir3/final/inf_spear_dir3_attack.png`,pixel_sha256:`e19d63832ca1a5e54daa8c5adc79a4fee3f91bf0c652393a80d18bc80daedf91`},inf_bow:{row:4,ground:234,anchor_dx:[4.91,4.04,1.87],foot_spread:3.04,source:`pipelines/unit-art-dir3/final/inf_bow_dir3_attack.png`,pixel_sha256:`2481a2c883d972f0ead2da953fbacffe4141d61831af55fa70dc55965d558012`},cav_sword:{row:5,ground:240,anchor_dx:[-1.81,-2.59,5.81],foot_spread:8.4,source:`pipelines/unit-art-dir3/final/cav_sword_dir3_attack.png`,pixel_sha256:`b92a13451a625937ba12716b44f4a878664b17bf99cd92585688b76a78e6a174`},cav_spear:{row:6,ground:240,anchor_dx:[6.21,49.32,34.72],foot_spread:43.11,source:`pipelines/unit-art-dir3/final/cav_spear_dir3_attack.png`,pixel_sha256:`e4514174cf05b4fca2c6ce91a65d89f08ab779b88c40092a0ee39b88c59cea4e`},cav_bow:{row:7,ground:240,anchor_dx:[1.23,1.21,.99],foot_spread:.24,source:`pipelines/unit-art-dir3/final/cav_bow_dir3_attack.png`,pixel_sha256:`ee7c1cc8791ee41ac27b590ed8114470d7ebd3b11d27499f014a682b0b3ad989`}}},Hi={generated_by:`documents/game_plans/strategists-war/work/tools/unit_art_harness.py pack`,image:`rts-unit-dir3-walk-v1.webp`,cell:256,cols:3,rows:8,views:[`front`,`right_3q`,`back`],notes:[`anchor_dx は px。描画側は板をこのぶん横へずらす（反転して使うセルでは符号を反転）`,`ground はコマ内の接地線 y。歩兵・軍師 234、騎兵 240（unit_art_spec）`],units:{strategist:{row:0,ground:234,anchor_dx:[.13,-1.14,.81],foot_spread:1.95,source:`pipelines/unit-art-dir3/final/strategist_dir3_walk.png`,pixel_sha256:`ab0c3e1c59d29bc622db4b87b7aa23dbaf229159c2bc591a79a3086d3a7081f4`},inf_shield:{row:1,ground:234,anchor_dx:[5.25,1.53,-6.89],foot_spread:12.14,source:`pipelines/unit-art-dir3/final/inf_shield_dir3_walk.png`,pixel_sha256:`c696fed5a1b8fea770a5ab65b18c030610acb3d0d0f33e403ebdac193f040773`},inf_sword:{row:2,ground:234,anchor_dx:[4.3,.78,-4.22],foot_spread:8.52,source:`pipelines/unit-art-dir3/final/inf_sword_dir3_walk.png`,pixel_sha256:`da5965cb2cf0662a84942878ff90e018e64494ae3497748878b78881d7122be7`},inf_spear:{row:3,ground:234,anchor_dx:[1.34,2.68,.33],foot_spread:2.35,source:`pipelines/unit-art-dir3/final/inf_spear_dir3_walk.png`,pixel_sha256:`74f59b4142a5931535c7db72e3a9af6c175b33a4b40d3e304b5fda2219624f7f`},inf_bow:{row:4,ground:234,anchor_dx:[3.82,1.63,-4.08],foot_spread:7.9,source:`pipelines/unit-art-dir3/final/inf_bow_dir3_walk.png`,pixel_sha256:`238e20ba0aa9254db128da723f99ad2bff8a3100233cee5ed680bca07a64a53a`},cav_sword:{row:5,ground:240,anchor_dx:[-1.63,1.73,-.36],foot_spread:3.36,source:`pipelines/unit-art-dir3/final/cav_sword_dir3_walk.png`,pixel_sha256:`a5d294f644757c6972e249b7dbf292c38e0344fe21e9fecab03befbcda80ed23`},cav_spear:{row:6,ground:240,anchor_dx:[-2.89,1.15,-3.12],foot_spread:4.27,source:`pipelines/unit-art-dir3/final/cav_spear_dir3_walk.png`,pixel_sha256:`a4b8cf829dad6674f3dc0ccda1153112a423ff0761c12135fa1c793dc71136f1`},cav_bow:{row:7,ground:240,anchor_dx:[-.46,.29,1.4],foot_spread:1.86,source:`pipelines/unit-art-dir3/final/cav_bow_dir3_walk.png`,pixel_sha256:`648e15d20fb6a2a1d7f75362d1cf7876327fd953a44344804f500ead778b2e2b`}}},Ui=1e3,Wi=1001,Gi=1002,Ki=1003,qi=1004,Ji=1005,Yi=1006,Xi=1007,Zi=1008,Qi=1009,$i=1010,ea=1011,ta=1012,na=1013,ra=1014,ia=1015,aa=1016,oa=1017,sa=1018,ca=1020,la=35902,ua=35899,da=1021,fa=1022,pa=1023,ma=1026,ha=1027,ga=1028,_a=1029,va=1030,ya=1031,ba=1033,xa=33776,Sa=33777,Ca=33778,wa=33779,Ta=35840,Ea=35841,Da=35842,Oa=35843,ka=36196,Aa=37492,ja=37496,Ma=37488,Na=37489,Pa=37490,Fa=37491,Ia=37808,La=37809,Ra=37810,za=37811,Ba=37812,Va=37813,Ha=37814,Ua=37815,Wa=37816,Ga=37817,Ka=37818,qa=37819,Ja=37820,Ya=37821,Xa=36492,Za=36494,Qa=36495,$a=36283,eo=36284,to=36285,no=36286,ro=2300,io=2301,ao=2302,oo=2303,so=2400,co=2401,lo=2402,uo=3200,fo=`srgb`,po=`srgb-linear`,mo=`linear`,ho=`srgb`,go=7680,_o=35044,vo=35048,yo=2e3;function bo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function So(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Co(){let e=So(`canvas`);return e.style.display=`block`,e}var wo={};function To(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Eo(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=Eo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function q(...e){e=Eo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Do(...e){let t=e.join(` `);t in wo||(wo[t]=!0,K(...e))}function Oo(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ko={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ao=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},jo=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Mo=1234567,No=Math.PI/180,Po=180/Math.PI;function Fo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jo[e&255]+jo[e>>8&255]+jo[e>>16&255]+jo[e>>24&255]+`-`+jo[t&255]+jo[t>>8&255]+`-`+jo[t>>16&15|64]+jo[t>>24&255]+`-`+jo[n&63|128]+jo[n>>8&255]+`-`+jo[n>>16&255]+jo[n>>24&255]+jo[r&255]+jo[r>>8&255]+jo[r>>16&255]+jo[r>>24&255]).toLowerCase()}function Io(e,t,n){return Math.max(t,Math.min(n,e))}function Lo(e,t){return(e%t+t)%t}function Ro(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function zo(e,t,n){return e===t?0:(n-e)/(t-e)}function Bo(e,t,n){return(1-n)*e+n*t}function Vo(e,t,n,r){return Bo(e,t,1-Math.exp(-n*r))}function Ho(e,t=1){return t-Math.abs(Lo(e,t*2)-t)}function Uo(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Wo(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Go(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ko(e,t){return e+Math.random()*(t-e)}function qo(e){return e*(.5-Math.random())}function Jo(e){e!==void 0&&(Mo=e);let t=Mo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yo(e){return e*No}function Xo(e){return e*Po}function Zo(e){return!(e&e-1)&&e!==0}function Qo(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function $o(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function es(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:K(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ts(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ns(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var rs={DEG2RAD:No,RAD2DEG:Po,generateUUID:Fo,clamp:Io,euclideanModulo:Lo,mapLinear:Ro,inverseLerp:zo,lerp:Bo,damp:Vo,pingpong:Ho,smoothstep:Uo,smootherstep:Wo,randInt:Go,randFloat:Ko,randFloatSpread:qo,seededRandom:Jo,degToRad:Yo,radToDeg:Xo,isPowerOfTwo:Zo,ceilPowerOfTwo:Qo,floorPowerOfTwo:$o,setQuaternionFromProperEuler:es,normalize:ns,denormalize:ts},J=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Io(this.x,e.x,t.x),this.y=Io(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Io(this.x,e,t),this.y=Io(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Io(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Io(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},is=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Io(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(os.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(os.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Io(this.x,e.x,t.x),this.y=Io(this.y,e.y,t.y),this.z=Io(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Io(this.x,e,t),this.y=Io(this.y,e,t),this.z=Io(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Io(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return as.copy(this).projectOnVector(e),this.sub(as)}reflect(e){return this.sub(as.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Io(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},as=new Y,os=new is,X=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Do(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ss.makeScale(e,t)),this}rotate(e){return Do(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return Do(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ss=new X,cs=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ls=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function us(){let e={enabled:!0,workingColorSpace:po,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=fs(e.r),e.g=fs(e.g),e.b=fs(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ps(e.r),e.g=ps(e.g),e.b=ps(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mo:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Do(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Do(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[po]:{primaries:t,whitePoint:r,transfer:mo,toXYZ:cs,fromXYZ:ls,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fo},outputColorSpaceConfig:{drawingBufferColorSpace:fo}},[fo]:{primaries:t,whitePoint:r,transfer:ho,toXYZ:cs,fromXYZ:ls,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fo}}}),e}var ds=us();function fs(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ps(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ms,hs=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=So(`canvas`)),ms.width=e.width,ms.height=e.height;let t=ms.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=So(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=fs(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(fs(t[e]/255)*255):t[e]=fs(t[e]);return{data:t,width:e.width,height:e.height}}return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},gs=0,_s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gs++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(vs(r[t].image)):e.push(vs(r[t]))}else e=vs(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function vs(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?hs.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var ys=0,bs=new Y,xs=class e extends Ao{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Wi,i=Wi,a=Yi,o=Zi,s=pa,c=Qi,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ys++}),this.uuid=Fo(),this.name=``,this.source=new _s(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bs).x}get height(){return this.source.getSize(bs).y}get depth(){return this.source.getSize(bs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x-=Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Gi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y-=Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Gi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xs.DEFAULT_IMAGE=null,xs.DEFAULT_MAPPING=300,xs.DEFAULT_ANISOTROPY=1;var Ss=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Io(this.x,e.x,t.x),this.y=Io(this.y,e.y,t.y),this.z=Io(this.z,e.z,t.z),this.w=Io(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Io(this.x,e,t),this.y=Io(this.y,e,t),this.z=Io(this.z,e,t),this.w=Io(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Io(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cs=class extends Ao{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ss(0,0,e,t),this.scissorTest=!1,this.viewport=new Ss(0,0,e,t),this.textures=[];let r=new xs({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},ws=class extends Cs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ts=class extends xs{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Es=class extends xs{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ds=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Os.setFromMatrixColumn(e,0).length(),i=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(As,e,js)}lookAt(e,t,n){let r=this.elements;return Ps.subVectors(e,t),Ps.lengthSq()===0&&(Ps.z=1),Ps.normalize(),Ms.crossVectors(n,Ps),Ms.lengthSq()===0&&(Math.abs(n.z)===1?Ps.x+=1e-4:Ps.z+=1e-4,Ps.normalize(),Ms.crossVectors(n,Ps)),Ms.normalize(),Ns.crossVectors(Ps,Ms),r[0]=Ms.x,r[4]=Ns.x,r[8]=Ps.x,r[1]=Ms.y,r[5]=Ns.y,r[9]=Ps.y,r[2]=Ms.z,r[6]=Ns.z,r[10]=Ps.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*te+c*P,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*te+f*P,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*te+g*P,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*te+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Os.set(r[0],r[1],r[2]).length(),o=Os.set(r[4],r[5],r[6]).length(),s=Os.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ks.copy(this);let c=1/a,l=1/o,u=1/s;return ks.elements[0]*=c,ks.elements[1]*=c,ks.elements[2]*=c,ks.elements[4]*=l,ks.elements[5]*=l,ks.elements[6]*=l,ks.elements[8]*=u,ks.elements[9]*=u,ks.elements[10]*=u,t.setFromRotationMatrix(ks),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=yo,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yo,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Os=new Y,ks=new Ds,As=new Y(0,0,0),js=new Y(1,1,1),Ms=new Y,Ns=new Y,Ps=new Y,Fs=new Ds,Is=new is,Ls=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Io(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Io(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Io(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Io(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Io(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Io(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Is.setFromEuler(this),this.setFromQuaternion(Is,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ls.DEFAULT_ORDER=`XYZ`;var Rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},zs=0,Bs=new Y,Vs=new is,Hs=new Ds,Us=new Y,Ws=new Y,Gs=new Y,Ks=new is,qs=new Y(1,0,0),Js=new Y(0,1,0),Ys=new Y(0,0,1),Xs={type:`added`},Zs={type:`removed`},Qs={type:`childadded`,child:null},$s={type:`childremoved`,child:null},ec=class e extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zs++}),this.uuid=Fo(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Ls,r=new is,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ds},normalMatrix:{value:new X}}),this.matrix=new Ds,this.matrixWorld=new Ds,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(qs,e)}rotateY(e){return this.rotateOnAxis(Js,e)}rotateZ(e){return this.rotateOnAxis(Ys,e)}translateOnAxis(e,t){return Bs.copy(e).applyQuaternion(this.quaternion),this.position.add(Bs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qs,e)}translateY(e){return this.translateOnAxis(Js,e)}translateZ(e){return this.translateOnAxis(Ys,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hs.lookAt(Ws,Us,this.up):Hs.lookAt(Us,Ws,this.up),this.quaternion.setFromRotationMatrix(Hs),r&&(Hs.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(Hs),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(q(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xs),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):q(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zs),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xs),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Gs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Ks,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};ec.DEFAULT_UP=new Y(0,1,0),ec.DEFAULT_MATRIX_AUTO_UPDATE=!0,ec.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tc=class extends ec{constructor(){super(),this.isGroup=!0,this.type=`Group`}},nc={type:`move`},rc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nc)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ac={h:0,s:0,l:0},oc={h:0,s:0,l:0};function sc(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var cc=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fo){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ds.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ds.workingColorSpace){return this.r=e,this.g=t,this.b=n,ds.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ds.workingColorSpace){if(e=Lo(e,1),t=Io(t,0,1),n=Io(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=sc(i,r,e+1/3),this.g=sc(i,r,e),this.b=sc(i,r,e-1/3)}return ds.colorSpaceToWorking(this,r),this}setStyle(e,t=fo){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fo){let n=ic[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fo){return ds.workingToColorSpace(lc.copy(this),e),Math.round(Io(lc.r*255,0,255))*65536+Math.round(Io(lc.g*255,0,255))*256+Math.round(Io(lc.b*255,0,255))}getHexString(e=fo){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ds.workingColorSpace){ds.workingToColorSpace(lc.copy(this),t);let n=lc.r,r=lc.g,i=lc.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=ds.workingColorSpace){return ds.workingToColorSpace(lc.copy(this),t),e.r=lc.r,e.g=lc.g,e.b=lc.b,e}getStyle(e=fo){ds.workingToColorSpace(lc.copy(this),e);let t=lc.r,n=lc.g,r=lc.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ac),this.setHSL(ac.h+e,ac.s+t,ac.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ac),e.getHSL(oc);let n=Bo(ac.h,oc.h,t),r=Bo(ac.s,oc.s,t),i=Bo(ac.l,oc.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},lc=new cc;cc.NAMES=ic;var uc=class extends ec{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ls,this.environmentIntensity=1,this.environmentRotation=new Ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},dc=new Y,fc=new Y,pc=new Y,mc=new Y,hc=new Y,gc=new Y,_c=new Y,vc=new Y,yc=new Y,bc=new Y,xc=new Ss,Sc=new Ss,Cc=new Ss,wc=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),dc.subVectors(e,t),r.cross(dc);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){dc.subVectors(r,t),fc.subVectors(n,t),pc.subVectors(e,t);let a=dc.dot(dc),o=dc.dot(fc),s=dc.dot(pc),c=fc.dot(fc),l=fc.dot(pc),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mc)!==null&&mc.x>=0&&mc.y>=0&&mc.x+mc.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,mc)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,mc.x),s.addScaledVector(a,mc.y),s.addScaledVector(o,mc.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return xc.setScalar(0),Sc.setScalar(0),Cc.setScalar(0),xc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xc,i.x),a.addScaledVector(Sc,i.y),a.addScaledVector(Cc,i.z),a}static isFrontFacing(e,t,n,r){return dc.subVectors(n,t),fc.subVectors(e,t),dc.cross(fc).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dc.subVectors(this.c,this.b),fc.subVectors(this.a,this.b),dc.cross(fc).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;hc.subVectors(r,n),gc.subVectors(i,n),vc.subVectors(e,n);let s=hc.dot(vc),c=gc.dot(vc);if(s<=0&&c<=0)return t.copy(n);yc.subVectors(e,r);let l=hc.dot(yc),u=gc.dot(yc);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(hc,a);bc.subVectors(e,i);let f=hc.dot(bc),p=gc.dot(bc);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(gc,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return _c.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(_c,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(hc,a).addScaledVector(gc,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tc=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dc.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dc.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Dc):Dc.fromBufferAttribute(r,t),Dc.applyMatrix4(e.matrixWorld),this.expandByPoint(Dc);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Oc.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dc),Dc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fc),Ic.subVectors(this.max,Fc),kc.subVectors(e.a,Fc),Ac.subVectors(e.b,Fc),jc.subVectors(e.c,Fc),Mc.subVectors(Ac,kc),Nc.subVectors(jc,Ac),Pc.subVectors(kc,jc);let t=[0,-Mc.z,Mc.y,0,-Nc.z,Nc.y,0,-Pc.z,Pc.y,Mc.z,0,-Mc.x,Nc.z,0,-Nc.x,Pc.z,0,-Pc.x,-Mc.y,Mc.x,0,-Nc.y,Nc.x,0,-Pc.y,Pc.x,0];return!zc(t,kc,Ac,jc,Ic)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,kc,Ac,jc,Ic))?!1:(Lc.crossVectors(Mc,Nc),t=[Lc.x,Lc.y,Lc.z],zc(t,kc,Ac,jc,Ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dc).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dc).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ec[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ec[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ec[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ec[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ec[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ec[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ec[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ec[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ec),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ec=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Dc=new Y,Oc=new Tc,kc=new Y,Ac=new Y,jc=new Y,Mc=new Y,Nc=new Y,Pc=new Y,Fc=new Y,Ic=new Y,Lc=new Y,Rc=new Y;function zc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Rc.fromArray(e,a);let o=i.x*Math.abs(Rc.x)+i.y*Math.abs(Rc.y)+i.z*Math.abs(Rc.z),s=t.dot(Rc),c=n.dot(Rc),l=r.dot(Rc);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Bc=new Y,Vc=new J,Hc=0,Uc=class extends Ao{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bc.fromBufferAttribute(this,t),Bc.applyMatrix3(e),this.setXYZ(t,Bc.x,Bc.y,Bc.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bc.fromBufferAttribute(this,t),Bc.applyMatrix4(e),this.setXYZ(t,Bc.x,Bc.y,Bc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bc.fromBufferAttribute(this,t),Bc.applyNormalMatrix(e),this.setXYZ(t,Bc.x,Bc.y,Bc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bc.fromBufferAttribute(this,t),Bc.transformDirection(e),this.setXYZ(t,Bc.x,Bc.y,Bc.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ns(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=ns(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=ns(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ns(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=ns(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ns(t,this.array),n=ns(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ns(t,this.array),n=ns(n,this.array),r=ns(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ns(t,this.array),n=ns(n,this.array),r=ns(r,this.array),i=ns(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Wc=class extends Uc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Gc=class extends Uc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Kc=class extends Uc{constructor(e,t,n){super(new Float32Array(e),t,n)}},qc=new Tc,Jc=new Y,Yc=new Y,Xc=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jc.subVectors(e,this.center);let t=Jc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Jc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jc.copy(e.center).add(Yc)),this.expandByPoint(Jc.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zc=0,Qc=new Ds,$c=new ec,el=new Y,tl=new Tc,nl=new Tc,rl=new Y,il=class e extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Fo(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bo(e)?Gc:Wc)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qc.makeRotationFromQuaternion(e),this.applyMatrix4(Qc),this}rotateX(e){return Qc.makeRotationX(e),this.applyMatrix4(Qc),this}rotateY(e){return Qc.makeRotationY(e),this.applyMatrix4(Qc),this}rotateZ(e){return Qc.makeRotationZ(e),this.applyMatrix4(Qc),this}translate(e,t,n){return Qc.makeTranslation(e,t,n),this.applyMatrix4(Qc),this}scale(e,t,n){return Qc.makeScale(e,t,n),this.applyMatrix4(Qc),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(el).negate(),this.translate(el.x,el.y,el.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Kc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];tl.setFromBufferAttribute(n),this.morphTargetsRelative?(rl.addVectors(this.boundingBox.min,tl.min),this.boundingBox.expandByPoint(rl),rl.addVectors(this.boundingBox.max,tl.max),this.boundingBox.expandByPoint(rl)):(this.boundingBox.expandByPoint(tl.min),this.boundingBox.expandByPoint(tl.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&q(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(tl.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];nl.setFromBufferAttribute(n),this.morphTargetsRelative?(rl.addVectors(tl.min,nl.min),tl.expandByPoint(rl),rl.addVectors(tl.max,nl.max),tl.expandByPoint(rl)):(tl.expandByPoint(nl.min),tl.expandByPoint(nl.max))}tl.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)rl.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(rl));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)rl.fromBufferAttribute(a,t),o&&(el.fromBufferAttribute(e,t),rl.add(el)),r=Math.max(r,n.distanceToSquared(rl))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&q(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){q(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Uc(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new J,f=new J,p=new J,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Uc(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rl.fromBufferAttribute(e,t),rl.normalize(),e.setXYZ(t,rl.x,rl.y,rl.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Uc(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},al=0,ol=class extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=Fo(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new cc(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new cc().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new J().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},sl=new Y,cl=new Y,ll=new Y,ul=new Y,dl=new Y,fl=new Y,pl=new Y,ml=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sl)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sl.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sl.copy(this.origin).addScaledVector(this.direction,t),sl.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cl.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),ul.copy(this.origin).sub(cl);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ll),o=ul.dot(this.direction),s=-ul.dot(ll),c=ul.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(cl).addScaledVector(ll,d),f}intersectSphere(e,t){sl.subVectors(e.center,this.origin);let n=sl.dot(this.direction),r=sl.dot(sl)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sl)!==null}intersectTriangle(e,t,n,r,i){dl.subVectors(t,e),fl.subVectors(n,e),pl.crossVectors(dl,fl);let a=this.direction.dot(pl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ul.subVectors(this.origin,e);let s=o*this.direction.dot(fl.crossVectors(ul,fl));if(s<0)return null;let c=o*this.direction.dot(dl.cross(ul));if(c<0||s+c>a)return null;let l=-o*ul.dot(pl);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hl=class extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new cc(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gl=new Ds,_l=new ml,vl=new Xc,yl=new Y,bl=new Y,xl=new Y,Sl=new Y,Cl=new Y,wl=new Y,Tl=new Y,El=new Y,Dl=class extends ec{constructor(e=new il,t=new hl){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){wl.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Cl.fromBufferAttribute(s,e),a?wl.addScaledVector(Cl,r):wl.addScaledVector(Cl.sub(t),r))}t.add(wl)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(i),_l.copy(e.ray).recast(e.near),!(vl.containsPoint(_l.origin)===!1&&(_l.intersectSphere(vl,yl)===null||_l.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(gl.copy(i).invert(),_l.copy(e.ray).applyMatrix4(gl),(n.boundingBox===null||_l.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,_l)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=kl(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=kl(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=kl(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=kl(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ol(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;El.copy(s),El.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(El);return l<n.near||l>n.far?null:{distance:l,point:El.clone(),object:e}}function kl(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,bl),e.getVertexPosition(c,xl),e.getVertexPosition(l,Sl);let u=Ol(e,t,n,r,bl,xl,Sl,Tl);if(u){let e=new Y;wc.getBarycoord(Tl,bl,xl,Sl,e),i&&(u.uv=wc.getInterpolatedAttribute(i,s,c,l,e,new J)),a&&(u.uv1=wc.getInterpolatedAttribute(a,s,c,l,e,new J)),o&&(u.normal=wc.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};wc.getNormal(bl,xl,Sl,t.normal),u.face=t,u.barycoord=e}return u}var Al=class extends xs{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ki,l=Ki,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jl=class extends Uc{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ml=new Y,Nl=new Y,Pl=new X,Fl=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ml.subVectors(n,t).cross(Nl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ml),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pl.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Il=new Xc,Ll=new J(.5,.5),Rl=new Y,zl=class{constructor(e=new Fl,t=new Fl,n=new Fl,r=new Fl,i=new Fl,a=new Fl){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yo,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Il.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Il.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Il)}intersectsSprite(e){return Il.center.set(0,0,0),Il.radius=.7071067811865476+Ll.distanceTo(e.center),Il.applyMatrix4(e.matrixWorld),this.intersectsSphere(Il)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bl=class extends ol{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new cc(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new Y,Hl=new Y,Ul=new Ds,Wl=new ml,Gl=new Xc,Kl=new Y,ql=new Y,Jl=class extends ec{constructor(e=new il,t=new Bl){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Vl.fromBufferAttribute(t,e-1),Hl.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Vl.distanceTo(Hl);e.setAttribute(`lineDistance`,new Kc(n,1))}else K(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(r),Gl.radius+=i,e.ray.intersectsSphere(Gl)===!1)return;Ul.copy(r).invert(),Wl.copy(e.ray).applyMatrix4(Ul);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Yl(this,e,Wl,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Yl(this,e,Wl,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Yl(this,e,Wl,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Yl(this,e,Wl,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Yl(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Vl.fromBufferAttribute(s,i),Hl.fromBufferAttribute(s,a),n.distanceSqToSegment(Vl,Hl,Kl,ql)>r)return;Kl.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Kl);if(!(c<t.near||c>t.far))return{distance:c,point:ql.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Xl=class extends xs{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends xs{constructor(e,t,n=ra,r,i,a,o=Ki,s=Ki,c,l=ma,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ql=class extends Zl{constructor(e,t=ra,n=301,r,i,a=Ki,o=Ki,s,c=ma){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$l=class extends xs{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},eu=class e extends il{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Kc(c,3)),this.setAttribute(`normal`,new Kc(l,3)),this.setAttribute(`uv`,new Kc(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},tu=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){K(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new J:new Y);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Y,r=[],i=[],a=[],o=new Y,s=new Ds;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Y)}i[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Io(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Io(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},nu=class extends tu{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new J){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ru=class extends nu{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function iu(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var au=new Y,ou=new Y,su=new iu,cu=new iu,lu=new iu,uu=class extends tu{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Y){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ou.subVectors(r[0],r[1]).add(r[0]),c=ou);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(au.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=au),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),su.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),cu.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),lu.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(su.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),cu.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),lu.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(su.calc(s),cu.calc(s),lu.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Y().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function du(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function fu(e,t){let n=1-e;return n*n*t}function pu(e,t){return 2*(1-e)*e*t}function mu(e,t){return e*e*t}function hu(e,t,n,r){return fu(e,t)+pu(e,n)+mu(e,r)}function gu(e,t){let n=1-e;return n*n*n*t}function _u(e,t){let n=1-e;return 3*n*n*e*t}function vu(e,t){return 3*(1-e)*e*e*t}function yu(e,t){return e*e*e*t}function bu(e,t,n,r,i){return gu(e,t)+_u(e,n)+vu(e,r)+yu(e,i)}var xu=class extends tu{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(bu(e,r.x,i.x,a.x,o.x),bu(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Su=class extends tu{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(bu(e,r.x,i.x,a.x,o.x),bu(e,r.y,i.y,a.y,o.y),bu(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cu=class extends tu{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wu=class extends tu{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tu=class extends tu{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(hu(e,r.x,i.x,a.x),hu(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends tu{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(hu(e,r.x,i.x,a.x),hu(e,r.y,i.y,a.y),hu(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Du=class extends tu{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new J){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(du(o,s.x,c.x,l.x,u.x),du(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:ru,CatmullRomCurve3:uu,CubicBezierCurve:xu,CubicBezierCurve3:Su,EllipseCurve:nu,LineCurve:Cu,LineCurve3:wu,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:Eu,SplineCurve:Du}),ku=class extends tu{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ou[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ou[n.type]().fromJSON(n))}return this}},Au=class extends ku{constructor(e){super(),this.type=`Path`,this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Cu(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Tu(this.currentPoint.clone(),new J(e,t),new J(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new xu(this.currentPoint.clone(),new J(e,t),new J(n,r),new J(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Du([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new nu(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ju=class extends Au{constructor(e){super(e),this.uuid=Fo(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Au().fromJSON(n))}return this}};function Mu(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Nu(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Bu(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Fu(a,o,n,s,c,l,0),o}function Nu(e,t,n,r,i){let a;if(i===ud(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=sd(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=sd(i/r|0,e[i],e[i+1],a);return a&&$u(a,a.next)&&(cd(a),a=a.next),a}function Pu(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&($u(n,n.next)||Qu(n.prev,n,n.next)===0)){if(cd(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Fu(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Gu(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Lu(e,r,i,a):Iu(e)){t.push(c.i,e.i,l.i),cd(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Ru(Pu(e),t),Fu(e,t,n,r,i,a,2)):o===2&&zu(e,t,n,r,i,a):Fu(Pu(e),t,n,r,i,a,1);break}}}function Iu(e){let t=e.prev,n=e,r=e.next;if(Qu(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Xu(i,s,a,c,o,l,m.x,m.y)&&Qu(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Lu(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Qu(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=qu(p,m,t,n,r),v=qu(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Xu(s,u,c,d,l,f,y.x,y.y)&&Qu(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Xu(s,u,c,d,l,f,b.x,b.y)&&Qu(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Xu(s,u,c,d,l,f,y.x,y.y)&&Qu(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Xu(s,u,c,d,l,f,b.x,b.y)&&Qu(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ru(e,t){let n=e;do{let r=n.prev,i=n.next.next;!$u(r,i)&&ed(r,n,n.next,i)&&id(r,i)&&id(i,r)&&(t.push(r.i,n.i,i.i),cd(n),cd(n.next),n=e=i),n=n.next}while(n!==e);return Pu(n)}function zu(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Zu(o,e)){let s=od(o,e);o=Pu(o,o.next),s=Pu(s,s.next),Fu(o,t,n,r,i,a,0),Fu(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Bu(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Nu(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ju(o))}i.sort(Vu);for(let e=0;e<i.length;e++)n=Hu(i[e],n);return n}function Vu(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Hu(e,t){let n=Uu(e,t);if(!n)return t;let r=od(n,e);return Pu(r,r.next),Pu(n,n.next)}function Uu(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if($u(e,n))return n;do{if($u(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Yu(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);id(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Wu(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Wu(e,t){return Qu(e.prev,e,t.prev)<0&&Qu(t.next,e,e.next)<0}function Gu(e,t,n,r){let i=e;do i.z===0&&(i.z=qu(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ku(i)}function Ku(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function qu(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ju(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Yu(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Xu(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Yu(e,t,n,r,i,a,o,s)}function Zu(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!rd(e,t)&&(id(e,t)&&id(t,e)&&ad(e,t)&&(Qu(e.prev,e,t.prev)||Qu(e,t.prev,t))||$u(e,t)&&Qu(e.prev,e,e.next)>0&&Qu(t.prev,t,t.next)>0)}function Qu(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function $u(e,t){return e.x===t.x&&e.y===t.y}function ed(e,t,n,r){let i=nd(Qu(e,t,n)),a=nd(Qu(e,t,r)),o=nd(Qu(n,r,e)),s=nd(Qu(n,r,t));return!!(i!==a&&o!==s||i===0&&td(e,n,t)||a===0&&td(e,r,t)||o===0&&td(n,e,r)||s===0&&td(n,t,r))}function td(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function nd(e){return e>0?1:e<0?-1:0}function rd(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ed(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function id(e,t){return Qu(e.prev,e,e.next)<0?Qu(e,t,e.next)>=0&&Qu(e,e.prev,t)>=0:Qu(e,t,e.prev)<0||Qu(e,e.next,t)<0}function ad(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function od(e,t){let n=ld(e.i,e.x,e.y),r=ld(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function sd(e,t,n,r){let i=ld(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function cd(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ld(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ud(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var dd=class{static triangulate(e,t,n=2){return Mu(e,t,n)}},fd=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];pd(e),md(n,e);let a=e.length;t.forEach(pd);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,md(n,t[e]);let o=dd.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function pd(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function md(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var hd=class e extends il{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Kc(p,3)),this.setAttribute(`normal`,new Kc(m,3)),this.setAttribute(`uv`,new Kc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},gd=class e extends il{constructor(e=new ju([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Kc(r,3)),this.setAttribute(`normal`,new Kc(i,3)),this.setAttribute(`uv`,new Kc(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;fd.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];fd.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=fd.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _d(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function _d(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function vd(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(bd(i))i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(bd(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function yd(e){let t={};for(let n=0;n<e.length;n++){let r=vd(e[n]);for(let e in r)t[e]=r[e]}return t}function bd(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function xd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Sd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ds.workingColorSpace}var Cd={clone:vd,merge:yd},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ed=class extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vd(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new cc().setHex(r.value);break;case`v2`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ss().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new X().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ds().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dd=class extends Ed{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Od=class extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=uo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kd=class extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ad=class extends Bl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function jd(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Md=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Nd=class extends Md{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:so,endingEnd:so}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case co:i=e,o=2*t-n;break;case lo:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case co:a=e,s=2*n-t;break;case lo:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Pd=class extends Md{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fd=class extends Md{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Id=class extends Md{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ld=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=jd(t,this.TimeBufferType),this.values=jd(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jd(e.times,Array),values:jd(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Id(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break;case oo:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(q(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(q(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){q(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){q(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&xo(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){q(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ao,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ld.prototype.ValueTypeName=``,Ld.prototype.TimeBufferType=Float32Array,Ld.prototype.ValueBufferType=Float32Array,Ld.prototype.DefaultInterpolation=io;var Rd=class extends Ld{constructor(e,t,n){super(e,t,n)}};Rd.prototype.ValueTypeName=`bool`,Rd.prototype.ValueBufferType=Array,Rd.prototype.DefaultInterpolation=ro,Rd.prototype.InterpolantFactoryMethodLinear=void 0,Rd.prototype.InterpolantFactoryMethodSmooth=void 0;var zd=class extends Ld{constructor(e,t,n,r){super(e,t,n,r)}};zd.prototype.ValueTypeName=`color`;var Bd=class extends Ld{constructor(e,t,n,r){super(e,t,n,r)}};Bd.prototype.ValueTypeName=`number`;var Vd=class extends Md{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)is.slerpFlat(i,0,a,c-o,a,c,s);return i}},Hd=class extends Ld{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Vd(this.times,this.values,this.getValueSize(),e)}};Hd.prototype.ValueTypeName=`quaternion`,Hd.prototype.InterpolantFactoryMethodSmooth=void 0;var Ud=class extends Ld{constructor(e,t,n){super(e,t,n)}};Ud.prototype.ValueTypeName=`string`,Ud.prototype.ValueBufferType=Array,Ud.prototype.DefaultInterpolation=ro,Ud.prototype.InterpolantFactoryMethodLinear=void 0,Ud.prototype.InterpolantFactoryMethodSmooth=void 0;var Wd=class extends Ld{constructor(e,t,n,r){super(e,t,n,r)}};Wd.prototype.ValueTypeName=`vector`;var Gd={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Kd(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Kd(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Kd(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var qd=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Jd=class{constructor(e){this.manager=e===void 0?qd:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jd.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Yd=new WeakMap,Xd=class extends Jd{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Gd.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Yd.get(a);e===void 0&&(e=[],Yd.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=So(`img`);function s(){l(),t&&t(this);let n=Yd.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Yd.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Gd.remove(`image:${e}`);let n=Yd.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Yd.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gd.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Zd=class extends Jd{constructor(e){super(e)}load(e,t,n,r){let i=new xs,a=new Xd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Qd=new Y,$d=new is,ef=new Y,tf=class extends ec{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ds,this.projectionMatrix=new Ds,this.projectionMatrixInverse=new Ds,this.coordinateSystem=yo,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qd,$d,ef),ef.x===1&&ef.y===1&&ef.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qd,$d,ef.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qd,$d,ef),ef.x===1&&ef.y===1&&ef.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qd,$d,ef.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nf=new Y,rf=new J,af=new J,of=class extends tf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){nf.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nf.x,nf.y).multiplyScalar(-e/nf.z),nf.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nf.x,nf.y).multiplyScalar(-e/nf.z)}getViewSize(e,t){return this.getViewBounds(e,rf,af),t.subVectors(af,rf)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sf=class extends tf{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cf=class extends il{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},lf=-90,uf=1,df=class extends ec{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new of(lf,uf,e,t);r.layers=this.layers,this.add(r);let i=new of(lf,uf,e,t);i.layers=this.layers,this.add(i);let a=new of(lf,uf,e,t);a.layers=this.layers,this.add(a);let o=new of(lf,uf,e,t);o.layers=this.layers,this.add(o);let s=new of(lf,uf,e,t);s.layers=this.layers,this.add(s);let c=new of(lf,uf,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ff=class extends of{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},pf=`\\[\\]\\.:\\/`,mf=RegExp(`[\\[\\]\\.:\\/]`,`g`),hf=`[^\\[\\]\\.:\\/]`,gf=`[^`+pf.replace(`\\.`,``)+`]`,_f=`((?:WC+[\\/:])*)`.replace(`WC`,hf),vf=`(WCOD+)?`.replace(`WCOD`,gf),yf=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,hf),bf=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,hf),xf=RegExp(`^`+_f+vf+yf+bf+`$`),Sf=[`material`,`materials`,`bones`,`map`],Cf=class{constructor(e,t,n){let r=n||wf.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wf=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(mf,``)}static parseTrackName(e){let t=xf.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Sf.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){q(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){q(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){q(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){q(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){q(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;q(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wf.Composite=Cf,wf.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},wf.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},wf.prototype.GetterByBindingType=[wf.prototype._getValue_direct,wf.prototype._getValue_array,wf.prototype._getValue_arrayElement,wf.prototype._getValue_toArray],wf.prototype.SetterByBindingTypeAndVersioning=[[wf.prototype._setValue_direct,wf.prototype._setValue_direct_setNeedsUpdate,wf.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wf.prototype._setValue_array,wf.prototype._setValue_array_setNeedsUpdate,wf.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wf.prototype._setValue_arrayElement,wf.prototype._setValue_arrayElement_setNeedsUpdate,wf.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wf.prototype._setValue_fromArray,wf.prototype._setValue_fromArray_setNeedsUpdate,wf.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Tf(e,t,n,r){let i=Ef(r);switch(n){case da:return e*t;case ga:return e*t/i.components*i.byteLength;case _a:return e*t/i.components*i.byteLength;case va:return e*t*2/i.components*i.byteLength;case ya:return e*t*2/i.components*i.byteLength;case fa:return e*t*3/i.components*i.byteLength;case pa:return e*t*4/i.components*i.byteLength;case ba:return e*t*4/i.components*i.byteLength;case xa:case Sa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ca:case wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Oa:return Math.max(e,16)*Math.max(t,8)/4;case Ta:case Da:return Math.max(e,8)*Math.max(t,8)/2;case ka:case Aa:case Ma:case Na:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ja:case Pa:case Fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Za:case Qa:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $a:case eo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case to:case no:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ef(e){switch(e){case Qi:case $i:return{byteLength:1,components:1};case ta:case ea:case aa:return{byteLength:2,components:1};case oa:case sa:return{byteLength:2,components:4};case ra:case na:case ia:return{byteLength:4,components:1};case la:case ua:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Df(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Of(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new cc(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new cc(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new cc(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new cc(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},kf={basic:{uniforms:yd([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:yd([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new cc(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:yd([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new cc(0)},specular:{value:new cc(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:yd([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new cc(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:yd([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new cc(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:yd([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:yd([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:yd([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:yd([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:yd([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:yd([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:yd([Q.common,Q.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:yd([Q.lights,Q.fog,{color:{value:new cc(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};kf.physical={uniforms:yd([kf.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new cc(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new cc(0)},specularColor:{value:new cc(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Af={r:0,b:0,g:0},jf=new Ds,Mf=new X;Mf.set(-1,0,0,0,1,0,0,0,1);function Nf(e,t,n,r,i,a){let o=new cc(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Dl(new eu(1,1,1),new Ed({name:`BackgroundCubeMaterial`,uniforms:vd(kf.backgroundCube.uniforms),vertexShader:kf.backgroundCube.vertexShader,fragmentShader:kf.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mf),l.material.toneMapped=ds.getTransfer(i.colorSpace)!==ho,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Dl(new hd(2,2),new Ed({name:`BackgroundMaterial`,uniforms:vd(kf.background.uniforms),vertexShader:kf.background.vertexShader,fragmentShader:kf.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=ds.getTransfer(i.colorSpace)!==ho,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Af,Sd(e)),n.buffers.color.setClear(Af.r,Af.g,Af.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Pf(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ff(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function If(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&K(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Lf(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fl,s=new X,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Rf=4,zf=[.125,.215,.35,.446,.526,.582],Bf=20,Vf=256,Hf=new sf,Uf=new cc,Wf=null,Gf=0,Kf=0,qf=!1,Jf=new Y,Yf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Jf}=i;Wf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wf,Gf,Kf),this._renderer.xr.enabled=qf,e.scissorTest=!1,Qf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:aa,format:pa,colorSpace:po,depthBuffer:!1},r=Zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xf(r)),this._blurMaterial=ep(r,e,t),this._ggxMaterial=$f(r,e,t)}return r}_compileMaterial(e){let t=new Dl(new il,e);this._renderer.compile(t,Hf)}_sceneToCubeUV(e,t,n,r,i){let a=new of(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Uf),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dl(new eu,new hl({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Uf),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Qf(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Qf(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Hf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Rf?n-d+Rf:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Qf(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Hf),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Qf(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Hf)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&q(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Bf;m>Bf&&K(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bf}`);let h=[],g=0;for(let e=0;e<Bf;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Qf(t,3*v*(r>_-Rf?r-_+Rf:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Hf)}};function Xf(e){let t=[],n=[],r=[],i=e,a=e-Rf+1+zf.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Rf?s=zf[o-e+Rf-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new il;h.setAttribute(`position`,new Uc(f,3)),h.setAttribute(`uv`,new Uc(p,2)),h.setAttribute(`faceIndex`,new Uc(m,1)),r.push(new Dl(h,null)),i>Rf&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Zf(e,t,n){let r=new ws(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Qf(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function $f(e,t,n){return new Ed({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Vf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ep(e,t,n){let r=new Float32Array(Bf),i=new Y(0,1,0);return new Ed({name:`SphericalGaussianBlur`,defines:{n:Bf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tp(){return new Ed({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function np(){return new Ed({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ip=class extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new eu(5,5,5),i=new Ed({name:`CubemapFromEquirect`,uniforms:vd(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Dl(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Yi),new df(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ap(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ip(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Yf(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Yf(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function op(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Do(`WebGLRenderer: `+e+` extension not supported.`),t}}}function sp(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Gc:Wc)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function cp(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function lp(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:q(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function up(e,t,n){let r=new WeakMap,i=new Ss;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ts(h,p,m,u);g.type=ia,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new J(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function dp(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var fp={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function pp(e,t,n,r,i,a){let o=new ws(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Zl(t,n):void 0}),s=new ws(t,n,{type:aa,depthBuffer:!1,stencilBuffer:!1}),c=new il;c.setAttribute(`position`,new Kc([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new Kc([0,2,0,0,2,0],2));let l=new Dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Dl(c,l),d=new sf(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},ds.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=fp[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var mp=new xs,hp=new Zl(1,1),gp=new Ts,_p=new Es,vp=new Xl,yp=[],bp=[],xp=new Float32Array(16),Sp=new Float32Array(9),Cp=new Float32Array(4);function wp(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yp[i];if(a===void 0&&(a=new Float32Array(i),yp[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Tp(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ep(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Dp(e,t){let n=bp[t];n===void 0&&(n=new Int32Array(t),bp[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Op(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function kp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tp(n,t))return;e.uniform2fv(this.addr,t),Ep(n,t)}}function Ap(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tp(n,t))return;e.uniform3fv(this.addr,t),Ep(n,t)}}function jp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tp(n,t))return;e.uniform4fv(this.addr,t),Ep(n,t)}}function Mp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tp(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ep(n,t)}else{if(Tp(n,r))return;Cp.set(r),e.uniformMatrix2fv(this.addr,!1,Cp),Ep(n,r)}}function Np(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tp(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ep(n,t)}else{if(Tp(n,r))return;Sp.set(r),e.uniformMatrix3fv(this.addr,!1,Sp),Ep(n,r)}}function Pp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tp(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ep(n,t)}else{if(Tp(n,r))return;xp.set(r),e.uniformMatrix4fv(this.addr,!1,xp),Ep(n,r)}}function Fp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ip(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tp(n,t))return;e.uniform2iv(this.addr,t),Ep(n,t)}}function Lp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tp(n,t))return;e.uniform3iv(this.addr,t),Ep(n,t)}}function Rp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tp(n,t))return;e.uniform4iv(this.addr,t),Ep(n,t)}}function zp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tp(n,t))return;e.uniform2uiv(this.addr,t),Ep(n,t)}}function Vp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tp(n,t))return;e.uniform3uiv(this.addr,t),Ep(n,t)}}function Hp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tp(n,t))return;e.uniform4uiv(this.addr,t),Ep(n,t)}}function Up(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(hp.compareFunction=n.isReversedDepthBuffer()?518:515,a=hp):a=mp,n.setTexture2D(t||a,i)}function Wp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_p,i)}function Gp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||vp,i)}function Kp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gp,i)}function qp(e){switch(e){case 5126:return Op;case 35664:return kp;case 35665:return Ap;case 35666:return jp;case 35674:return Mp;case 35675:return Np;case 35676:return Pp;case 5124:case 35670:return Fp;case 35667:case 35671:return Ip;case 35668:case 35672:return Lp;case 35669:case 35673:return Rp;case 5125:return zp;case 36294:return Bp;case 36295:return Vp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Kp}}function Jp(e,t){e.uniform1fv(this.addr,t)}function Yp(e,t){let n=wp(t,this.size,2);e.uniform2fv(this.addr,n)}function Xp(e,t){let n=wp(t,this.size,3);e.uniform3fv(this.addr,n)}function Zp(e,t){let n=wp(t,this.size,4);e.uniform4fv(this.addr,n)}function Qp(e,t){let n=wp(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $p(e,t){let n=wp(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function em(e,t){let n=wp(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function tm(e,t){e.uniform1iv(this.addr,t)}function nm(e,t){e.uniform2iv(this.addr,t)}function rm(e,t){e.uniform3iv(this.addr,t)}function im(e,t){e.uniform4iv(this.addr,t)}function am(e,t){e.uniform1uiv(this.addr,t)}function om(e,t){e.uniform2uiv(this.addr,t)}function sm(e,t){e.uniform3uiv(this.addr,t)}function cm(e,t){e.uniform4uiv(this.addr,t)}function lm(e,t,n){let r=this.cache,i=t.length,a=Dp(n,i);Tp(r,a)||(e.uniform1iv(this.addr,a),Ep(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?hp:mp;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function um(e,t,n){let r=this.cache,i=t.length,a=Dp(n,i);Tp(r,a)||(e.uniform1iv(this.addr,a),Ep(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_p,a[e])}function dm(e,t,n){let r=this.cache,i=t.length,a=Dp(n,i);Tp(r,a)||(e.uniform1iv(this.addr,a),Ep(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||vp,a[e])}function fm(e,t,n){let r=this.cache,i=t.length,a=Dp(n,i);Tp(r,a)||(e.uniform1iv(this.addr,a),Ep(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gp,a[e])}function pm(e){switch(e){case 5126:return Jp;case 35664:return Yp;case 35665:return Xp;case 35666:return Zp;case 35674:return Qp;case 35675:return $p;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return rm;case 35669:case 35673:return im;case 5125:return am;case 36294:return om;case 36295:return sm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var mm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qp(t.type)}},hm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}},gm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},_m=/(\w+)(\])?(\[|\.)?/g;function vm(e,t){e.seq.push(t),e.map[t.id]=t}function ym(e,t,n){let r=e.name,i=r.length;for(_m.lastIndex=0;;){let a=_m.exec(r),o=_m.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){vm(n,l===void 0?new mm(s,e,t):new hm(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new gm(s),vm(n,e)),n=e}}}var bm=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ym(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function xm(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Sm=37297,Cm=0;function wm(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Tm=new X;function Em(e){ds._getMatrix(Tm,ds.workingColorSpace,e);let t=`mat3( ${Tm.elements.map(e=>e.toFixed(4))} )`;switch(ds.getTransfer(e)){case mo:return[t,`LinearTransferOETF`];case ho:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Dm(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+wm(e.getShaderSource(t),r)}return i}function Om(e,t){let n=Em(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var km={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Am(e,t){let n=km[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var jm=new Y;function Mm(){return ds.getLuminanceCoefficients(jm),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${jm.x.toFixed(4)}, ${jm.y.toFixed(4)}, ${jm.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Nm(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Im).join(`
`)}function Pm(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Fm(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Im(e){return e!==``}function Lm(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bm(e){return e.replace(zm,Hm)}var Vm=new Map;function Hm(e,t){let n=Z[t];if(n===void 0){let e=Vm.get(t);if(e!==void 0)n=Z[e],K(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Bm(n)}var Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(e){return e.replace(Um,Gm)}function Gm(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Km(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var qm={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Jm(e){return qm[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ym={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Xm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ym[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Zm={302:`ENVMAP_MODE_REFRACTION`};function Qm(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Zm[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var $m={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function eh(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:$m[e.combine]||`ENVMAP_BLENDING_NONE`}function th(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function nh(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Jm(n),l=Xm(n),u=Qm(n),d=eh(n),f=th(n),p=Nm(n),m=Pm(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Im).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Im).join(`
`),_.length>0&&(_+=`
`)):(g=[Km(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Im).join(`
`),_=[Km(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Am(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Om(`linearToOutputTexel`,n.outputColorSpace),Mm(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Im).join(`
`)),o=Bm(o),o=Lm(o,n),o=Rm(o,n),s=Bm(s),s=Lm(s,n),s=Rm(s,n),o=Wm(o),s=Wm(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=xm(i,i.VERTEX_SHADER,y),S=xm(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Dm(i,x,`vertex`),n=Dm(i,S,`fragment`);q(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new bm(i,h),T=Fm(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Sm)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cm++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var rh=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ah(e),t.set(e,n)),n}},ah=class{constructor(e){this.id=rh++,this.code=e,this.usedTimes=0}};function oh(e){return e===1030||e===37490||e===36285}function sh(e,t,n,r,i,a){let o=new Rs,s=new ih,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=kf[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,F=!!x,ne=!!i.aoMap,re=!!i.lightMap,I=!!i.bumpMap&&i.wireframe===!1,L=!!i.normalMap,ie=!!i.displacementMap,ae=!!i.emissiveMap,oe=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=ce&&!!i.anisotropyMap,he=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,R=de&&!!i.iridescenceMap,ve=de&&!!i.iridescenceThicknessMap,z=fe&&!!i.sheenColorMap,ye=fe&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,B=!!i.specularIntensityMap,Se=pe&&!!i.transmissionMap,V=pe&&!!i.thicknessMap,H=!!i.gradientMap,Ce=!!i.alphaMap,we=i.alphaTest>0,Te=!!i.alphaHash,Ee=!!i.extensions,De=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(De=e.toneMapping);let Oe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ds.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:F,envMapMode:F&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:I,normalMap:L,displacementMap:ie,emissiveMap:ae,normalMapObjectSpace:L&&i.normalMapType===1,normalMapTangentSpace:L&&i.normalMapType===0,packedNormalMap:L&&i.normalMapType===0&&oh(i.normalMap.format),metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:me,clearcoat:le,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,iridescence:de,iridescenceMap:R,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:z,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:B,transmission:pe,transmissionMap:Se,thicknessMap:V,gradientMap:H,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ce,alphaTest:we,alphaHash:Te,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:I&&m(i.bumpMap.channel),normalMapUv:L&&m(i.normalMap.channel),displacementMapUv:ie&&m(i.displacementMap.channel),emissiveMapUv:ae&&m(i.emissiveMap.channel),metalnessMapUv:oe&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:z&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:be&&m(i.specularMap.channel),specularColorMapUv:xe&&m(i.specularColorMap.channel),specularIntensityMapUv:B&&m(i.specularIntensityMap.channel),transmissionMapUv:Se&&m(i.transmissionMap.channel),thicknessMapUv:V&&m(i.thicknessMap.channel),alphaMapUv:Ce&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(L||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||Ce),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&L===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&ds.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&ds.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ee&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ee&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=kf[t];n=Cd.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new nh(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ch(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function lh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function uh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function dh(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||lh),r.length>1&&r.sort(t||uh),i.length>1&&i.sort(t||uh),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function fh(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new dh,e.set(t,[i])):n>=r.length?(i=new dh,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ph(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Y,color:new cc};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new cc,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new cc,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new cc,groundColor:new cc};break;case`RectAreaLight`:n={color:new cc,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function mh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var hh=0;function gh(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function _h(e){let t=new ph,n=mh(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new Ds,o=new Ds;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(gh);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=hh++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function vh(e){let t=new _h(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function yh(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new vh(e),t.set(n,[a])):r>=i.length?(a=new vh(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var bh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sh=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Ch=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],wh=new Ds,Th=new Y,Eh=new Y;function Dh(e,t,n){let r=new zl,i=new J,a=new J,o=new Ss,s=new Od,c=new kd,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ed({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:bh,fragmentShader:xh}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new il;m.setAttribute(`position`,new Uc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Dl(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ws(i.x,i.y,{format:va,type:aa,minFilter:Yi,magFilter:Yi,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Zl(i.x,i.y,ia),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ma,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ki,d.map.depthTexture.magFilter=Ki}else l.isPointLight?(d.map=new ip(i.x),d.map.depthTexture=new Ql(i.x,ra)):(d.map=new ws(i.x,i.y),d.map.depthTexture=new Zl(i.x,i.y,ra)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ma,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Yi,d.map.depthTexture.magFilter=Yi):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ki,d.map.depthTexture.magFilter=Ki);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Th.setFromMatrixPosition(l.matrixWorld),e.position.copy(Th),Eh.copy(e.position),Eh.add(Sh[t]),e.up.copy(Ch[t]),e.lookAt(Eh),e.updateMatrixWorld(),n.makeTranslation(-Th.x,-Th.y,-Th.z),wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ws(i.x,i.y,{format:va,type:aa})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Oh(e,t){function n(){let t=!1,n=new Ss,r=null,i=new Ss(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ko[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new cc(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,F={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),I=new Ss().fromArray(ne),L=new Ss().fromArray(re);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),oe(e.CULL_FACE),pe(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(oe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:q(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:q(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:q(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:q(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),R(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(j&&e.lineWidth(t),k=t)}function R(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ve(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function z(t){t===void 0&&(t=e.TEXTURE0+te-1),P!==t&&(e.activeTexture(t),P=t)}function ye(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+te-1:P);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function be(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function V(){try{e.texSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ee(){try{e.texImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function De(){try{e.texImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Oe(t){return d[t]===void 0?e.getParameter(t):d[t]}function U(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ke(t){I.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))}function Ae(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Me(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,F={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new cc(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,I.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:R,setScissorTest:ve,activeTexture:z,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:B,texImage2D:Ee,texImage3D:De,pixelStorei:U,getParameter:Oe,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:we,texStorage3D:Te,texSubImage2D:Se,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:Ce,scissor:ke,viewport:Ae,reset:Ne}}function kh(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):So(`canvas`)}function g(e,t,n){let r=1,i=xe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||K(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?mo:ds.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function ee(e){O=e}function te(){let e=O;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&ye(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ne={[Ui]:e.REPEAT,[Wi]:e.CLAMP_TO_EDGE,[Gi]:e.MIRRORED_REPEAT},re={[Ki]:e.NEAREST,[qi]:e.NEAREST_MIPMAP_NEAREST,[Ji]:e.NEAREST_MIPMAP_LINEAR,[Yi]:e.LINEAR,[Xi]:e.LINEAR_MIPMAP_NEAREST,[Zi]:e.LINEAR_MIPMAP_LINEAR},I={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function L(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ne[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,I[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ie(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ae(e,t,n){return Math.floor(Math.floor(e/n)/t)}function oe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ae(n.start,r.width,4),c=ae(t.start,r.width,4);n.start<=i+1&&a===c&&ae(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ie(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=ds.getPrimaries(ds.workingColorSpace),r=o.colorSpace===``?null:ds.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=be(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);L(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ha,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&oe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Tf(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Tf(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=xe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=xe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=ie(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=ds.getPrimaries(ds.workingColorSpace),r=o.colorSpace===``?null:ds.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=be(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);L(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=xe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ve(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),L(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=ve(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)de(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?de(i.__webglFramebuffer[0],t,0):de(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ue(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&z(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ve(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),L(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),L(c,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),L(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ge=[],_e=[];function R(t){if(t.samples>0){if(z(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ge.push(l),_e.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ve(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ye(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(ds.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):q(`WebGLTextures: Unsupported texture color space:`,n)),t}function xe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=ee,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ah(e,t){function n(n,r=``){let i,a=ds.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var jh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ed({vertexShader:jh,fragmentShader:Mh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dl(new hd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends Ao{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Nh,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new J,C=null,w=new of;w.viewport=new Ss;let T=new of;T.viewport=new Ss;let E=[w,T],D=new ff,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new rc,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new rc,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new rc,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ha:ma,a=_.stencil?ca:ra);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ws(d.textureWidth,d.textureHeight,{format:pa,type:Qi,depthTexture:new Zl(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ws(f.framebufferWidth,f.framebufferHeight,{format:pa,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let j=new Y,M=new Y;function N(e,t,n){j.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;P(D,i);for(let e=0;e<a.length;e++)P(a[e],i);a.length===2?N(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),F(e,D,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Po*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new of,o.layers.enable(n),o.viewport=new Ss,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new $l,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let I=new Df;I.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},Fh=new Ds,Ih=new X;Ih.set(-1,0,0,0,1,0,0,0,1);function Lh(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Sd(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Fh.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ih),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Rh(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return q(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):K(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var zh=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bh=null;function Vh(){return Bh===null&&(Bh=new Al(zh,16,16,va,aa),Bh.name=`DFG_LUT`,Bh.minFilter=Yi,Bh.magFilter=Yi,Bh.wrapS=Wi,Bh.wrapT=Wi,Bh.generateMipmaps=!1,Bh.needsUpdate=!0),Bh}var Hh=class{constructor(e={}){let{canvas:t=Co(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ba,ya,_a]),g=new Set([Qi,ra,ta,ca,oa,sa]),_=new Uint32Array(4),v=new Int32Array(4),y=new Y,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=fo;let ee=0,te=0,j=null,M=-1,N=null,P=new Ss,F=new Ss,ne=null,re=new cc(0),I=0,L=t.width,ie=t.height,ae=1,oe=null,se=null,ce=new Ss(0,0,L,ie),le=new Ss(0,0,L,ie),ue=!1,de=new zl,fe=!1,pe=!1,me=new Ds,he=new Y,ge=new Ss,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},R=!1;function ve(){return j===null?ae:1}let z=n;function ye(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),z===null){let t=`webgl2`;if(z=ye(t,e),z===null)throw ye(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw q(`WebGLRenderer: `+e.message),e}let be,xe,B,Se,V,H,Ce,we,Te,Ee,De,Oe,U,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re;function ze(){be=new op(z),be.init(),Ie=new Ah(z,be),xe=new If(z,be,e,Ie),B=new Oh(z,be),xe.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),O=z.createFramebuffer(),k=z.createFramebuffer(),A=z.createFramebuffer(),Se=new lp(z),V=new ch,H=new kh(z,be,B,V,xe,Ie,Se),Ce=new ap(T),we=new Of(z),Le=new Pf(z,we),Te=new sp(z,we,Se,Le),Ee=new dp(z,Te,we,Le,Se),Ne=new up(z,xe,H),Ae=new Lf(V),De=new sh(T,Ce,be,xe,Le,Ae),Oe=new Lh(T,V),U=new fh,ke=new yh(be),Me=new Nf(T,Ce,B,Ee,p,s),je=new Dh(T,Ee,xe),Re=new Rh(z,Se,xe,B),Pe=new Ff(z,be,Se),Fe=new cp(z,be,Se),Se.programs=De.programs,T.capabilities=xe,T.extensions=be,T.properties=V,T.renderLists=U,T.shadowMap=je,T.state=B,T.info=Se}ze(),m!==1009&&(w=new pp(m,t.width,t.height,o,r,i));let Be=new Ph(T,z);this.xr=Be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=be.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=be.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(e){e!==void 0&&(ae=e,this.setSize(L,ie,!1))},this.getSize=function(e){return e.set(L,ie)},this.setSize=function(e,n,r=!0){if(Be.isPresenting){K(`WebGLRenderer: Can't change size while VR device is presenting.`);return}L=e,ie=n,t.width=Math.floor(e*ae),t.height=Math.floor(n*ae),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(L*ae,ie*ae).floor()},this.setDrawingBufferSize=function(e,n,r){L=e,ie=n,ae=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){q(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){K(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),B.viewport(P.copy(ce).multiplyScalar(ae).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),B.scissor(F.copy(le).multiplyScalar(ae).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(e){B.setScissorTest(ue=e)},this.setOpaqueSort=function(e){oe=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Me.getClearColor(),r=Me.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,z.clearBufferuiv(z.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,z.clearBufferiv(z.COLOR,0,v))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Me.dispose(),U.dispose(),ke.dispose(),V.dispose(),Ce.dispose(),Ee.dispose(),Le.dispose(),Re.dispose(),De.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,Ye),Be.removeEventListener(`sessionend`,Xe),Ze.stop()};function Ve(e){e.preventDefault(),To(`WebGLRenderer: Context Lost.`),E=!0}function He(){To(`WebGLRenderer: Context Restored.`),E=!1;let e=Se.autoReset,t=je.enabled,n=je.autoUpdate,r=je.needsUpdate,i=je.type;ze(),Se.autoReset=e,je.enabled=t,je.autoUpdate=n,je.needsUpdate=r,je.type=i}function Ue(e){q(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){W(e),V.remove(e)}function W(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){De.releaseProgram(e)}),e.isShaderMaterial&&De.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=st(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Te.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Pe;if(c!==null&&(h=we.get(c),g=Fe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ve()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ve()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(be.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?we.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ke(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,rt(e,t,n),e.side=0,e.needsUpdate=!0,rt(e,t,n),e.side=2):rt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ke(a,n,e),r.add(a)}else Ke(t,n,e),r.add(t)}}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}be.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let qe=null;function Je(e){qe&&qe(e)}function Ye(){Ze.stop()}function Xe(){Ze.start()}let Ze=new Df;Ze.setAnimationLoop(Je),typeof self<`u`&&Ze.setContext(self),this.setAnimationLoop=function(e){qe=e,Be.setAnimationLoop(e),e===null?Ze.stop():Ze.start()},Be.addEventListener(`sessionstart`,Ye),Be.addEventListener(`sessionend`,Xe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){q(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Be.enabled===!0&&Be.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=ke.get(e,C.length),x.init(t),x.state.textureUnits=H.getTextureUnits(),C.push(x),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),de.setFromProjectionMatrix(me,yo,t.reversedDepth),pe=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,pe),b=U.get(e,S.length),b.init(),S.push(b),Be.enabled===!0&&Be.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Qe(e,t,-1/0,T.sortObjects)}Qe(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(oe,se,t.reversedDepth),R=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,R&&Me.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ae.beginShadows();let i=x.state.shadowsArray;if(je.render(i,e,t),fe===!0&&Ae.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];et(n,r,e,a)}R&&Me.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];$e(b,e,n,n.viewport)}}else r.length>0&&et(n,r,e,t),R&&Me.render(e),$e(b,e,t)}j!==null&&te===0&&(H.updateMultisampleRenderTarget(j),H.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Le.resetDefaultState(),M=-1,N=null,C.pop(),C.length>0?(x=C[C.length-1],H.setTextureUnits(x.state.textureUnits),fe===!0&&Ae.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||de.intersectsSprite(e)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let t=Ee.update(e),i=e.material;i.visible&&b.push(e,t,i,n,ge.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||de.intersectsObject(e))){let t=Ee.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ge.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,ge.z,o)}}else i.visible&&b.push(e,t,i,n,ge.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Qe(i[e],t,n,r)}function $e(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),fe===!0&&Ae.setGlobalState(T.clippingPlanes,n),r&&B.viewport(P.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=be.has(`EXT_color_buffer_half_float`)||be.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new ws(1,1,{generateMipmaps:!0,type:e?aa:Qi,minFilter:Zi,samples:Math.max(4,xe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ds.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(re),I=T.getClearAlpha(),I<1&&T.setClearColor(16777215,.5),T.clear(),R&&Me.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),fe===!0&&Ae.setGlobalState(T.clippingPlanes,r),tt(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),be.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,nt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(re,I),d!==void 0&&(r.viewport=d),T.toneMapping=u}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&nt(o,t,n,s,l,c)}}function nt(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function rt(e,t,n){t.isScene!==!0&&(t=_e);let r=V.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=De.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=De.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ce.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return at(e,s),d}else s.uniforms=De.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=De.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ae.uniform),at(e,s),r.needsLights=lt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=bm.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function st(e,t,n,r,i){t.isScene!==!0&&(t=_e),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ds.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ce.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=x.state.lights;if(fe===!0&&(pe===!0||e!==N)){let t=e===N&&r.id===M;Ae.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ae.numPlanes||v.numIntersection!==Ae.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=rt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==M&&(M=r.id,w=!0),v.needsLights){let e=ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||N!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(z,`projectionMatrix`,e.projectionMatrix),O.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(z,he.setFromMatrixPosition(e.matrixWorld)),xe.logarithmicDepthBuffer&&O.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),N!==e&&(N=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&O.setValue(z,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&O.setValue(z,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){O.setOptional(z,i,`bindMatrix`),O.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(O.setOptional(z,i,`batchingTexture`),O.setValue(z,`batchingTexture`,i._matricesTexture,H),O.setOptional(z,i,`batchingIdTexture`),O.setValue(z,`batchingIdTexture`,i._indirectTexture,H),O.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ne.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Vh()),w){if(O.setValue(z,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ct(k,E),a&&r.fog===!0&&Oe.refreshFogUniforms(k,a),Oe.refreshMaterialUniforms(k,r,ae,ie,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}bm.upload(z,it(v),k,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(bm.upload(z,it(v),k,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(z,`center`,i.center),O.setValue(z,`modelViewMatrix`,i.modelViewMatrix),O.setValue(z,`normalMatrix`,i.normalMatrix),O.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,S),Re.bind(n,S)}}return S}function ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),F.copy(e.scissor),ne=e.scissorTest,B.viewport(P),B.scissor(F),B.setScissorTest(ne),M=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),F.copy(e.scissor),ne=e.scissorTest}else P.copy(ce).multiplyScalar(ae).floor(),F.copy(le).multiplyScalar(ae).floor(),ne=ue;if(n!==0&&(r=O),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(P),B.scissor(F),B.setScissorTest(ne),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}M=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!xe.textureFormatReadable(c)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!xe.textureTypeReadable(l)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Ie.convert(c),Ie.convert(l),a)}finally{let e=j===null?null:V.get(j).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!xe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!xe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Ie.convert(l),Ie.convert(u),0);let f=j===null?null:V.get(j).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Oo(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ie.convert(t.format),_=Ie.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,k),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ee=0,te=0,j=null,B.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ds._getDrawingBufferColorSpace(e),t.unpackColorSpace=ds._getUnpackColorSpace()}},Uh=[`#4f7fd0`,`#c04a3a`,`#6f9e55`,`#c9973f`],Wh=[`#2c4a80`,`#77291f`,`#3f5f30`,`#7d5a20`],Gh=N.combat.squadSelectionRadius;if(!Number.isFinite(Gh)||Gh<0)throw Error(`combat.squadSelectionRadius must be a finite non-negative number`);function Kh(e){return Uh[e%Uh.length]}function qh(e,t){let n=e.squads.find(e=>e.id===t);if(!n)return null;let r=0,i=0,a=0;for(let t of n.unitIds){let n=e.units[t];n?.alive&&(r+=n.x,i+=n.y,a+=1)}return a===0?null:[r/a,i/a]}function Jh(e,t,n,r){let i=null,a=1/0,o=Gh*Gh;for(let s of e.squads){if(s.playerId!==r)continue;let c=qh(e,s.id);if(!c)continue;let l=c[0]-t,u=c[1]-n,d=l*l+u*u;d>o||(d<a||d===a&&(i===null||s.id<i))&&(a=d,i=s.id)}return i}function Yh(e,t,n,r){let i=null,a=1/0,o=Gh*Gh;for(let s of e.squads){if(!r(s.playerId))continue;let c=qh(e,s.id);if(!c)continue;let l=c[0]-t,u=c[1]-n,d=l*l+u*u;d>o||(d<a||d===a&&(i===null||s.id<i))&&(a=d,i=s.id)}return i}function Xh(e){let t=(e%360+360)%360;return t>=135&&t<225?{cell:0,flip:!1}:t>=45&&t<135?{cell:1,flip:!1}:t>=225&&t<315?{cell:1,flip:!0}:{cell:2,flip:!1}}var Zh={generated_by:`documents/game_plans/strategists-war/work/tools/unit_art_harness.py pack`,image:`rts-unit-dir3-v1.webp`,cell:256,cols:3,rows:8,views:[`front`,`right_3q`,`back`],notes:[`anchor_dx は px。描画側は板をこのぶん横へずらす（反転して使うセルでは符号を反転）`,`ground はコマ内の接地線 y。歩兵・軍師 234、騎兵 240（unit_art_spec）`],units:{strategist:{row:0,ground:234,anchor_dx:[-.11,-1.3,1.42],foot_spread:2.72,source:`pipelines/unit-art-dir3/final/strategist_dir3.png`,pixel_sha256:`97cc9226b342f978bdbef9d65b916c23c41bda6612ff032eb30b54aebe073ccb`},inf_shield:{row:1,ground:234,anchor_dx:[5.33,1.71,-7.03],foot_spread:12.36,source:`pipelines/unit-art-dir3/final/inf_shield_dir3.png`,pixel_sha256:`a176256c8ee5b93b9a1d3f198e61e3f3df83a0334f03c0056fcbd01a6c28e9ea`},inf_sword:{row:2,ground:234,anchor_dx:[4.24,-.23,-4.01],foot_spread:8.25,source:`pipelines/unit-art-dir3/final/inf_sword_dir3.png`,pixel_sha256:`cdf7bba7d26f0ad3dd1cbd30623f21e7fd3d9d896ff4116dfb8ac4c47fc2068d`},inf_spear:{row:3,ground:234,anchor_dx:[.05,-.1,.05],foot_spread:.15,source:`pipelines/unit-art-dir3/final/inf_spear_dir3.png`,pixel_sha256:`f1bc9f141d5f25a52cfa9177a9eabcb54a75e8db9844b090f07e6001535be7ab`},inf_bow:{row:4,ground:234,anchor_dx:[3.57,.88,-4.46],foot_spread:8.03,source:`pipelines/unit-art-dir3/final/inf_bow_dir3.png`,pixel_sha256:`a4a9355c5a67ef04d6cc2b3d9af65a44c6a13e70661696b99b4b6ebfdd76f6db`},cav_sword:{row:5,ground:240,anchor_dx:[-1.88,1.75,.14],foot_spread:3.63,source:`pipelines/unit-art-dir3/final/cav_sword_dir3.png`,pixel_sha256:`d97f458d2e5ee93b71dca51d575f82b6dc41b25c2a3c0b056c4fdbdd7a4ba783`},cav_spear:{row:6,ground:240,anchor_dx:[-2.73,1.51,1.22],foot_spread:4.24,source:`pipelines/unit-art-dir3/final/cav_spear_dir3.png`,pixel_sha256:`ca732abe63c931cd3302b3f72d6b881a2127a349e71d302d08c420e7c6e6f06b`},cav_bow:{row:7,ground:240,anchor_dx:[-.47,-.76,1.22],foot_spread:1.98,source:`pipelines/unit-art-dir3/final/cav_bow_dir3.png`,pixel_sha256:`db2b311a4796ff57f5320fd0ef7c7d08494b3db66dfbaab3219ce9c03a3b3e16`}}},Qh=`/assets/rts-unit-dir3-v1-DLUp3aNv.webp`,$h=`/assets/rts-battlefield-night-C2-6OvFt.webp`,eg=Object.assign({"../../../assets/output/strategists-war/rts-unit-dir3-attack-v1.webp":zi,"../../../assets/output/strategists-war/rts-unit-dir3-walk-v1.webp":Bi}),tg=e=>Object.entries(eg).find(([t])=>t.includes(`rts-unit-dir3-${e}-v1`))?.[1]??null,ng=Object.assign({"../../../assets/output/strategists-war/data/unit_atlas_dir3_attack.json":Vi,"../../../assets/output/strategists-war/data/unit_atlas_dir3_walk.json":Hi}),rg=e=>Object.entries(ng).find(([t])=>t.endsWith(`unit_atlas_dir3_${e}.json`))?.[1]??null,ig=Object.values(Object.assign({"../../../assets/output/strategists-war/rts-ground-grass-tile-v1.webp":`/assets/rts-ground-grass-tile-v1-dcxnXn_x.webp`}))[0]??null,ag=38,og=60,sg=2.4,cg=.3,lg=2,ug=.06,dg=.15,fg=.68,pg=4,mg=.004,hg=0,gg=1,_g=2,vg=1512208,yg=2,bg=.85,xg=[10,36],Sg=[[.049,.694],[.938,.697]],Cg=5,wg=.9,Tg=[.62,6],Eg=[1.1,2.4,.32],Dg=4096,Og=4096,kg=2048,Ag={front:new cc(`#ffffff`),side:new cc(`#ffd43b`),rear:new cc(`#ff2418`)},jg=Zh,Mg=jg.rows,Ng=jg.cell;function Pg(e){let t=new cf;return t.setAttribute(`position`,new Kc([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3)),t.setAttribute(`uv`,new Kc([0,0,1,0,1,1,0,1],2)),t.setIndex([0,1,2,0,2,3]),t.instanceCount=0,t}function Fg(){let e=new cf;return e.setAttribute(`position`,new Kc([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5],3)),e.setAttribute(`uv`,new Kc([0,0,1,0,1,1,0,1],2)),e.setIndex([0,1,2,0,2,3]),e.instanceCount=0,e}function Ig(e,t){let n=new Zd().load(e,e=>{e.needsUpdate=!0,t?.(e)});return n.colorSpace=fo,n.magFilter=Yi,n.minFilter=Zi,n.generateMipmaps=!0,n}function Lg(e){let t=new Hh({canvas:e,antialias:!0,alpha:!1,powerPreference:`high-performance`});t.setPixelRatio(1),t.setClearColor(vg);let n=new uc,r=new of(ag,1,.5,2e3),i=rs.degToRad(og),a={uMap:{value:Ig($h,()=>{a.uHasMap.value=1})},uHasMap:{value:0},uTile:{value:null},uHasTile:{value:0},uTileMean:{value:new Y(1,1,1)},uTileCells:{value:yg},uDetailMax:{value:bg},uDetailZoom:{value:new J(xg[0],xg[1])},uWorld:{value:new J(1,1)},uCamPos:{value:new Y},uCamDist:{value:100},uFocalPx:{value:500},uTime:{value:0},uTorch:{value:Sg.map(([e,t])=>new J(e,t))},uTorchRadius:{value:Cg},uTorchStrength:{value:wg},uVignette:{value:new J(Tg[0],Tg[1])},uHaze:{value:new Y(Eg[0],Eg[1],Eg[2])}};if(ig){let e=Ig(ig,e=>{let t=e.image;if(t&&`width`in t){let e=document.createElement(`canvas`);e.width=32,e.height=32;let n=e.getContext(`2d`);if(n){n.drawImage(t,0,0,32,32);let e=n.getImageData(0,0,32,32).data,r=0,i=0,o=0;for(let t=0;t<e.length;t+=4)r+=e[t],i+=e[t+1],o+=e[t+2];let s=e.length/4,c=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};a.uTileMean.value.set(Math.max(.02,c(r/s)),Math.max(.02,c(i/s)),Math.max(.02,c(o/s)))}}a.uHasTile.value=1});e.wrapS=e.wrapT=Ui,a.uTile.value=e}let o=new Ed({uniforms:a,vertexShader:`
      varying vec2 vUv; varying vec3 vWorld;
      void main(){
        vUv = uv;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uHasMap;
      uniform sampler2D uTile; uniform float uHasTile; uniform vec3 uTileMean;
      uniform float uTileCells; uniform float uDetailMax; uniform vec2 uDetailZoom;
      uniform vec2 uWorld; uniform vec3 uCamPos; uniform float uCamDist; uniform float uFocalPx; uniform float uTime;
      uniform vec2 uTorch[${Sg.length}]; uniform float uTorchRadius; uniform float uTorchStrength;
      uniform vec2 uVignette; uniform vec3 uHaze;
      varying vec2 vUv; varying vec3 vWorld;
      void main(){
        vec3 c = uHasMap > 0.5 ? texture2D(uMap, vUv).rgb : vec3(0.045, 0.06, 0.035);
        // (A) ディテール: タイルを平均色で割った明暗を、その場所の見かけの拡大率に応じて乗せる
        if (uHasTile > 0.5) {
          vec3 tile = texture2D(uTile, vWorld.xz / uTileCells).rgb / uTileMean;
          float pxPerCell = uFocalPx / max(1.0, distance(uCamPos, vWorld));
          float k = smoothstep(uDetailZoom.x, uDetailZoom.y, pxPerCell) * uDetailMax;
          c *= mix(vec3(1.0), tile, k);
        }
        // (C1) 松明: 暖色の点光源を近似。距離はセル単位。ゆっくり揺らす
        vec2 cell = vUv * uWorld;
        vec3 warm = vec3(1.0, 0.55, 0.22);
        for (int i = 0; i < ${Sg.length}; i++) {
          vec2 tp = uTorch[i] * uWorld;
          float d = distance(cell, tp) / uTorchRadius;
          float flicker = 1.0 + 0.10 * sin(uTime * 7.3 + float(i) * 2.1) + 0.06 * sin(uTime * 11.7 + float(i) * 0.7);
          float k = uTorchStrength * flicker / (1.0 + d * d) * (1.0 - smoothstep(2.0, 3.0, d));
          c = c * (1.0 + warm * k * 1.6) + warm * k * 0.025;
        }
        // (C2) 縁のビネット: 盤の縁へ向かって暗く
        float edge = min(min(cell.x, uWorld.x - cell.x), min(cell.y, uWorld.y - cell.y));
        c *= mix(uVignette.x, 1.0, smoothstep(0.0, uVignette.y, edge));
        // (C3) 奥のもや: カメラから遠い側だけ、暗い青灰へ寄せる（地面だけなので兵は白飛びしない）
        float far = smoothstep(uCamDist * uHaze.x, uCamDist * uHaze.y, distance(uCamPos, vWorld)) * uHaze.z;
        c = mix(c, vec3(0.040, 0.052, 0.066), far);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),s=new Dl(new hd(1,1),o);s.rotation.x=-Math.PI/2,n.add(s);let c=new Dl(new hd(1,1),new hl({color:vg}));c.rotation.x=-Math.PI/2,c.position.y=-.02,n.add(c);let l=new il;l.setAttribute(`position`,new Kc(new Float32Array(15),3));let u=new Jl(l,new Bl({color:12160330,transparent:!0,opacity:.5}));u.position.y=.02,n.add(u);let d=``,f=(e,t)=>{let n=`${e}x${t}`;if(n===d)return;d=n,s.scale.set(e,t,1),s.position.set(e/2,0,t/2),a.uWorld.value.set(e,t),c.scale.set(e*6,t*6,1),c.position.set(e/2,-.02,t/2);let r=u.geometry.getAttribute(`position`);[[0,0],[e,0],[e,t],[0,t],[0,0]].forEach(([e,t],n)=>r.setXYZ(n,e,0,t)),r.needsUpdate=!0},p=null,m=``,h=new hl({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),g=e=>{let t=e.groundLight,r=t?Rg(t.startedAt,t.now,t.reducedMotion===!0):0;if(!t||r<=0){p&&(p.visible=!1);return}let i=t.region.points.map(e=>`${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(`;`);i!==m&&(m=i,p&&(n.remove(p),p.geometry.dispose()),p=new Dl(new gd(new ju(t.region.points.map(e=>new J(e.x,-e.y)))),h),p.rotation.x=-Math.PI/2,p.position.y=.01,n.add(p)),p.visible=!0,h.opacity=r},_=Pg(Dg),v=new jl(new Float32Array(Dg*3),3),y=new jl(new Float32Array(Dg),1),b=new jl(new Float32Array(Dg),1),x=new jl(new Float32Array(Dg),1),S=new jl(new Float32Array(Dg*3),3),C=new jl(new Float32Array(Dg*4),4),w=new jl(new Float32Array(Dg),1),T=[v,y,b,x,S,C,w];for(let e of T)e.setUsage(vo);_.setAttribute(`iOffset`,v),_.setAttribute(`iCell`,y),_.setAttribute(`iFlip`,b),_.setAttribute(`iUnit`,x),_.setAttribute(`iTint`,S),_.setAttribute(`iHit`,C),_.setAttribute(`iPose`,w);let E=(e,t)=>{let n=Array.from({length:Mg},(e,n)=>t?t[n].clone():new Y);if(e)for(let t of Object.values(e.units))n[t.row].set(t.anchor_dx[0]/Ng,t.anchor_dx[1]/Ng,t.anchor_dx[2]/Ng);return n},D=E(jg,null),O=new Float32Array(Mg);for(let e of Object.values(jg.units))O[e.row]=(Ng-e.ground)/Ng;let k=tg(`attack`),A=tg(`walk`),ee=Ig(Qh),te={map:{value:ee},mapAttack:{value:k?Ig(k):ee},mapWalk:{value:A?Ig(A):ee},uHasAttack:{value:+!!k},uHasWalk:{value:+!!A},uRight:{value:new Y(1,0,0)},uCamUp:{value:new Y(0,1,0)},uScale:{value:sg},uCells:{value:jg.cols},uRows:{value:Mg},uAnchors:{value:D},uAnchorsAttack:{value:E(rg(`attack`),D)},uAnchorsWalk:{value:E(rg(`walk`),D)},uFoot:{value:O},uYLock:{value:cg},uExposure:{value:lg},uEmissive:{value:ug}},j=new Dl(_,new Ed({uniforms:te,side:2,vertexShader:`
      attribute vec3 iOffset; attribute float iCell; attribute float iFlip; attribute float iUnit;
      attribute vec3 iTint; attribute vec4 iHit; attribute float iPose;
      uniform vec3 uRight; uniform vec3 uCamUp;
      uniform float uScale; uniform float uCells; uniform float uRows; uniform float uYLock;
      uniform vec3 uAnchors[${Mg}]; uniform vec3 uAnchorsAttack[${Mg}]; uniform vec3 uAnchorsWalk[${Mg}];
      uniform float uFoot[${Mg}];
      varying vec2 vUv; varying vec3 vTint; varying vec4 vHit; varying float vPose;
      void main(){
        // uYLock 0 … 板が常にカメラへ正対（潰れない） / 1 … 地面に垂直。0.3 で確定
        vec3 up = normalize(mix(uCamUp, vec3(0.0, 1.0, 0.0), uYLock));
        int ui = int(iUnit + 0.5);
        // ポーズごとのアンカー（攻撃で人物がコマ内で横にずれている分を戻す）
        vec3 a = iPose > 1.5 ? uAnchorsAttack[ui] : (iPose > 0.5 ? uAnchorsWalk[ui] : uAnchors[ui]);
        // 足元アンカー補正。セルごとの足元のズレぶん板を横へずらす（反転セルは符号も反転）
        float anchor = iCell < 0.5 ? a.x : (iCell < 1.5 ? a.y : a.z);
        if (iFlip > 0.5) anchor = -anchor;
        vec3 world = iOffset + (uRight * (position.x + anchor) + up * (position.y - uFoot[ui])) * uScale;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 1.0);
        float u = iFlip > 0.5 ? (1.0 - uv.x) : uv.x;
        vUv = vec2((iCell + u) / uCells, (uRows - 1.0 - iUnit + uv.y) / uRows);
        vTint = iTint; vHit = iHit; vPose = iPose;
      }`,fragmentShader:`
      uniform sampler2D map; uniform sampler2D mapAttack; uniform sampler2D mapWalk;
      uniform float uHasAttack; uniform float uHasWalk;
      uniform float uExposure; uniform float uEmissive;
      varying vec2 vUv; varying vec3 vTint; varying vec4 vHit; varying float vPose;
      void main(){
        // ポーズで参照するアトラスを選ぶ。分岐の中で texture2D を呼ぶと mip の微分が乱れるので、
        // 3 枚とも読んで重みで選ぶ（インスタンス数は多くても板は小さいので負荷は軽い）
        float wAttack = step(1.5, vPose) * uHasAttack;
        float wWalk = step(0.5, vPose) * (1.0 - step(1.5, vPose)) * uHasWalk;
        vec4 t = texture2D(map, vUv) * (1.0 - wAttack - wWalk)
               + texture2D(mapAttack, vUv) * wAttack
               + texture2D(mapWalk, vUv) * wWalk;
        if (t.a < 0.5) discard;  // alphaTest。深度で前後が決まるのでソート不要
        // 陣営色: 青い布地だけを置換（判定式はスプライト差し替え前の Canvas 版と同じ）
        vec3 c = t.rgb;
        vec3 p = c * 255.0;
        if (p.b >= 45.0 && p.b >= p.r * 1.12 && p.b >= p.g * 1.06) {
          float light = max(max(c.r, c.g), c.b);
          c = vTint * (0.48 + light * 0.72);
        }
        // 被弾中: 方向別の色を絵の中だけに重ねる
        c = mix(c, vHit.rgb, vHit.a);
        c = c * uExposure + uEmissive;
        gl_FragColor = vec4(c, 1.0);
      }`}));j.frustumCulled=!1,n.add(j);let M=Fg();M.setAttribute(`iOffset`,v);let P=new Dl(M,new Ed({uniforms:{uSize:{value:sg},uStrength:{value:dg}},transparent:!0,depthWrite:!1,side:2,vertexShader:`attribute vec3 iOffset; uniform float uSize; varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(iOffset + position * uSize, 1.0); }`,fragmentShader:`uniform float uStrength; varying vec2 vUv;
      void main(){
        float d = length(vUv - vec2(0.5)) * 2.0;
        float edge = mix(0.85, 0.015, uStrength);
        float a = (1.0 - smoothstep(1.0 - edge, 1.0, d)) * uStrength;
        if (a < 0.004) discard;
        gl_FragColor = vec4(0.0, 0.0, 0.0, a);
      }`}));P.frustumCulled=!1,P.position.y=.03,P.renderOrder=1,n.add(P);let F=Fg(),ne=new jl(new Float32Array(Og*3),3),re=new jl(new Float32Array(Og),1),I=new jl(new Float32Array(Og),1);for(let e of[ne,re,I])e.setUsage(vo);F.setAttribute(`iOffset`,ne),F.setAttribute(`iSize`,re),F.setAttribute(`iAlpha`,I);let L=new Dl(F,new Ed({transparent:!0,depthWrite:!1,side:2,vertexShader:`attribute vec3 iOffset; attribute float iSize; attribute float iAlpha; varying vec2 vUv; varying float vA;
      void main(){ vUv = uv; vA = iAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(iOffset + position * iSize, 1.0); }`,fragmentShader:`varying vec2 vUv; varying float vA;
      void main(){
        float d = length(vUv - vec2(0.5)) * 2.0;
        float a = (1.0 - smoothstep(0.35, 1.0, d)) * vA;
        if (a < 0.004) discard;
        gl_FragColor = vec4(0.73, 0.64, 0.49, a);
      }`}));L.frustumCulled=!1,L.position.y=.05,L.renderOrder=2,n.add(L);let ie=Fg(),ae=new jl(new Float32Array(kg*3),3),oe=new jl(new Float32Array(kg),1);for(let e of[ae,oe])e.setUsage(vo);ie.setAttribute(`iOffset`,ae),ie.setAttribute(`iAngle`,oe);let se=new Dl(ie,new Ed({transparent:!0,depthWrite:!1,side:2,vertexShader:`attribute vec3 iOffset; attribute float iAngle;
      void main(){
        // 長さ 0.55 セル・幅 0.06 セル。position.x が進行方向
        vec2 p = vec2(position.x * 0.55, position.z * 0.06);
        float c = cos(iAngle), s = sin(iAngle);
        vec3 w = iOffset + vec3(p.x * c - p.y * s, 0.0, p.x * s + p.y * c);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(w, 1.0);
      }`,fragmentShader:`void main(){ gl_FragColor = vec4(0.918, 0.851, 0.659, 0.95); }`}));se.frustumCulled=!1,se.position.y=.9,n.add(se);let ce=new il;ce.setAttribute(`position`,new Kc(new Float32Array(195),3));let le=new Jl(ce,new Ad({color:14264654,transparent:!0,opacity:.9,dashSize:.6,gapSize:.5}));le.position.y=.04,le.visible=!1,n.add(le);let ue=new il;ue.setAttribute(`position`,new Kc(new Float32Array(6),3));let de=new Jl(ue,new Bl({color:15123050}));de.position.y=.04,de.visible=!1,n.add(de);let fe=new il;fe.setAttribute(`position`,new Kc(new Float32Array(195),3));let pe=new Jl(fe,new Bl({color:15123050}));pe.position.y=.04,pe.visible=!1,n.add(pe);let me=new il;me.setAttribute(`position`,new Kc(new Float32Array(195),3));let he=new Jl(me,new Ad({color:14700604,transparent:!0,opacity:.95,dashSize:.6,gapSize:.5}));he.position.y=.045,he.visible=!1,n.add(he);let ge=(e,t,n,r)=>{let i=e.getAttribute(`position`);for(let e=0;e<=64;e++){let a=e/64*Math.PI*2;i.setXYZ(e,t+Math.cos(a)*r,0,n+Math.sin(a)*r)}i.needsUpdate=!0,e.computeBoundingSphere()},_e=(e,t,n,r)=>{let a=r/(2*t.zoom*Math.tan(rs.degToRad(ag)/2));e.aspect=n/Math.max(1,r),e.position.set(t.x,Math.sin(i)*a,t.y+Math.cos(i)*a),e.lookAt(t.x,0,t.y),e.near=Math.max(.5,a*.05),e.far=a*4+400,e.updateProjectionMatrix(),e.updateMatrixWorld()},R=(t,n)=>{_e(r,t,e.width,n),te.uRight.value.setFromMatrixColumn(r.matrixWorld,0),te.uCamUp.value.setFromMatrixColumn(r.matrixWorld,1),a.uCamPos.value.copy(r.position),a.uCamDist.value=n/(2*t.zoom*Math.tan(rs.degToRad(ag)/2)),a.uFocalPx.value=n/(2*Math.tan(rs.degToRad(ag)/2))},ve=0,z=0,ye=()=>{let n=e.width,i=e.height;(n!==ve||i!==z)&&(ve=n,z=i,t.setSize(n,i,!1),r.aspect=n/Math.max(1,i))},be=new Y,xe=new ml,B=new Fl(new Y(0,1,0),0),Se=(e,t,n,r,i)=>(be.set(t,0,n).project(e),!(be.z<1)||!Number.isFinite(be.x)?null:[(be.x+1)/2*r,(1-be.y)/2*i]),V=(e,t,n,r,i)=>{let a=t/r*2-1,o=1-n/i*2;return be.set(a,o,.5).unproject(e),xe.origin.copy(e.position),xe.direction.copy(be).sub(e.position).normalize(),xe.direction.y>=-1e-4?null:(xe.intersectPlane(B,be),[be.x,be.z])},H=(t,n)=>Se(r,t,n,e.width,e.height)??[NaN,NaN],Ce=(t,n)=>V(r,t,n,e.width,e.height)||(xe.at(r.far,be),[be.x,be.z]),we=new of(ag,1,.5,2e3),Te=(e,t,n)=>{_e(we,e,t,n);let r=V(we,0,n,t,n),i=V(we,t,n,t,n),a=V(we,t/2,0,t,n),o=V(we,t/2,n,t,n);return{left:r?r[0]:-1/0,right:i?i[0]:1/0,far:a?a[1]:-1/0,near:o?o[1]:1/0}},Ee=t=>Te(t,e.width,e.height),De=(t,n)=>{let r=Math.max(1,e.width),i=Math.max(1,e.height),a=[[0,0],[t.w,0],[t.w,t.h],[0,t.h]],o=e=>{let o={x:t.w/2,y:t.h/2,zoom:e};for(let e=0;e<4;e++){_e(we,o,r,i);let e=1/0,t=-1/0;for(let[n,o]of a){let a=Se(we,n,o,r,i);if(!a)return null;e=Math.min(e,a[1]),t=Math.max(t,a[1])}let n=V(we,r/2,(e+t)/2,r,i);if(!n)return null;if(Math.abs(n[1]-o.y)<.001)break;o.y=n[1]}_e(we,o,r,i);for(let[e,t]of a){let a=Se(we,e,t,r,i);if(!a||a[0]<n||a[0]>r-n||a[1]<n||a[1]>i-n)return null}return o},s=.05,c=80,l=null;for(let e=0;e<28;e++){let e=Math.sqrt(s*c),t=o(e);t?(l=t,s=e):c=e}return l??{x:t.w/2,y:t.h/2,zoom:s}},Oe=N.combat.chargeMinSec??2,U=new cc,ke=e=>jg.units[e]?.row??0;return{render:(i,o,s,c,l)=>{ye(),f(i.worldW,i.worldH),R(o,e.height),a.uTime.value=l%1e5/1e3,g(c);let u=0;for(let e=0;e<i.units.length;e++){let t=i.units[e];if(!t.alive||u>=Dg)continue;let n=t.px+(t.x-t.px)*s,r=t.py+(t.y-t.py)*s;v.setXYZ(u,n,0,r);let a=Xh(t.facing);y.setX(u,a.cell),b.setX(u,+!!a.flip),x.setX(u,ke(t.type)),U.set(Uh[t.playerId%Uh.length]),S.setXYZ(u,U.r,U.g,U.b);let o=t.hitFlash>0&&t.hitDirection?Ag[t.hitDirection]:null;o?C.setXYZW(u,o.r,o.g,o.b,fg):C.setXYZW(u,0,0,0,0);let c=hg;if((t.action??0)>0)c=_g;else if(Math.abs(t.x-t.px)+Math.abs(t.y-t.py)>mg){let t=e*.37%1;c=Math.floor(l/1e3*pg+t)%2==1?gg:hg}w.setX(u,c),u++}_.instanceCount=u,M.instanceCount=u;for(let e of T)e.needsUpdate=!0;let d=0;if(!c.lowSpec){let e=l/1e3;for(let t of i.squads)if(!((t.chargeSec??0)<Oe))for(let n of t.unitIds){let t=i.units[n];if(!t?.alive||d+2>Og)continue;let r=t.px+(t.x-t.px)*s,a=t.py+(t.y-t.py)*s,o=t.facing*Math.PI/180,c=-Math.sin(o),l=Math.cos(o),u=n*2654435761>>>0,f=.62*(.8+(u>>7)%100/250);for(let n=0;n<2;n++){let i=(e/f+n/2+u%1e3/1e3)%1,o=Math.sin(i*Math.PI);if(o<=.02)continue;let s=.25+i*.8,p=((u>>n*6)%100/100-.5)*1.1,m=.75+(u>>n*4+3)%100/100*.6;ne.setXYZ(d,r+c*s-l*p,0,a+l*s+c*p),re.setX(d,(.38+i*.8)*m*(t.type.startsWith(`cav`)?1.3:1)*2),I.setX(d,.3*o),d++}}}F.instanceCount=d;for(let e of[ne,re,I])e.needsUpdate=!0;let p=0;for(let e of i.projectiles){if(p>=kg)break;let t=e.px+(e.x-e.px)*s,n=e.py+(e.y-e.py)*s;ae.setXYZ(p,t,0,n),oe.setX(p,Math.atan2(e.vy,e.vx)),p++}if(ie.instanceCount=p,ae.needsUpdate=!0,oe.needsUpdate=!0,le.visible=!1,de.visible=!1,pe.visible=!1,he.visible=!1,c.focusEnemy!=null){let e=qh(i,c.focusEnemy);e&&(ge(me,e[0],e[1],Gh),he.computeLineDistances(),he.visible=!0)}if(c.selectedSquad!==null){let e=qh(i,c.selectedSquad);if(e&&(ge(ce,e[0],e[1],Gh),le.computeLineDistances(),le.visible=!0,c.dragTarget)){let t=ue.getAttribute(`position`);t.setXYZ(0,e[0],0,e[1]),t.setXYZ(1,c.dragTarget.x,0,c.dragTarget.y),t.needsUpdate=!0,ue.computeBoundingSphere(),de.visible=!0,ge(fe,c.dragTarget.x,c.dragTarget.y,.8),pe.visible=c.focusEnemy==null}}t.render(n,r)},dispose:()=>{n.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n?.dispose()}),te.map.value.dispose(),te.mapAttack.value.dispose(),te.mapWalk.value.dispose(),a.uMap.value.dispose(),a.uTile.value?.dispose(),o.dispose(),t.dispose()},worldToScreen:H,screenToWorld:Ce,fitView:De,viewBounds:Ee}}function Rg(e,t,n){let r=t-e;return r<0||r>=(n?250:900)?0:n?.2:r<100?r/100*.5:r<250?.5:.5*(1-(r-250)/650)}var zg=40,Bg=new Map,Vg=[`strategist`,`inf_shield`,`inf_sword`,`inf_spear`,`inf_bow`,`cav_sword`,`cav_bow`];function Hg(e){let t=Bg.get(e);if(t)return t;let n=document.createElement(`canvas`);n.width=zg,n.height=zg;let r=n.getContext(`2d`),i=zg/2;r.fillStyle=Je[e],r.beginPath(),e.startsWith(`cav`)?r.roundRect(1,1,38,38,zg*.26):r.arc(i,i,19,0,Math.PI*2),r.fill(),r.strokeStyle=`#00000055`,r.lineWidth=zg*.06,r.stroke();let a=zg*.68/24;r.save(),r.translate(zg*.16,zg*.16),r.scale(a,a),r.fillStyle=`#20180a`,r.strokeStyle=`#20180a`,r.lineCap=`round`;let o=e.replace(`inf_`,``).replace(`cav_`,``);return e===`strategist`?(r.lineWidth=1.8,r.beginPath(),r.moveTo(8,3),r.lineTo(8,21),r.stroke(),r.beginPath(),r.moveTo(8,4),r.lineTo(19,7.5),r.lineTo(8,11),r.closePath(),r.fill()):o===`shield`?(r.beginPath(),r.moveTo(12,3),r.lineTo(19,5.5),r.lineTo(19,12),r.bezierCurveTo(19,16.8,15.6,19.8,12,21),r.bezierCurveTo(8.4,19.8,5,16.8,5,12),r.lineTo(5,5.5),r.closePath(),r.fill()):o===`sword`?(r.beginPath(),r.moveTo(12,2.5),r.lineTo(14,5),r.lineTo(14,13.5),r.lineTo(10,13.5),r.lineTo(10,5),r.closePath(),r.fill(),r.beginPath(),r.roundRect(7.5,13.5,9,2.4,1),r.fill(),r.fillRect(10.9,15.9,2.2,4.2),r.beginPath(),r.arc(12,21.2,1.5,0,Math.PI*2),r.fill()):o===`spear`?(r.beginPath(),r.moveTo(12,2),r.lineTo(15,9),r.lineTo(9,9),r.closePath(),r.fill(),r.fillRect(10.9,9,2.2,13)):(r.lineWidth=2.2,r.beginPath(),r.moveTo(8,3),r.bezierCurveTo(16.5,7,16.5,17,8,21),r.stroke(),r.lineWidth=1.2,r.beginPath(),r.moveTo(8,3),r.lineTo(8,21),r.stroke(),r.lineWidth=1.8,r.beginPath(),r.moveTo(8,12),r.lineTo(18,12),r.moveTo(18,12),r.lineTo(14.8,9.6),r.moveTo(18,12),r.lineTo(14.8,14.4),r.stroke()),r.restore(),Bg.set(e,n),n}function Ug(e,t){let n=new Set;for(let r of t.unitIds){let t=e.units[r];t?.alive&&n.add(t.type)}return Vg.filter(e=>n.has(e))}var Wg=1.8;function Gg(e,t,n,r,i,a){let o=e.canvas;e.clearRect(0,0,o.width,o.height);let s=n.zoom,c=o.width,l=o.height,u=s*3;for(let n of t.squads){if(n.playerId!==i.myPlayerId||!n.order)continue;let[t,r]=a.worldToScreen(n.order.x,n.order.y);t<-u||t>c+u||r<-u||r>l+u||(n.pursuit!=null&&(e.strokeStyle=`rgba(224,80,60,0.9)`,e.lineWidth=Math.max(1,s*.1),e.setLineDash([s*.3,s*.25]),e.beginPath(),e.ellipse(t,r,s*1,s*.5,0,0,Math.PI*2),e.stroke(),e.setLineDash([])),e.strokeStyle=`rgba(244,239,226,0.8)`,e.lineWidth=Math.max(1,s*.08),e.beginPath(),e.moveTo(t,r),e.lineTo(t,r-s*1.1),e.stroke(),e.fillStyle=`rgba(244,239,226,0.8)`,e.beginPath(),e.moveTo(t,r-s*1.1),e.lineTo(t+s*.7,r-s*.85),e.lineTo(t,r-s*.6),e.closePath(),e.fill())}e.lineWidth=1;let d=s>=5;for(let n of t.units){if(!n.alive||!n.isStrategist&&!(d&&n.hp<n.maxHp&&n.hp>0))continue;let t=n.px+(n.x-n.px)*r,i=n.py+(n.y-n.py)*r,[o,f]=a.worldToScreen(t,i);if(o<-u||o>c+u||f<-u||f>l+u)continue;let p=f-s*Wg;if(n.isStrategist){let t=Uh[n.playerId%Uh.length],r=Wh[n.playerId%Wh.length],i=Math.max(12,s*2.6),a=o-Math.max(3,s*.55),c=p+s*.4,l=c-i,u=Math.max(9,s*1.45),d=Math.max(7,s*.9);e.strokeStyle=`#2b2115`,e.lineWidth=Math.max(1.5,s*.12),e.beginPath(),e.moveTo(a,c),e.lineTo(a,l),e.stroke(),e.fillStyle=t,e.strokeStyle=r,e.lineWidth=Math.max(1,s*.08),e.beginPath(),e.moveTo(a,l),e.lineTo(a+u,l),e.lineTo(a+u*.78,l+d*.5),e.lineTo(a+u,l+d),e.lineTo(a,l+d),e.closePath(),e.fill(),e.stroke(),e.lineWidth=1}if(d&&n.hp<n.maxHp&&n.hp>0){let t=s*.9,r=Math.max(1.5,s*.14),i=p-s*.3;e.fillStyle=`rgba(0,0,0,0.6)`,e.fillRect(o-t/2,i,t,r);let a=Math.max(0,n.hp)/n.maxHp;e.fillStyle=a>.4?`#9fce7f`:`#e0684f`,e.fillRect(o-t/2,i,t*a,r)}}if(i.selectedSquad!==null){let n=t.squads.find(e=>e.id===i.selectedSquad),r=n?qh(t,n.id):null;if(n?.name&&r){let i=Math.max(12,Math.min(22,s*1.6));e.font=`700 ${i}px "Shippori Mincho", serif`,e.textAlign=`center`,e.textBaseline=`middle`;let[o,c]=a.worldToScreen(r[0],r[1]-Gh),l=c-i*1.6,u=Ug(t,n),d=i*1,f=d*.18,p=u.length===0?0:u.length*d+(u.length-1)*f+i*.5,m=e.measureText(n.name).width,h=m+p+i*1.2,g=i*1.8;e.fillStyle=`rgba(10,7,4,0.82)`,e.beginPath(),e.roundRect(o-h/2,l-g/2,h,g,g/2),e.fill(),e.textAlign=`left`,e.fillStyle=`#f4efe2`;let _=o-h/2+i*.6;e.fillText(n.name,_,l);let v=_+m+i*.5;for(let t of u)e.drawImage(Hg(t),v,l-d/2,d,d),v+=d+f;e.textAlign=`start`,e.textBaseline=`alphabetic`}}}function Kg(e,t){let n=new Map;for(let t of e.units){if(!t.alive)continue;let e=n.get(t.playerId)??{x:0,y:0,n:0};e.x+=t.x,e.y+=t.y,e.n+=1,n.set(t.playerId,e)}let r=n.get(t);if(!r||r.n===0)return null;let i=[...n.entries()].map(([e,t])=>({id:e,x:t.x/t.n,y:t.y/t.n})),a=[{x:0,y:0},{x:e.worldW,y:0},{x:e.worldW,y:e.worldH},{x:0,y:e.worldH}];for(let e of i){if(e.id===t)continue;let n=e.x-r.x,i=e.y-r.y,o=(e.x*e.x+e.y*e.y-r.x*r.x-r.y*r.y)/2,s=[];for(let e=0;e<a.length;e++){let t=a[e],r=a[(e+1)%a.length],c=n*t.x+i*t.y-o,l=n*r.x+i*r.y-o,u=c<=0,d=l<=0;if(u&&s.push(t),u!==d){let e=c/(c-l);s.push({x:t.x+(r.x-t.x)*e,y:t.y+(r.y-t.y)*e})}}if(a=s,a.length===0)return null}return a.length>=3?{points:a}:null}function qg(e,t){let n=Lg(e),r=t.getContext(`2d`);return{render:(i,a,o,s)=>{let c=performance.now();n.render(i,a,o,s,c),r&&((t.width!==e.width||t.height!==e.height)&&(t.width=e.width,t.height=e.height),Gg(r,i,a,o,s,n))},dispose:()=>n.dispose(),worldToScreen:(e,t)=>n.worldToScreen(e,t),screenToWorld:(e,t)=>n.screenToWorld(e,t),fitView:(e,t)=>n.fitView(e,t),viewBounds:e=>n.viewBounds(e)}}var Jg=Math.max(0,N.ui.scrollMarginCells??0);function Yg(e,t,n){let r=(t,r)=>n.projector?n.projector.screenToWorld(t,r):[i.x+(t-e.width/2)/i.zoom,i.y+(r-e.height/2)/i.zoom],i={x:t.w/2,y:t.h/2,zoom:10},a=14*(window.devicePixelRatio||1),o=()=>n.projector?n.projector.fitView(t,a):{x:t.w/2,y:t.h/2,zoom:Math.min(e.width/t.w,e.height/t.h)},s=()=>{let r=o();if(i.zoom=Math.max(r.zoom,Math.min(40,i.zoom)),i.zoom<=r.zoom*1.0005){i.x=r.x,i.y=r.y;return}let a=Jg,s=-a,c=t.w+a,l=t.h+a;if(n.projector){let e=n.projector.viewBounds(i);!Number.isFinite(e.left)||!Number.isFinite(e.right)||e.right-e.left>=c-s?i.x=r.x:e.left<s?i.x-=e.left-s:e.right>c&&(i.x-=e.right-c),!Number.isFinite(e.far)||!Number.isFinite(e.near)||e.near-e.far>=l-s?i.y=r.y:e.far<s?i.y-=e.far-s:e.near>l&&(i.y-=e.near-l);return}let u=e.width/2/i.zoom,d=e.height/2/i.zoom;i.x=u*2>=c-s?t.w/2:Math.max(s+u,Math.min(c-u,i.x)),i.y=d*2>=l-s?t.h/2:Math.max(s+d,Math.min(l-d,i.y))},c=()=>{let t=window.devicePixelRatio||1;e.width=e.clientWidth*t,e.height=e.clientHeight*t,s()};c(),window.addEventListener(`resize`,c),Object.assign(i,o()),s();let l=new Map,u=`none`,d=null,f=null,p=null,m=0,h=0,g=null,_=(e,t)=>{if(!g)return 0;let n=window.devicePixelRatio||1;return Math.hypot(e-g.x,t-g.y)/n},v=(e,t)=>{let n=_(e,t);return n>=20?!0:performance.now()-h<100?!1:n>=10},y=t=>{let n=e.getBoundingClientRect(),r=window.devicePixelRatio||1;return[(t.clientX-n.left)*r,(t.clientY-n.top)*r]},b=t=>{e.setPointerCapture(t.pointerId);let[i,a]=y(t);if(l.set(t.pointerId,{x:i,y:a}),l.size===2){u=`pinch`,f=null;let e=[...l.values()];m=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);return}if(n.isBlocked())return;let[o,s]=r(i,a),c=n.pickSquad(o,s);c===null?u=`pan`:(u=`order`,d!==c&&n.onSelect?.(c),d=c,f=null,p=null),h=performance.now(),g={x:i,y:a}},x=e=>{let t=l.get(e.pointerId);if(!t)return;let[a,o]=y(e);if(u===`pinch`&&l.size===2){l.set(e.pointerId,{x:a,y:o});let t=[...l.values()],n=Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y);m>0&&(i.zoom*=n/m),m=n,s();return}if(u===`pan`){let[e,n]=r(t.x,t.y),[c,l]=r(a,o);i.x-=c-e,i.y-=l-n,s()}else if(u===`order`&&(f!==null||v(a,o))){let[e,t]=r(a,o);p=n.pickEnemySquad?.(e,t)??null,f=(p===null?null:n.enemyCentroid?.(p)??null)??{x:e,y:t}}l.set(e.pointerId,{x:a,y:o})},S=e=>{let t=l.get(e.pointerId);l.delete(e.pointerId);let r=f!==null&&(t===void 0||v(t.x,t.y));u===`order`&&d!==null&&f&&r?p!==null&&n.onAttack?n.onAttack(d,p):n.onOrder(d,f.x,f.y):u===`pan`&&t!==void 0&&!v(t.x,t.y)&&(d=null),g=null,f=null,p=null,l.size===0?u=`none`:l.size===1&&(u=`pan`)},C=e=>{e.preventDefault(),i.zoom*=e.deltaY<0?1.12:1/1.12,s()};return e.addEventListener(`pointerdown`,b),e.addEventListener(`pointermove`,x),e.addEventListener(`pointerup`,S),e.addEventListener(`pointercancel`,S),e.addEventListener(`wheel`,C,{passive:!1}),{cam:i,selection:()=>({selectedSquad:d,dragTarget:f,focusEnemy:p}),cleanup:()=>{window.removeEventListener(`resize`,c),e.removeEventListener(`pointerdown`,b),e.removeEventListener(`pointermove`,x),e.removeEventListener(`pointerup`,S),e.removeEventListener(`pointercancel`,S),e.removeEventListener(`wheel`,C)}}}var Xg=2*I+3,Zg=(I-1)*I+3;function Qg(e){let t={id:`tut-enemy-column`,name:`column`,units:ue(`column`)},n={id:`tut-enemy-testudo`,name:`testudo`,units:ue(`testudo`)};return{army:{id:`tut-enemy`,name:e,slots:[t.id,n.id],slotCells:[Xg,Zg],strategistSlot:1,strategistCell:fe(n.units)},squads:[t,n]}}function $g(e,t,n){let r={},i={};for(let n of e.squads){let a=n.unitIds.filter(t=>e.units[t].alive&&!e.units[t].isStrategist).length;n.playerId===t?r[n.id]=a:i[n.id]=a}let a=e.units.find(e=>e.isStrategist&&e.playerId!==t),o={};for(let n of e.squads){if(n.playerId!==t)continue;let e=new Set;n.pursuit!==null&&e.add(n.pursuit);for(let t of e)(o[t]??=[]).push(n.id)}return{screen:`battle`,battle:{mine:r,enemies:i,enemyStrategistSquad:a?a.squadId:null,attacking:o,enemyStrategistDead:a!==void 0&&!a.alive,result:e.result!==null,intro:n}}}var e_=5e3;function t_({lang:e,playerArmy:t,playerCount:n=2,mode:r=`ffa`,durationSec:i,moveSpeedMul:a,netConfigs:o,netSession:s,onExit:c}){let u=(t,n)=>F(e,t,n),[d,f]=(0,M.useState)({time:0,counts:[],result:null}),[p,m]=(0,M.useState)(!1),h=(0,M.useRef)(null),[g,_]=(0,M.useState)(null),[v,y]=(0,M.useState)(null),b=(0,M.useRef)(!1),[x,S]=(0,M.useState)(null),[C,w]=(0,M.useState)(!0),D=(0,M.useRef)(!1),[O,ee]=(0,M.useState)(!1),te=(0,M.useRef)(()=>{}),[j,P]=(0,M.useState)([]),ne=(0,M.useRef)([]),re=(0,M.useRef)(0),[I,L]=(0,M.useState)(!1),[ie,ae]=(0,M.useState)(!1);(0,M.useEffect)(()=>(E(),()=>T()),[]);let oe=(0,M.useRef)(!1);(0,M.useEffect)(()=>{if(s)return;let e=()=>{oe.current=A()};return e(),k(e)},[s]);let se=(0,M.useRef)(!1);(0,M.useEffect)(()=>{l(`level_start`,{level_name:`battle`,mode:r,player_count:n,online:s!=null})},[r,n,s]),(0,M.useEffect)(()=>(bi(null),()=>bi(`title`)),[]),(0,M.useEffect)(()=>{let e=g;if(!e||!v)return;let c=qg(e,v),l,d=[],p=!o&&t!==void 0&&tn();if(o)l=o;else if(p&&t){let e=Qg(u(`battle.enemyN`,{n:1}));l=[{name:Le(),color:Kh(0),army:t.army,squads:t.squads,team:0},{name:e.army.name,color:Kh(1),army:e.army,squads:e.squads,team:1,passive:!0}]}else if(t){l=[{name:Le(),color:Kh(0),army:t.army,squads:t.squads,team:0}];for(let e=1;e<n;e++){let t=Pr(`ai${e}`),n=r===`team`&&e===1;l.push({name:n?u(`battle.ally`):u(`battle.enemyN`,{n:r===`team`?e-1:e}),color:Kh(e),army:t.army,squads:t.squads,team:r===`team`?e===1?0:1:e}),d.push(e)}}else return;let m=nr(l,{durationSec:p?300:i,moveSpeedMul:p?rn:a,freezeClock:p});h.current=m;let _={current:null};te.current=e=>{if(_.current)return;let t=Kg(m,0);t&&(_.current={region:t,startedAt:e,reducedMotion:window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches===!0})},S(l.map((e,t)=>({name:e.name,color:e.color,team:e.team??t}))),s?.attachState(m),window.__rtsDebug&&(window.__rtsHostState=m);let y=(e,t)=>{if(!p||e===null)return e;let n=an();return n===null||n[t].includes(e)?e:null},b=Yg(e,{w:m.worldW,h:m.worldH},{pickSquad:(e,t)=>y(Jh(m,e,t,0),`mine`),onOrder:(e,t,n)=>{sr(m,e,t,n),Ci(`orderConfirm`)},onSelect:()=>Ci(`squadSelect`),pickEnemySquad:(e,t)=>y(Yh(m,e,t,e=>m.players[e].team!==m.players[0].team),`enemies`),onAttack:(e,t)=>{lr(m,e,t),Ci(`orderConfirm`)},enemyCentroid:e=>cr(m,e),isBlocked:()=>m.result!==null||m.players[0].eliminated,projector:c});window.__rtsDebug&&(window.__rtsView=b,window.__rtsRenderer=c);let x=0,C=performance.now(),w=0,T=16,E=!1,O=e=>{let t=e-C;for(T=T*.93+t*.07,!E&&T>40&&(E=!0),w+=Math.min(.25,t/1e3),C=e,(!D.current||oe.current||p&&Tt())&&(w=0);w>=On;)jr(m),w-=On;let n=b.selection(),r=_.current;c.render(m,b.cam,w/On,{selectedSquad:n.selectedSquad,dragTarget:n.dragTarget,focusEnemy:n.focusEnemy,myPlayerId:0,lowSpec:E,groundLight:r?{...r,now:e}:void 0}),x=requestAnimationFrame(O)};x=requestAnimationFrame(O);let k=window.setInterval(()=>{if(!(!D.current||oe.current))for(let e of d)Vr(m,e)},600);p&&Ct(t=>{let n=e.getBoundingClientRect(),r=e.width===0?1:n.width/e.width,i=[];for(let e of t){let t=m.squads[e];if(!t)continue;let a=t.unitIds.filter(e=>m.units[e].alive);if(a.length===0)continue;let o=1/0,s=1/0,l=-1/0,u=-1/0;for(let e of a){let[t,i]=c.worldToScreen(m.units[e].x,m.units[e].y);if(!Number.isFinite(t)||!Number.isFinite(i))continue;let a=n.left+t*r,d=n.top+i*r;o=Math.min(o,a),l=Math.max(l,a),s=Math.min(s,d),u=Math.max(u,d)}o!==1/0&&i.push({x:o,y:s,w:l-o,h:u-s})}return i});let A=window.setInterval(()=>{if(p){for(let e of m.players)e.id!==0&&(e.hpFloor=on());dt($g(m,0,!D.current))}f({time:m.time,counts:m.players.map(e=>({name:e.name,alive:e.aliveSoldiers,color:e.color,strategistAlive:e.strategistAlive,eliminated:e.eliminated})),result:m.result})},200);return()=>{cancelAnimationFrame(x),clearInterval(A),clearInterval(k),b.cleanup(),Ct(null),c.dispose(),te.current=()=>{}}},[g,v]);let ce=mt().progress,le=(0,M.useRef)(!1);(0,M.useEffect)(()=>{!ce.done&&ce.started&&tn()&&(le.current=!0)},[ce]),(0,M.useEffect)(()=>{le.current&&ce.done&&c()},[ce.done]),(0,M.useEffect)(()=>{if(d.counts.length===0)return;let e=ne.current,t=d.counts.filter(e=>e.strategistAlive).length,n=d.counts.filter((t,n)=>t.eliminated&&!e[n]);ne.current=d.counts.map(e=>e.eliminated),!(n.length===0||t<2)&&P(e=>[...e,...n.map(e=>({id:re.current++,text:u(`battle.eliminated`,{name:e.name})}))])},[d.counts]),(0,M.useEffect)(()=>{if(j.length===0)return;let e=window.setTimeout(()=>P(e=>e.slice(1)),e_);return()=>window.clearTimeout(e)},[j]);let ue=d.result!==null,de=(0,M.useRef)(()=>{let e=h.current;return e?e.squads.map(t=>({key:t.id,armyName:e.players[t.playerId].name,squadName:t.name,color:e.players[t.playerId].color,alive:t.unitIds.some(t=>e.units[t].alive)})):[]}).current,fe=(0,M.useRef)((t,n)=>F(e,`battle.squadWiped`,{army:t,squad:n})).current;(0,M.useEffect)(()=>{if(!ue||se.current)return;se.current=!0,L(!0);let e=window.setTimeout(()=>{L(!1),ae(!0)},ji);return()=>window.clearTimeout(e)},[ue]);let pe=h.current?.freezeClock===!0,me=Math.max(0,(i??N.combat.matchDurationSec)-d.time),he=String(Math.floor(me/60)),ge=String(Math.floor(me%60)).padStart(2,`0`),_e=d.result;(0,M.useEffect)(()=>{if(!_e||b.current)return;b.current=!0;let e=_e.rankingGroups.findIndex(e=>e.includes(0)),t=e===0&&_e.rankingGroups.length===1;l(`level_end`,{level_name:`battle`,mode:r,player_count:n,success:e===0&&!t,outcome:t?`draw`:e===0?`victory`:`defeat`,reason:_e.reason,duration_sec:Math.round(d.time)})},[_e,r,n,d.time]);let R=()=>{w(!1),s?.destroy(),c()};return(0,W.jsxs)(`div`,{className:`rts-battle`,children:[(0,W.jsx)(`canvas`,{ref:_,className:`rts-battle-canvas`}),(0,W.jsx)(`canvas`,{ref:y,className:`rts-battle-canvas rts-battle-overlay`,"aria-hidden":`true`}),(0,W.jsxs)(`div`,{className:`rts-battle-hud`,children:[(0,W.jsx)(`button`,{className:`rts-btn small`,onClick:()=>m(!0),children:u(`battle.exit`)}),!pe&&(0,W.jsxs)(`span`,{className:`rts-battle-timer`,children:[he,`:`,ge]}),(0,W.jsx)(`span`,{className:`rts-battle-counts`,children:d.counts.map((e,t)=>(0,W.jsxs)(`span`,{style:{color:e.color,opacity:e.alive===0&&!e.strategistAlive?.45:1},children:[e.strategistAlive?`⚑`:`✝`,` `,e.name,` `,e.alive]},t))})]}),(0,W.jsx)(`p`,{className:`rts-battle-hint`,children:u(`battle.hint`)}),j.length>0&&(0,W.jsx)(`div`,{className:`rts-battle-notices`,role:`status`,children:j.map(e=>(0,W.jsx)(`span`,{className:`rts-battle-notice`,children:e.text},e.id))}),(d.time>0||pe&&O)&&(0,W.jsx)(ki,{source:de,format:fe}),I&&(0,W.jsx)(Mi,{text:u(`battle.decided`)}),C&&x&&(0,W.jsx)(Pi,{lang:e,entrants:x,teamMode:r===`team`,onStart:()=>{te.current(performance.now()),D.current=!0,ee(!0),bi(`battle`)}}),_e&&ie&&(0,W.jsx)(Ri,{lang:e,players:d.counts.map((e,t)=>({id:t,name:e.name,color:e.color})),result:_e,onExit:R}),p&&!_e&&(0,W.jsx)(nt,{title:u(`battle.exit`),actions:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{className:`rts-btn`,onClick:()=>m(!1),children:u(`common.cancel`)}),(0,W.jsx)(`button`,{className:`rts-btn danger`,onClick:R,children:u(`common.ok`)})]}),children:u(`battle.exitConfirm`)})]})}var n_=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){let e=[];for(let t of this._parts)e.push(t);return r_(e).buffer}};function r_(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e){let e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);n.set(e,r),r+=t.byteLength}return n}function i_(e){return new o_(e).unpack()}function a_(e){let t=new s_,n=t.pack(e);return n instanceof Promise?n.then(()=>t.getBuffer()):t.getBuffer()}var o_=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){let e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){let e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){let t=this.read(e),n=0,r=``,i,a;for(;n<e;)i=t[n],i<160?(a=i,n++):(i^192)<32?(a=(i&31)<<6|t[n+1]&63,n+=2):(i^224)<16?(a=(i&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(i&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){let t=Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){let t={};for(let n=0;n<e;n++){let e=this.unpack();t[e]=this.unpack()}return t}unpack_float(){let e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,r=(e>>20&2047)-1023,i=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(n===0?1:-1)*i}read(e){let t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw Error(`BinaryPackFailure: read index out of range`)}},s_=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e==`string`)this.pack_string(e);else if(typeof e==`number`)Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e==`boolean`)e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e==`object`){if(e===null)this._bufferBuilder.append(192);else{let t=e.constructor;if(e instanceof Array){let t=this.pack_array(e);if(t instanceof Promise)return t.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if(`BYTES_PER_ELEMENT`in e){let t=e;this.pack_bin(new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else if(e instanceof Blob)return e.arrayBuffer().then(e=>{this.pack_bin(new Uint8Array(e)),this._bufferBuilder.flush()});else if(t==Object||t.toString().startsWith(`class`)){let t=this.pack_object(e);if(t instanceof Promise)return t.then(()=>this._bufferBuilder.flush())}else throw Error(`Type "${t.toString()}" not yet supported`)}}else throw Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){let t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw Error(`Invalid length`);this._bufferBuilder.append_buffer(e)}pack_string(e){let t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw Error(`Invalid length`);this._bufferBuilder.append_buffer(t)}pack_array(e){let t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw Error(`Invalid length`);let n=r=>{if(r<t){let t=this.pack(e[r]);return t instanceof Promise?t.then(()=>n(r+1)):n(r+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-0x8000000000000000&&e<=0x8000000000000000)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=0x10000000000000000)this._bufferBuilder.append(207),this.pack_uint64(e);else throw Error(`Invalid integer`)}pack_double(e){let t=0;e<0&&(t=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),r=e/2**n-1,i=Math.floor(r*2**52),a=2**32,o=t<<31|n+1023<<20|i/a&1048575,s=i%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(s)}pack_object(e){let t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw Error(`Invalid length`);let r=n=>{if(n<t.length){let i=t[n];if(e.hasOwnProperty(i)){this.pack(i);let t=this.pack(e[i]);if(t instanceof Promise)return t.then(()=>r(n+1))}return r(n+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){let t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){let t=e/2**32,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){let t=Math.floor(e/2**32),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new n_,this._textEncoder=new TextEncoder}},c_=!0,l_=!0;function u_(e,t,n){let r=e.match(t);return r&&r.length>=n&&parseFloat(r[n],10)}function d_(e,t,n){if(!e.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,`addEventListener`).writable){m_(`Unable to polyfill events`);return}let r=e.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return i.apply(this,arguments);let a=e=>{let t=n(e);t&&(r.handleEvent?r.handleEvent(t):r(t))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(r,a),i.apply(this,[e,a])};let a=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[t]||!this._eventMap[t].has(n))return a.apply(this,arguments);let r=this._eventMap[t].get(n);return this._eventMap[t].delete(n),this._eventMap[t].size===0&&delete this._eventMap[t],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[e,r])},Object.defineProperty(r,`on`+t,{get(){return this[`_on`+t]},set(e){this[`_on`+t]&&(this.removeEventListener(t,this[`_on`+t]),delete this[`_on`+t]),e&&this.addEventListener(t,this[`_on`+t]=e)},enumerable:!0,configurable:!0})}function f_(e){return typeof e==`boolean`?(c_=e,e?`adapter.js logging disabled`:`adapter.js logging enabled`):Error(`Argument type: `+typeof e+`. Please use a boolean.`)}function p_(e){return typeof e==`boolean`?(l_=!e,`adapter.js deprecation warnings `+(e?`disabled`:`enabled`)):Error(`Argument type: `+typeof e+`. Please use a boolean.`)}function m_(){if(typeof window==`object`){if(c_)return;typeof console<`u`&&typeof console.log==`function`&&console.log.apply(console,arguments)}}function h_(e,t){l_&&console.warn(e+` is deprecated, please use `+t+` instead.`)}function g_(e){let t={browser:null,version:null};if(e===void 0||!e.navigator||!e.navigator.userAgent)return t.browser=`Not a browser.`,t;let{navigator:n}=e;if(n.userAgentData&&n.userAgentData.brands){let e=n.userAgentData.brands.find(e=>e.brand===`Chromium`);if(e){let t=parseInt(e.version,10);if(t>=90)return{browser:`chrome`,version:t}}}if(n.mozGetUserMedia)t.browser=`firefox`,t.version=parseInt(u_(n.userAgent,/Firefox\/(\d+)\./,1));else if(n.webkitGetUserMedia||e.isSecureContext===!1&&e.webkitRTCPeerConnection)t.browser=`chrome`,t.version=parseInt(u_(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(e.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))t.browser=`safari`,t.version=parseInt(u_(n.userAgent,/AppleWebKit\/(\d+)\./,1)),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&`currentDirection`in e.RTCRtpTransceiver.prototype,t._safariVersion=u_(n.userAgent,/Version\/(\d+(\.?\d+))/,1);else return t.browser=`Not a supported browser.`,t;return t}function __(e){return Object.prototype.toString.call(e)===`[object Object]`}function v_(e){return __(e)?Object.keys(e).reduce(function(t,n){let r=__(e[n]),i=r?v_(e[n]):e[n],a=r&&!Object.keys(i).length;return i===void 0||a?t:Object.assign(t,{[n]:i})},{}):e}function y_(e,t,n){!t||n.has(t.id)||(n.set(t.id,t),Object.keys(t).forEach(r=>{r.endsWith(`Id`)?y_(e,e.get(t[r]),n):r.endsWith(`Ids`)&&t[r].forEach(t=>{y_(e,e.get(t),n)})}))}function b_(e,t,n){let r=n?`outbound-rtp`:`inbound-rtp`,i=new Map;if(t===null)return i;let a=[];return e.forEach(e=>{e.type===`track`&&e.trackIdentifier===t.id&&a.push(e)}),a.forEach(t=>{e.forEach(n=>{n.type===r&&n.trackId===t.id&&y_(e,n,i)})}),i}var x_=m_;function S_(e,t){if(t.version>=64)return;let n=e&&e.navigator;if(!n.mediaDevices)return;let r=function(e){if(typeof e!=`object`||e.mandatory||e.optional)return e;let t={};return Object.keys(e).forEach(n=>{if(n===`require`||n===`advanced`||n===`mediaSource`)return;let r=typeof e[n]==`object`?e[n]:{ideal:e[n]};r.exact!==void 0&&typeof r.exact==`number`&&(r.min=r.max=r.exact);let i=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):t===`deviceId`?`sourceId`:t};if(r.ideal!==void 0){t.optional=t.optional||[];let e={};typeof r.ideal==`number`?(e[i(`min`,n)]=r.ideal,t.optional.push(e),e={},e[i(`max`,n)]=r.ideal,t.optional.push(e)):(e[i(``,n)]=r.ideal,t.optional.push(e))}r.exact!==void 0&&typeof r.exact!=`number`?(t.mandatory=t.mandatory||{},t.mandatory[i(``,n)]=r.exact):[`min`,`max`].forEach(e=>{r[e]!==void 0&&(t.mandatory=t.mandatory||{},t.mandatory[i(e,n)]=r[e])})}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},i=function(e,i){if(t.version>=61)return i(e);if(e=JSON.parse(JSON.stringify(e)),e&&typeof e.audio==`object`){let t=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])};e=JSON.parse(JSON.stringify(e)),t(e.audio,`autoGainControl`,`googAutoGainControl`),t(e.audio,`noiseSuppression`,`googNoiseSuppression`),e.audio=r(e.audio)}if(e&&typeof e.video==`object`){let a=e.video.facingMode;a&&=typeof a==`object`?a:{ideal:a};let o=t.version<66;if(a&&(a.exact===`user`||a.exact===`environment`||a.ideal===`user`||a.ideal===`environment`)&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!o)){delete e.video.facingMode;let t;if(a.exact===`environment`||a.ideal===`environment`?t=[`back`,`rear`]:(a.exact===`user`||a.ideal===`user`)&&(t=[`front`]),t)return n.mediaDevices.enumerateDevices().then(n=>{n=n.filter(e=>e.kind===`videoinput`);let o=n.find(e=>t.some(t=>e.label.toLowerCase().includes(t)));return!o&&n.length&&t.includes(`back`)&&(o=n[n.length-1]),o&&(e.video.deviceId=a.exact?{exact:o.deviceId}:{ideal:o.deviceId}),e.video=r(e.video),x_(`chrome: `+JSON.stringify(e)),i(e)})}e.video=r(e.video)}return x_(`chrome: `+JSON.stringify(e)),i(e)},a=function(e){return t.version>=64?e:{name:{PermissionDeniedError:`NotAllowedError`,PermissionDismissedError:`NotAllowedError`,InvalidStateError:`NotAllowedError`,DevicesNotFoundError:`NotFoundError`,ConstraintNotSatisfiedError:`OverconstrainedError`,TrackStartError:`NotReadableError`,MediaDeviceFailedDueToShutdown:`NotAllowedError`,MediaDeviceKillSwitchOn:`NotAllowedError`,TabCaptureError:`AbortError`,ScreenCaptureError:`AbortError`,DeviceCaptureError:`AbortError`}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString(){return this.name+(this.message&&`: `)+this.message}}};if(n.getUserMedia=function(e,t,r){i(e,e=>{n.webkitGetUserMedia(e,t,e=>{r&&r(a(e))})})}.bind(n),n.mediaDevices.getUserMedia){let e=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(t){return i(t,t=>e(t).then(e=>{if(t.audio&&!e.getAudioTracks().length||t.video&&!e.getVideoTracks().length)throw e.getTracks().forEach(e=>{e.stop()}),new DOMException(``,`NotFoundError`);return e},e=>Promise.reject(a(e))))}}}var C_=e({fixNegotiationNeeded:()=>j_,shimAddTrackRemoveTrack:()=>k_,shimAddTrackRemoveTrackWithNative:()=>O_,shimGetSendersWithDtmf:()=>E_,shimGetUserMedia:()=>S_,shimMediaStream:()=>w_,shimOnTrack:()=>T_,shimPeerConnection:()=>A_,shimSenderReceiverGetStats:()=>D_});function w_(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function T_(e,t){if(!(t.version>102)){if(typeof e==`object`&&e.RTCPeerConnection&&!(`ontrack`in e.RTCPeerConnection.prototype)){Object.defineProperty(e.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(e){this._ontrack&&this.removeEventListener(`track`,this._ontrack),this.addEventListener(`track`,this._ontrack=e)},enumerable:!0,configurable:!0});let t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=t=>{t.stream.addEventListener(`addtrack`,n=>{let r;r=e.RTCPeerConnection.prototype.getReceivers?this.getReceivers().find(e=>e.track&&e.track.id===n.track.id):{track:n.track};let i=new Event(`track`);i.track=n.track,i.receiver=r,i.transceiver={receiver:r},i.streams=[t.stream],this.dispatchEvent(i)}),t.stream.getTracks().forEach(n=>{let r;r=e.RTCPeerConnection.prototype.getReceivers?this.getReceivers().find(e=>e.track&&e.track.id===n.id):{track:n};let i=new Event(`track`);i.track=n,i.receiver=r,i.transceiver={receiver:r},i.streams=[t.stream],this.dispatchEvent(i)})},this.addEventListener(`addstream`,this._ontrackpoly)),t.apply(this,arguments)}}else d_(e,`track`,e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}}function E_(e){if(typeof e==`object`&&e.RTCPeerConnection&&!(`getSenders`in e.RTCPeerConnection.prototype)&&`createDTMFSender`in e.RTCPeerConnection.prototype){let t=function(e,t){return{track:t,get dtmf(){return this._dtmf===void 0&&(this._dtmf=t.kind===`audio`?e.createDTMFSender(t):null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let n=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){let i=n.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};let r=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){r.apply(this,arguments);let t=this._senders.indexOf(e);t!==-1&&this._senders.splice(t,1)}}let n=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){this._senders=this._senders||[],n.apply(this,[e]),e.getTracks().forEach(e=>{this._senders.push(t(this,e))})};let r=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){this._senders=this._senders||[],r.apply(this,[e]),e.getTracks().forEach(e=>{let t=this._senders.find(t=>t.track===e);t&&this._senders.splice(this._senders.indexOf(t),1)})}}else if(typeof e==`object`&&e.RTCPeerConnection&&`getSenders`in e.RTCPeerConnection.prototype&&`createDTMFSender`in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!(`dtmf`in e.RTCRtpSender.prototype)){let t=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this._dtmf=this.track.kind===`audio`?this._pc.createDTMFSender(this.track):null),this._dtmf}})}}function D_(e,t){if(t.version>=67||!(typeof e==`object`&&e.RTCPeerConnection&&e.RTCRtpSender&&e.RTCRtpReceiver))return;if(!(`getStats`in e.RTCRtpSender.prototype)){let t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e});let n=e.RTCPeerConnection.prototype.addTrack;n&&(e.RTCPeerConnection.prototype.addTrack=function(){let e=n.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){let e=this;return this._pc.getStats().then(t=>b_(t,e.track,!0))}}if(!(`getStats`in e.RTCRtpReceiver.prototype)){let t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e}),d_(e,`track`,e=>(e.receiver._pc=e.srcElement,e)),e.RTCRtpReceiver.prototype.getStats=function(){let e=this;return this._pc.getStats().then(t=>b_(t,e.track,!1))}}if(!(`getStats`in e.RTCRtpSender.prototype&&`getStats`in e.RTCRtpReceiver.prototype))return;let n=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof e.MediaStreamTrack){let e=arguments[0],t,n,r;return this.getSenders().forEach(n=>{n.track===e&&(t?r=!0:t=n)}),this.getReceivers().forEach(t=>(t.track===e&&(n?r=!0:n=t),t.track===e)),r||t&&n?Promise.reject(new DOMException(`There are more than one sender or receiver for the track.`,`InvalidAccessError`)):t?t.getStats():n?n.getStats():Promise.reject(new DOMException(`There is no sender or receiver for the track.`,`InvalidAccessError`))}return n.apply(this,arguments)}}function O_(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(e=>this._shimmedLocalStreams[e][0])};let t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){if(!n)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let r=t.apply(this,arguments);return this._shimmedLocalStreams[n.id]?this._shimmedLocalStreams[n.id].indexOf(r)===-1&&this._shimmedLocalStreams[n.id].push(r):this._shimmedLocalStreams[n.id]=[n,r],r};let n=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(e=>{if(this.getSenders().find(t=>t.track===e))throw new DOMException(`Track already exists.`,`InvalidAccessError`)});let t=this.getSenders();n.apply(this,arguments);let r=this.getSenders().filter(e=>t.indexOf(e)===-1);this._shimmedLocalStreams[e.id]=[e].concat(r)};let r=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],r.apply(this,arguments)};let i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(t=>{let n=this._shimmedLocalStreams[t].indexOf(e);n!==-1&&this._shimmedLocalStreams[t].splice(n,1),this._shimmedLocalStreams[t].length===1&&delete this._shimmedLocalStreams[t]}),i.apply(this,arguments)}}function k_(e,t){if(!e.RTCPeerConnection)return;if(e.RTCPeerConnection.prototype.addTrack&&t.version>=65)return O_(e);let n=e.RTCPeerConnection.prototype.getLocalStreams;e.RTCPeerConnection.prototype.getLocalStreams=function(){let e=n.apply(this);return this._reverseStreams=this._reverseStreams||{},e.map(e=>this._reverseStreams[e.id])};let r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(t){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},t.getTracks().forEach(e=>{if(this.getSenders().find(t=>t.track===e))throw new DOMException(`Track already exists.`,`InvalidAccessError`)}),!this._reverseStreams[t.id]){let n=new e.MediaStream(t.getTracks());this._streams[t.id]=n,this._reverseStreams[n.id]=t,t=n}r.apply(this,[t])};let i=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},e.RTCPeerConnection.prototype.addTrack=function(t,n){if(this.signalingState===`closed`)throw new DOMException(`The RTCPeerConnection's signalingState is 'closed'.`,`InvalidStateError`);let r=[].slice.call(arguments,1);if(r.length!==1||!r[0].getTracks().find(e=>e===t))throw new DOMException(`The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.`,`NotSupportedError`);if(this.getSenders().find(e=>e.track===t))throw new DOMException(`Track already exists.`,`InvalidAccessError`);this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let i=this._streams[n.id];if(i)i.addTrack(t),Promise.resolve().then(()=>{this.dispatchEvent(new Event(`negotiationneeded`))});else{let r=new e.MediaStream([t]);this._streams[n.id]=r,this._reverseStreams[r.id]=n,this.addStream(r)}return this.getSenders().find(e=>e.track===t)};function a(e,t){let n=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(t=>{let r=e._reverseStreams[t],i=e._streams[r.id];n=n.replace(new RegExp(i.id,`g`),r.id)}),new RTCSessionDescription({type:t.type,sdp:n})}function o(e,t){let n=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(t=>{let r=e._reverseStreams[t],i=e._streams[r.id];n=n.replace(new RegExp(r.id,`g`),i.id)}),new RTCSessionDescription({type:t.type,sdp:n})}[`createOffer`,`createAnswer`].forEach(function(t){let n=e.RTCPeerConnection.prototype[t],r={[t](){let e=arguments;return arguments.length&&typeof arguments[0]==`function`?n.apply(this,[t=>{let n=a(this,t);e[0].apply(null,[n])},t=>{e[1]&&e[1].apply(null,t)},arguments[2]]):n.apply(this,arguments).then(e=>a(this,e))}};e.RTCPeerConnection.prototype[t]=r[t]});let s=e.RTCPeerConnection.prototype.setLocalDescription;e.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type||(arguments[0]=o(this,arguments[0])),s.apply(this,arguments)};let c=Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype,`localDescription`);Object.defineProperty(e.RTCPeerConnection.prototype,"localDescription",{get(){let e=c.get.apply(this);return e.type===``?e:a(this,e)}}),e.RTCPeerConnection.prototype.removeTrack=function(e){if(this.signalingState===`closed`)throw new DOMException(`The RTCPeerConnection's signalingState is 'closed'.`,`InvalidStateError`);if(!e._pc)throw new DOMException(`Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.`,`TypeError`);if(e._pc!==this)throw new DOMException(`Sender was not created by this connection.`,`InvalidAccessError`);this._streams=this._streams||{};let t;Object.keys(this._streams).forEach(n=>{this._streams[n].getTracks().find(t=>e.track===t)&&(t=this._streams[n])}),t&&(t.getTracks().length===1?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event(`negotiationneeded`)))}}function A_(e,t){!e.RTCPeerConnection&&e.webkitRTCPeerConnection&&(e.RTCPeerConnection=e.webkitRTCPeerConnection),e.RTCPeerConnection&&t.version<53&&[`setLocalDescription`,`setRemoteDescription`,`addIceCandidate`].forEach(function(t){let n=e.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t===`addIceCandidate`?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};e.RTCPeerConnection.prototype[t]=r[t]})}function j_(e,t){t.version>102||d_(e,`negotiationneeded`,e=>{let n=e.target;if(!((t.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics===`plan-b`)&&n.signalingState!==`stable`))return e})}function M_(e,t){let n=e&&e.navigator;if(!n.mediaDevices)return;let r=e&&e.MediaStreamTrack;if(n.getUserMedia=function(e,t,r){h_(`navigator.getUserMedia`,`navigator.mediaDevices.getUserMedia`),n.mediaDevices.getUserMedia(e).then(t,r)},!(t.version>55&&`autoGainControl`in n.mediaDevices.getSupportedConstraints())){let e=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])},t=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(n){return typeof n==`object`&&typeof n.audio==`object`&&(n=JSON.parse(JSON.stringify(n)),e(n.audio,`autoGainControl`,`mozAutoGainControl`),e(n.audio,`noiseSuppression`,`mozNoiseSuppression`)),t(n)},r&&r.prototype.getSettings){let t=r.prototype.getSettings;r.prototype.getSettings=function(){let n=t.apply(this,arguments);return e(n,`mozAutoGainControl`,`autoGainControl`),e(n,`mozNoiseSuppression`,`noiseSuppression`),n}}if(r&&r.prototype.applyConstraints){let t=r.prototype.applyConstraints;r.prototype.applyConstraints=function(n){return this.kind===`audio`&&typeof n==`object`&&(n=JSON.parse(JSON.stringify(n)),e(n,`autoGainControl`,`mozAutoGainControl`),e(n,`noiseSuppression`,`mozNoiseSuppression`)),t.apply(this,[n])}}}}function N_(e,t){e.navigator.mediaDevices&&(e.navigator.mediaDevices&&`getDisplayMedia`in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let e=new DOMException(`getDisplayMedia without video constraints is undefined`);return e.name=`NotFoundError`,e.code=8,Promise.reject(e)}return n.video===!0?n.video={mediaSource:t}:n.video.mediaSource=t,e.navigator.mediaDevices.getUserMedia(n)}))}var P_=e({shimAddTransceiver:()=>H_,shimCreateAnswer:()=>G_,shimCreateOffer:()=>W_,shimGetDisplayMedia:()=>N_,shimGetParameters:()=>U_,shimGetStats:()=>L_,shimGetUserMedia:()=>M_,shimOnTrack:()=>F_,shimPeerConnection:()=>I_,shimRTCDataChannel:()=>V_,shimReceiverGetStats:()=>z_,shimRemoveStream:()=>B_,shimSenderGetStats:()=>R_});function F_(e){typeof e==`object`&&e.RTCTrackEvent&&`receiver`in e.RTCTrackEvent.prototype&&!(`transceiver`in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function I_(e,t){typeof e!=`object`||!(e.RTCPeerConnection||e.mozRTCPeerConnection)||(!e.RTCPeerConnection&&e.mozRTCPeerConnection&&(e.RTCPeerConnection=e.mozRTCPeerConnection),t.version<53&&[`setLocalDescription`,`setRemoteDescription`,`addIceCandidate`].forEach(function(t){let n=e.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t===`addIceCandidate`?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};e.RTCPeerConnection.prototype[t]=r[t]}))}function L_(e,t){if(typeof e!=`object`||!(e.RTCPeerConnection||e.mozRTCPeerConnection)||t.version>=151)return;let n={inboundrtp:`inbound-rtp`,outboundrtp:`outbound-rtp`,candidatepair:`candidate-pair`,localcandidate:`local-candidate`,remotecandidate:`remote-candidate`},r=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){let[e,i,a]=arguments;return this.signalingState===`closed`?Promise.resolve(new Map):r.apply(this,[e||null]).then(e=>{if(t.version<53&&!i)try{e.forEach(e=>{e.type=n[e.type]||e.type})}catch(t){if(t.name!==`TypeError`)throw t;e.forEach((t,r)=>{e.set(r,Object.assign({},t,{type:n[t.type]||t.type}))})}return e}).then(i,a)}}function R_(e){if(!(typeof e==`object`&&e.RTCPeerConnection&&e.RTCRtpSender)||e.RTCRtpSender&&`getStats`in e.RTCRtpSender.prototype)return;let t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e});let n=e.RTCPeerConnection.prototype.addTrack;n&&(e.RTCPeerConnection.prototype.addTrack=function(){let e=n.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function z_(e){if(!(typeof e==`object`&&e.RTCPeerConnection&&e.RTCRtpSender)||e.RTCRtpSender&&`getStats`in e.RTCRtpReceiver.prototype)return;let t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e}),d_(e,`track`,e=>(e.receiver._pc=e.srcElement,e)),e.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function B_(e){!e.RTCPeerConnection||`removeStream`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){h_(`removeStream`,`removeTrack`),this.getSenders().forEach(t=>{t.track&&e.getTracks().includes(t.track)&&this.removeTrack(t)})})}function V_(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function H_(e,t){if(!(typeof e==`object`&&e.RTCPeerConnection)||t.version>=110)return;let n=e.RTCPeerConnection.prototype.addTransceiver;n&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let e=arguments[1]&&arguments[1].sendEncodings;e===void 0&&(e=[]),e=[...e];let t=e.length>0;t&&e.forEach(e=>{if(`rid`in e&&!/^[a-z0-9]{0,16}$/i.test(e.rid))throw TypeError(`Invalid RID value provided.`);if(`scaleResolutionDownBy`in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw RangeError(`scale_resolution_down_by must be >= 1.0`);if(`maxFramerate`in e&&!(parseFloat(e.maxFramerate)>=0))throw RangeError(`max_framerate must be >= 0.0`)});let r=n.apply(this,arguments);if(t){let{sender:t}=r,n=t.getParameters();(!(`encodings`in n)||n.encodings.length===1&&Object.keys(n.encodings[0]).length===0)&&(n.encodings=e,t.sendEncodings=e,this.setParametersPromises.push(t.setParameters(n).then(()=>{delete t.sendEncodings}).catch(()=>{delete t.sendEncodings})))}return r})}function U_(e,t){if(!(typeof e==`object`&&e.RTCRtpSender)||t.version>=110)return;let n=e.RTCRtpSender.prototype.getParameters;n&&(e.RTCRtpSender.prototype.getParameters=function(){let e=n.apply(this,arguments);return`encodings`in e||(e.encodings=[].concat(this.sendEncodings||[{}])),e})}function W_(e,t){if(!(typeof e==`object`&&e.RTCPeerConnection)||t.version>=110)return;let n=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>n.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):n.apply(this,arguments)}}function G_(e,t){if(!(typeof e==`object`&&e.RTCPeerConnection)||t.version>=110)return;let n=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>n.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):n.apply(this,arguments)}}var K_=e({shimAudioContext:()=>tv,shimCallbacksAPI:()=>Y_,shimConstraints:()=>Z_,shimCreateOfferLegacy:()=>ev,shimGetUserMedia:()=>X_,shimLocalStreamsAPI:()=>q_,shimRTCIceServerUrls:()=>Q_,shimRemoteStreamsAPI:()=>J_,shimTrackEventTransceiver:()=>$_});function q_(e){if(!(typeof e!=`object`||!e.RTCPeerConnection)){if(`getLocalStreams`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||=[],this._localStreams}),!(`addStream`in e.RTCPeerConnection.prototype)){let t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){this._localStreams||=[],this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(n=>t.call(this,n,e)),e.getVideoTracks().forEach(n=>t.call(this,n,e))},e.RTCPeerConnection.prototype.addTrack=function(e,...n){return n&&n.forEach(e=>{this._localStreams?this._localStreams.includes(e)||this._localStreams.push(e):this._localStreams=[e]}),t.apply(this,arguments)}}`removeStream`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){this._localStreams||=[];let t=this._localStreams.indexOf(e);if(t===-1)return;this._localStreams.splice(t,1);let n=e.getTracks();this.getSenders().forEach(e=>{n.includes(e.track)&&this.removeTrack(e)})})}}function J_(e){if(!(typeof e!=`object`||!e.RTCPeerConnection)&&(`getRemoteStreams`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!(`onaddstream`in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(e){this._onaddstream&&(this.removeEventListener(`addstream`,this._onaddstream),this.removeEventListener(`track`,this._onaddstreampoly)),this.addEventListener(`addstream`,this._onaddstream=e),this.addEventListener(`track`,this._onaddstreampoly=e=>{e.streams.forEach(e=>{if(this._remoteStreams||=[],this._remoteStreams.includes(e))return;this._remoteStreams.push(e);let t=new Event(`addstream`);t.stream=e,this.dispatchEvent(t)})})}});let t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){let e=this;return this._onaddstreampoly||this.addEventListener(`track`,this._onaddstreampoly=function(t){t.streams.forEach(t=>{if(e._remoteStreams||=[],e._remoteStreams.indexOf(t)>=0)return;e._remoteStreams.push(t);let n=new Event(`addstream`);n.stream=t,e.dispatchEvent(n)})}),t.apply(e,arguments)}}}function Y_(e){if(typeof e!=`object`||!e.RTCPeerConnection)return;let t=e.RTCPeerConnection.prototype,n=t.createOffer,r=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,o=t.addIceCandidate;t.createOffer=function(e,t){let r=arguments.length>=2?arguments[2]:arguments[0],i=n.apply(this,[r]);return t?(i.then(e,t),Promise.resolve()):i},t.createAnswer=function(e,t){let n=arguments.length>=2?arguments[2]:arguments[0],i=r.apply(this,[n]);return t?(i.then(e,t),Promise.resolve()):i};let s=function(e,t,n){let r=i.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r};t.setLocalDescription=s,s=function(e,t,n){let r=a.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r},t.setRemoteDescription=s,s=function(e,t,n){let r=o.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r},t.addIceCandidate=s}function X_(e){let t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){let e=t.mediaDevices,n=e.getUserMedia.bind(e);t.mediaDevices.getUserMedia=e=>n(Z_(e))}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,n,r){t.mediaDevices.getUserMedia(e).then(n,r)}.bind(t))}function Z_(e){return e&&e.video!==void 0?Object.assign({},e,{video:v_(e.video)}):e}function Q_(e){if(!e.RTCPeerConnection)return;let t=e.RTCPeerConnection;e.RTCPeerConnection=function(e,n){if(e&&e.iceServers){let t=[];for(let n=0;n<e.iceServers.length;n++){let r=e.iceServers[n];r.urls===void 0&&r.url?(h_(`RTCIceServer.url`,`RTCIceServer.urls`),r=JSON.parse(JSON.stringify(r)),r.urls=r.url,delete r.url,t.push(r)):t.push(e.iceServers[n])}e.iceServers=t}return new t(e,n)},e.RTCPeerConnection.prototype=t.prototype,`generateCertificate`in t&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get(){return t.generateCertificate}})}function $_(e){typeof e==`object`&&e.RTCTrackEvent&&`receiver`in e.RTCTrackEvent.prototype&&!(`transceiver`in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function ev(e){let t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){e.offerToReceiveAudio!==void 0&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);let t=this.getTransceivers().find(e=>e.receiver.track.kind===`audio`);e.offerToReceiveAudio===!1&&t?t.direction===`sendrecv`?t.setDirection?t.setDirection(`sendonly`):t.direction=`sendonly`:t.direction===`recvonly`&&(t.setDirection?t.setDirection(`inactive`):t.direction=`inactive`):e.offerToReceiveAudio===!0&&!t&&this.addTransceiver(`audio`,{direction:`recvonly`}),e.offerToReceiveVideo!==void 0&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);let n=this.getTransceivers().find(e=>e.receiver.track.kind===`video`);e.offerToReceiveVideo===!1&&n?n.direction===`sendrecv`?n.setDirection?n.setDirection(`sendonly`):n.direction=`sendonly`:n.direction===`recvonly`&&(n.setDirection?n.setDirection(`inactive`):n.direction=`inactive`):e.offerToReceiveVideo===!0&&!n&&this.addTransceiver(`video`,{direction:`recvonly`})}return t.apply(this,arguments)}}function tv(e){typeof e!=`object`||e.AudioContext||(e.AudioContext=e.webkitAudioContext)}var nv=n(((e,t)=>{var n={};n.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},n.localCName=n.generateIdentifier(),n.splitLines=function(e){return e.trim().split(`
`).map(e=>e.trim())},n.splitSections=function(e){return e.split(`
m=`).map((e,t)=>(t>0?`m=`+e:e).trim()+`\r
`)},n.getDescription=function(e){let t=n.splitSections(e);return t&&t[0]},n.getMediaSections=function(e){let t=n.splitSections(e);return t.shift(),t},n.matchPrefix=function(e,t){return n.splitLines(e).filter(e=>e.indexOf(t)===0)},n.parseCandidate=function(e){let t;t=e.indexOf(`a=candidate:`)===0?e.substring(12).split(` `):e.substring(10).split(` `);let n={foundation:t[0],component:{1:`rtp`,2:`rtcp`}[t[1]]||t[1],protocol:t[2].toLowerCase(),priority:parseInt(t[3],10),ip:t[4],address:t[4],port:parseInt(t[5],10),type:t[7]};for(let e=8;e<t.length;e+=2)switch(t[e]){case`raddr`:n.relatedAddress=t[e+1];break;case`rport`:n.relatedPort=parseInt(t[e+1],10);break;case`tcptype`:n.tcpType=t[e+1];break;case`ufrag`:n.ufrag=t[e+1],n.usernameFragment=t[e+1];break;default:n[t[e]]===void 0&&(n[t[e]]=t[e+1])}return n},n.writeCandidate=function(e){let t=[];t.push(e.foundation);let n=e.component;n===`rtp`?t.push(1):n===`rtcp`?t.push(2):t.push(n),t.push(e.protocol.toUpperCase()),t.push(e.priority),t.push(e.address||e.ip),t.push(e.port);let r=e.type;return t.push(`typ`),t.push(r),r!==`host`&&e.relatedAddress&&e.relatedPort!==void 0&&(t.push(`raddr`),t.push(e.relatedAddress),t.push(`rport`),t.push(e.relatedPort)),e.tcpType&&e.protocol.toLowerCase()===`tcp`&&(t.push(`tcptype`),t.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(t.push(`ufrag`),t.push(e.usernameFragment||e.ufrag)),`candidate:`+t.join(` `)},n.parseIceOptions=function(e){return e.substring(14).split(` `)},n.parseRtpMap=function(e){let t=e.substring(9).split(` `),n={payloadType:parseInt(t.shift(),10)};return t=t[0].split(`/`),n.name=t[0],n.clockRate=parseInt(t[1],10),n.channels=t.length===3?parseInt(t[2],10):1,n.numChannels=n.channels,n},n.writeRtpMap=function(e){let t=e.payloadType;e.preferredPayloadType!==void 0&&(t=e.preferredPayloadType);let n=e.channels||e.numChannels||1;return`a=rtpmap:`+t+` `+e.name+`/`+e.clockRate+(n===1?``:`/`+n)+`\r
`},n.parseExtmap=function(e){let t=e.substring(9).split(` `);return{id:parseInt(t[0],10),direction:t[0].indexOf(`/`)>0?t[0].split(`/`)[1]:`sendrecv`,uri:t[1],attributes:t.slice(2).join(` `)}},n.writeExtmap=function(e){return`a=extmap:`+(e.id||e.preferredId)+(e.direction&&e.direction!==`sendrecv`?`/`+e.direction:``)+` `+e.uri+(e.attributes?` `+e.attributes:``)+`\r
`},n.parseFmtp=function(e){let t={},n,r=e.substring(e.indexOf(` `)+1).split(`;`);for(let e=0;e<r.length;e++)n=r[e].trim().split(`=`),t[n[0].trim()]=n[1];return t},n.writeFmtp=function(e){let t=``,n=e.payloadType;if(e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){let r=[];Object.keys(e.parameters).forEach(t=>{e.parameters[t]===void 0?r.push(t):r.push(t+`=`+e.parameters[t])}),t+=`a=fmtp:`+n+` `+r.join(`;`)+`\r
`}return t},n.parseRtcpFb=function(e){let t=e.substring(e.indexOf(` `)+1).split(` `);return{type:t.shift(),parameter:t.join(` `)}},n.writeRtcpFb=function(e){let t=``,n=e.payloadType;return e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(e=>{t+=`a=rtcp-fb:`+n+` `+e.type+(e.parameter&&e.parameter.length?` `+e.parameter:``)+`\r
`}),t},n.parseSsrcMedia=function(e){let t=e.indexOf(` `),n={ssrc:parseInt(e.substring(7,t),10)},r=e.indexOf(`:`,t);return r>-1?(n.attribute=e.substring(t+1,r),n.value=e.substring(r+1)):n.attribute=e.substring(t+1),n},n.parseSsrcGroup=function(e){let t=e.substring(13).split(` `);return{semantics:t.shift(),ssrcs:t.map(e=>parseInt(e,10))}},n.getMid=function(e){let t=n.matchPrefix(e,`a=mid:`)[0];if(t)return t.substring(6)},n.parseFingerprint=function(e){let t=e.substring(14).split(` `);return{algorithm:t[0].toLowerCase(),value:t[1].toUpperCase()}},n.getDtlsParameters=function(e,t){return{role:`auto`,fingerprints:n.matchPrefix(e+t,`a=fingerprint:`).map(n.parseFingerprint)}},n.writeDtlsParameters=function(e,t){let n=`a=setup:`+t+`\r
`;return e.fingerprints.forEach(e=>{n+=`a=fingerprint:`+e.algorithm+` `+e.value+`\r
`}),n},n.parseCryptoLine=function(e){let t=e.substring(9).split(` `);return{tag:parseInt(t[0],10),cryptoSuite:t[1],keyParams:t[2],sessionParams:t.slice(3)}},n.writeCryptoLine=function(e){return`a=crypto:`+e.tag+` `+e.cryptoSuite+` `+(typeof e.keyParams==`object`?n.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?` `+e.sessionParams.join(` `):``)+`\r
`},n.parseCryptoKeyParams=function(e){if(e.indexOf(`inline:`)!==0)return null;let t=e.substring(7).split(`|`);return{keyMethod:`inline`,keySalt:t[0],lifeTime:t[1],mkiValue:t[2]?t[2].split(`:`)[0]:void 0,mkiLength:t[2]?t[2].split(`:`)[1]:void 0}},n.writeCryptoKeyParams=function(e){return e.keyMethod+`:`+e.keySalt+(e.lifeTime?`|`+e.lifeTime:``)+(e.mkiValue&&e.mkiLength?`|`+e.mkiValue+`:`+e.mkiLength:``)},n.getCryptoParameters=function(e,t){return n.matchPrefix(e+t,`a=crypto:`).map(n.parseCryptoLine)},n.getIceParameters=function(e,t){let r=n.matchPrefix(e+t,`a=ice-ufrag:`)[0],i=n.matchPrefix(e+t,`a=ice-pwd:`)[0];return r&&i?{usernameFragment:r.substring(12),password:i.substring(10)}:null},n.writeIceParameters=function(e){let t=`a=ice-ufrag:`+e.usernameFragment+`\r
a=ice-pwd:`+e.password+`\r
`;return e.iceLite&&(t+=`a=ice-lite\r
`),t},n.parseRtpParameters=function(e){let t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=n.splitLines(e)[0].split(` `);t.profile=r[2];for(let i=3;i<r.length;i++){let a=r[i],o=n.matchPrefix(e,`a=rtpmap:`+a+` `)[0];if(o){let r=n.parseRtpMap(o),i=n.matchPrefix(e,`a=fmtp:`+a+` `);switch(r.parameters=i.length?n.parseFmtp(i[0]):{},r.rtcpFeedback=n.matchPrefix(e,`a=rtcp-fb:`+a+` `).map(n.parseRtcpFb),t.codecs.push(r),r.name.toUpperCase()){case`RED`:case`ULPFEC`:t.fecMechanisms.push(r.name.toUpperCase())}}}n.matchPrefix(e,`a=extmap:`).forEach(e=>{t.headerExtensions.push(n.parseExtmap(e))});let i=n.matchPrefix(e,`a=rtcp-fb:* `).map(n.parseRtcpFb);return t.codecs.forEach(e=>{i.forEach(t=>{e.rtcpFeedback.find(e=>e.type===t.type&&e.parameter===t.parameter)||e.rtcpFeedback.push(t)})}),t},n.writeRtpDescription=function(e,t){let r=``;r+=`m=`+e+` `,r+=t.codecs.length>0?`9`:`0`,r+=` `+(t.profile||`UDP/TLS/RTP/SAVPF`)+` `,r+=t.codecs.map(e=>e.preferredPayloadType===void 0?e.payloadType:e.preferredPayloadType).join(` `)+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,t.codecs.forEach(e=>{r+=n.writeRtpMap(e),r+=n.writeFmtp(e),r+=n.writeRtcpFb(e)});let i=0;return t.codecs.forEach(e=>{e.maxptime>i&&(i=e.maxptime)}),i>0&&(r+=`a=maxptime:`+i+`\r
`),t.headerExtensions&&t.headerExtensions.forEach(e=>{r+=n.writeExtmap(e)}),r},n.parseRtpEncodingParameters=function(e){let t=[],r=n.parseRtpParameters(e),i=r.fecMechanisms.indexOf(`RED`)!==-1,a=r.fecMechanisms.indexOf(`ULPFEC`)!==-1,o=n.matchPrefix(e,`a=ssrc:`).map(e=>n.parseSsrcMedia(e)).filter(e=>e.attribute===`cname`),s=o.length>0&&o[0].ssrc,c,l=n.matchPrefix(e,`a=ssrc-group:FID`).map(e=>e.substring(17).split(` `).map(e=>parseInt(e,10)));l.length>0&&l[0].length>1&&l[0][0]===s&&(c=l[0][1]),r.codecs.forEach(e=>{if(e.name.toUpperCase()===`RTX`&&e.parameters.apt){let n={ssrc:s,codecPayloadType:parseInt(e.parameters.apt,10)};s&&c&&(n.rtx={ssrc:c}),t.push(n),i&&(n=JSON.parse(JSON.stringify(n)),n.fec={ssrc:s,mechanism:a?`red+ulpfec`:`red`},t.push(n))}}),t.length===0&&s&&t.push({ssrc:s});let u=n.matchPrefix(e,`b=`);return u.length&&(u=u[0].indexOf(`b=TIAS:`)===0?parseInt(u[0].substring(7),10):u[0].indexOf(`b=AS:`)===0?parseInt(u[0].substring(5),10)*1e3*.95-16e3:void 0,t.forEach(e=>{e.maxBitrate=u})),t},n.parseRtcpParameters=function(e){let t={},r=n.matchPrefix(e,`a=ssrc:`).map(e=>n.parseSsrcMedia(e)).filter(e=>e.attribute===`cname`)[0];r&&(t.cname=r.value,t.ssrc=r.ssrc);let i=n.matchPrefix(e,`a=rtcp-rsize`);return t.reducedSize=i.length>0,t.compound=i.length===0,t.mux=n.matchPrefix(e,`a=rtcp-mux`).length>0,t},n.writeRtcpParameters=function(e){let t=``;return e.reducedSize&&(t+=`a=rtcp-rsize\r
`),e.mux&&(t+=`a=rtcp-mux\r
`),e.ssrc!==void 0&&e.cname&&(t+=`a=ssrc:`+e.ssrc+` cname:`+e.cname+`\r
`),t},n.parseMsid=function(e){let t,r=n.matchPrefix(e,`a=msid:`);if(r.length===1)return t=r[0].substring(7).split(` `),{stream:t[0],track:t[1]};let i=n.matchPrefix(e,`a=ssrc:`).map(e=>n.parseSsrcMedia(e)).filter(e=>e.attribute===`msid`);if(i.length>0)return t=i[0].value.split(` `),{stream:t[0],track:t[1]}},n.parseSctpDescription=function(e){let t=n.parseMLine(e),r=n.matchPrefix(e,`a=max-message-size:`),i;r.length>0&&(i=parseInt(r[0].substring(19),10)),isNaN(i)&&(i=65536);let a=n.matchPrefix(e,`a=sctp-port:`);if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:t.fmt,maxMessageSize:i};let o=n.matchPrefix(e,`a=sctpmap:`);if(o.length>0){let e=o[0].substring(10).split(` `);return{port:parseInt(e[0],10),protocol:e[1],maxMessageSize:i}}},n.writeSctpDescription=function(e,t){let n=[];return n=e.protocol===`DTLS/SCTP`?[`m=`+e.kind+` 9 `+e.protocol+` `+t.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,`a=sctpmap:`+t.port+` `+t.protocol+` 65535\r
`]:[`m=`+e.kind+` 9 `+e.protocol+` `+t.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,`a=sctp-port:`+t.port+`\r
`],t.maxMessageSize!==void 0&&n.push(`a=max-message-size:`+t.maxMessageSize+`\r
`),n.join(``)},n.generateSessionId=function(){return Math.random().toString().substr(2,22)},n.writeSessionBoilerplate=function(e,t,r){let i,a=t===void 0?2:t;return i=e||n.generateSessionId(),`v=0\r
o=`+(r||`thisisadapterortc`)+` `+i+` `+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},n.getDirection=function(e,t){let r=n.splitLines(e);for(let e=0;e<r.length;e++)switch(r[e]){case`a=sendrecv`:case`a=sendonly`:case`a=recvonly`:case`a=inactive`:return r[e].substring(2)}return t?n.getDirection(t):`sendrecv`},n.getKind=function(e){return n.splitLines(e)[0].split(` `)[0].substring(2)},n.isRejected=function(e){return e.split(` `,2)[1]===`0`},n.parseMLine=function(e){let t=n.splitLines(e)[0].substring(2).split(` `);return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(` `)}},n.parseOLine=function(e){let t=n.matchPrefix(e,`o=`)[0].substring(2).split(` `);return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},n.isValidSDP=function(e){if(typeof e!=`string`||e.length===0)return!1;let t=n.splitLines(e);for(let e=0;e<t.length;e++)if(t[e].length<2||t[e].charAt(1)!==`=`)return!1;return!0},typeof t==`object`&&(t.exports=n)})),rv=e({removeExtmapAllowMixed:()=>uv,shimAddIceCandidateNullOrEmpty:()=>dv,shimConnectionState:()=>lv,shimMaxMessageSize:()=>sv,shimParameterlessSetLocalDescription:()=>fv,shimRTCIceCandidate:()=>av,shimRTCIceCandidateRelayProtocol:()=>ov,shimSendThrowTypeError:()=>cv}),iv=t(nv());function av(e){if(!e.RTCIceCandidate||e.RTCIceCandidate&&`foundation`in e.RTCIceCandidate.prototype)return;let t=e.RTCIceCandidate;e.RTCIceCandidate=function(e){if(typeof e==`object`&&e.candidate&&e.candidate.indexOf(`a=`)===0&&(e=JSON.parse(JSON.stringify(e)),e.candidate=e.candidate.substring(2)),e.candidate&&e.candidate.length){let n=new t(e),r=iv.default.parseCandidate(e.candidate);for(let e in r)e in n||Object.defineProperty(n,e,{value:r[e]});return n.toJSON=function(){return{candidate:n.candidate,sdpMid:n.sdpMid,sdpMLineIndex:n.sdpMLineIndex,usernameFragment:n.usernameFragment}},n}return new t(e)},e.RTCIceCandidate.prototype=t.prototype,d_(e,`icecandidate`,t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new e.RTCIceCandidate(t.candidate),writable:`false`}),t))}function ov(e){!e.RTCIceCandidate||e.RTCIceCandidate&&`relayProtocol`in e.RTCIceCandidate.prototype||d_(e,`icecandidate`,e=>{if(e.candidate){let t=iv.default.parseCandidate(e.candidate.candidate);t.type===`relay`&&(e.candidate.relayProtocol={0:`tls`,1:`tcp`,2:`udp`}[t.priority>>24])}return e})}function sv(e,t){if(!e.RTCPeerConnection||t.browser===`chrome`&&t.version>102||t.browser===`firefox`&&t.version>=113)return;`sctp`in e.RTCPeerConnection.prototype||Object.defineProperty(e.RTCPeerConnection.prototype,"sctp",{get(){return this._sctp===void 0?null:this._sctp}});let n=function(e){if(!e||!e.sdp)return!1;let t=iv.default.splitSections(e.sdp);return t.shift(),t.some(e=>{let t=iv.default.parseMLine(e);return t&&t.kind===`application`&&t.protocol.indexOf(`SCTP`)!==-1})},r=function(e){let t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(t===null||t.length<2)return-1;let n=parseInt(t[1],10);return n===n?n:-1},i=function(e){let n=65536;return t.browser===`firefox`&&(n=t.version<57?e===-1?16384:2147483637:t.version<60?t.version===57?65535:65536:2147483637),n},a=function(e,n){let r=65536;t.browser===`firefox`&&t.version===57&&(r=65535);let i=iv.default.matchPrefix(e.sdp,`a=max-message-size:`);return i.length>0?r=parseInt(i[0].substring(19),10):t.browser===`firefox`&&n!==-1&&(r=2147483637),r},o=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,t.browser===`chrome`&&t.version>=76){let{sdpSemantics:e}=this.getConfiguration();e===`plan-b`&&Object.defineProperty(this,"sctp",{get(){return this._sctp===void 0?null:this._sctp},enumerable:!0,configurable:!0})}if(n(arguments[0])){let e=r(arguments[0]),t=i(e),n=a(arguments[0],e),o;o=t===0&&n===0?1/0:t===0||n===0?Math.max(t,n):Math.min(t,n);let s={};Object.defineProperty(s,"maxMessageSize",{get(){return o}}),this._sctp=s}return o.apply(this,arguments)}}function cv(e,t){if(!(e.RTCPeerConnection&&`createDataChannel`in e.RTCPeerConnection.prototype)||t.browser===`chrome`&&t.version>=149||t.browser===`firefox`&&t.version>60)return;function n(e,t){let n=e.send;e.send=function(){let r=arguments[0],i=r.length||r.size||r.byteLength;if(e.readyState===`open`&&t.sctp&&i>t.sctp.maxMessageSize)throw TypeError(`Message too large (can send a maximum of `+t.sctp.maxMessageSize+` bytes)`);return n.apply(e,arguments)}}let r=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){let e=r.apply(this,arguments);return n(e,this),e},d_(e,`datachannel`,e=>(n(e.channel,e.target),e))}function lv(e){if(!e.RTCPeerConnection||`connectionState`in e.RTCPeerConnection.prototype)return;let t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get(){return{completed:`connected`,checking:`connecting`}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(e){this._onconnectionstatechange&&(this.removeEventListener(`connectionstatechange`,this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener(`connectionstatechange`,this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),[`setLocalDescription`,`setRemoteDescription`].forEach(e=>{let n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=e=>{let t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;let n=new Event(`connectionstatechange`,e);t.dispatchEvent(n)}return e},this.addEventListener(`iceconnectionstatechange`,this._connectionstatechangepoly)),n.apply(this,arguments)}})}function uv(e,t){if(!e.RTCPeerConnection||t.browser===`chrome`&&t.version>=71||t.browser===`safari`&&t._safariVersion>=13.1)return;let n=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(t){if(t&&t.sdp&&t.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let n=t.sdp.split(`
`).filter(e=>e.trim()!==`a=extmap-allow-mixed`).join(`
`);e.RTCSessionDescription&&t instanceof e.RTCSessionDescription?arguments[0]=new e.RTCSessionDescription({type:t.type,sdp:n}):t.sdp=n}return n.apply(this,arguments)}}function dv(e,t){if(!(e.RTCPeerConnection&&e.RTCPeerConnection.prototype))return;let n=e.RTCPeerConnection.prototype.addIceCandidate;!n||n.length===0||(e.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(t.browser===`chrome`&&t.version<78||t.browser===`firefox`&&t.version<68||t.browser===`safari`)&&arguments[0]&&arguments[0].candidate===``?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function fv(e,t){if(!(e.RTCPeerConnection&&e.RTCPeerConnection.prototype))return;let n=e.RTCPeerConnection.prototype.setLocalDescription;!n||n.length===0||(e.RTCPeerConnection.prototype.setLocalDescription=function(){let e=arguments[0]||{};if(typeof e!=`object`||e.type&&e.sdp)return n.apply(this,arguments);if(e={type:e.type,sdp:e.sdp},!e.type)switch(this.signalingState){case`stable`:case`have-local-offer`:case`have-remote-pranswer`:e.type=`offer`;break;default:e.type=`answer`}return e.sdp||e.type!==`offer`&&e.type!==`answer`?n.apply(this,[e]):(e.type===`offer`?this.createOffer:this.createAnswer).apply(this).then(e=>n.apply(this,[e]))})}function pv({window:e}={},t={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){let n=m_,r=g_(e),i={browserDetails:r,commonShim:rv,extractVersion:u_,disableLog:f_,disableWarnings:p_,sdp:iv};switch(r.browser){case`chrome`:if(!C_||!A_||!t.shimChrome)return n(`Chrome shim is not included in this adapter release.`),i;if(r.version===null)return n(`Chrome shim can not determine version, not shimming.`),i;n(`adapter.js shimming chrome.`),i.browserShim=C_,dv(e,r),fv(e,r),S_(e,r),w_(e,r),A_(e,r),T_(e,r),k_(e,r),E_(e,r),D_(e,r),j_(e,r),av(e,r),ov(e,r),lv(e,r),sv(e,r),cv(e,r),uv(e,r);break;case`firefox`:if(!P_||!I_||!t.shimFirefox)return n(`Firefox shim is not included in this adapter release.`),i;n(`adapter.js shimming firefox.`),i.browserShim=P_,dv(e,r),fv(e,r),M_(e,r),I_(e,r),L_(e,r),F_(e,r),B_(e,r),R_(e,r),z_(e,r),V_(e,r),H_(e,r),U_(e,r),W_(e,r),G_(e,r),av(e,r),lv(e,r),sv(e,r),cv(e,r);break;case`safari`:if(!K_||!t.shimSafari)return n(`Safari shim is not included in this adapter release.`),i;n(`adapter.js shimming safari.`),i.browserShim=K_,dv(e,r),fv(e,r),Q_(e,r),ev(e,r),Y_(e,r),q_(e,r),J_(e,r),$_(e,r),X_(e,r),tv(e,r),av(e,r),ov(e,r),sv(e,r),cv(e,r),uv(e,r);break;default:n(`Unsupported browser!`)}return i}var mv=pv({window:typeof window>`u`?void 0:window});function hv(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var gv=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let t=[],n=e.byteLength,r=Math.ceil(n/this.chunkedMTU),i=0,a=0;for(;a<n;){let o=Math.min(n,a+this.chunkedMTU),s=e.slice(a,o),c={__peerData:this._dataCount,n:i,data:s,total:r};t.push(c),a=o,i++}return this._dataCount++,t}}};function _v(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n}var vv=mv.default||mv,yv=new class{isWebRTCSupported(){return typeof RTCPeerConnection<`u`}isBrowserSupported(){let e=this.getBrowser(),t=this.getVersion();return this.supportedBrowsers.includes(e)?e===`chrome`?t>=this.minChromeVersion:e===`firefox`?t>=this.minFirefoxVersion:e===`safari`&&!this.isIOS&&t>=this.minSafariVersion:!1}getBrowser(){return vv.browserDetails.browser}getVersion(){return vv.browserDetails.version||0}isUnifiedPlanSupported(){let e=this.getBrowser(),t=vv.browserDetails.version||0;if(e===`chrome`&&t<this.minChromeVersion)return!1;if(e===`firefox`&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!(`currentDirection`in RTCRtpTransceiver.prototype))return!1;let n,r=!1;try{n=new RTCPeerConnection,n.addTransceiver(`audio`),r=!0}catch{}finally{n&&n.close()}return r}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<`u`&&[`iPad`,`iPhone`,`iPod`].includes(navigator.platform),this.supportedBrowsers=[`firefox`,`chrome`,`safari`],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},bv=e=>!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e),xv=()=>Math.random().toString(36).slice(2),Sv={iceServers:[{urls:`stun:stun.l.google.com:19302`},{urls:[`turn:eu-0.turn.peerjs.com:3478`,`turn:us-0.turn.peerjs.com:3478`],username:`peerjs`,credential:`peerjsp`}],sdpSemantics:`unified-plan`},Cv=new class extends gv{noop(){}blobToArrayBuffer(e,t){let n=new FileReader;return n.onload=function(e){e.target&&t(e.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol===`https:`}constructor(...e){super(...e),this.CLOUD_HOST=`0.peerjs.com`,this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Sv,this.browser=yv.getBrowser(),this.browserVersion=yv.getVersion(),this.pack=a_,this.unpack=i_,this.supports=function(){let e={browser:yv.isBrowserSupported(),webRTC:yv.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let t;try{t=new RTCPeerConnection(Sv),e.audioVideo=!0;let n;try{n=t.createDataChannel(`_PEERJSTEST`,{ordered:!0}),e.data=!0,e.reliable=!!n.ordered;try{n.binaryType=`blob`,e.binaryBlob=!yv.isIOS}catch{}}catch{}finally{n&&n.close()}}catch{}finally{t&&t.close()}return e}(),this.validateId=bv,this.randomToken=xv}},wv=`PeerJS: `,$=new class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=[wv,...t];for(let e in n)n[e]instanceof Error&&(n[e]=`(`+n[e].name+`) `+n[e].message);e>=3?console.log(...n):e>=2?console.warn(`WARNING`,...n):e>=1&&console.error(`ERROR`,...n)}constructor(){this._logLevel=0}},Tv={},Ev=Object.prototype.hasOwnProperty,Dv=`~`;function Ov(){}Object.create&&(Ov.prototype=Object.create(null),new Ov().__proto__||(Dv=!1));function kv(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function Av(e,t,n,r,i){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var a=new kv(n,r||e,i),o=Dv?Dv+t:t;return e._events[o]?e._events[o].fn?e._events[o]=[e._events[o],a]:e._events[o].push(a):(e._events[o]=a,e._eventsCount++),e}function jv(e,t){--e._eventsCount===0?e._events=new Ov:delete e._events[t]}function Mv(){this._events=new Ov,this._eventsCount=0}Mv.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Ev.call(t,n)&&e.push(Dv?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},Mv.prototype.listeners=function(e){var t=Dv?Dv+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,a=Array(i);r<i;r++)a[r]=n[r].fn;return a},Mv.prototype.listenerCount=function(e){var t=Dv?Dv+e:e,n=this._events[t];return n?n.fn?1:n.length:0},Mv.prototype.emit=function(e,t,n,r,i,a){var o=Dv?Dv+e:e;if(!this._events[o])return!1;var s=this._events[o],c=arguments.length,l,u;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),c){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,t),!0;case 3:return s.fn.call(s.context,t,n),!0;case 4:return s.fn.call(s.context,t,n,r),!0;case 5:return s.fn.call(s.context,t,n,r,i),!0;case 6:return s.fn.call(s.context,t,n,r,i,a),!0}for(u=1,l=Array(c-1);u<c;u++)l[u-1]=arguments[u];s.fn.apply(s.context,l)}else{var d=s.length,f;for(u=0;u<d;u++)switch(s[u].once&&this.removeListener(e,s[u].fn,void 0,!0),c){case 1:s[u].fn.call(s[u].context);break;case 2:s[u].fn.call(s[u].context,t);break;case 3:s[u].fn.call(s[u].context,t,n);break;case 4:s[u].fn.call(s[u].context,t,n,r);break;default:if(!l)for(f=1,l=Array(c-1);f<c;f++)l[f-1]=arguments[f];s[u].fn.apply(s[u].context,l)}}return!0},Mv.prototype.on=function(e,t,n){return Av(this,e,t,n,!1)},Mv.prototype.once=function(e,t,n){return Av(this,e,t,n,!0)},Mv.prototype.removeListener=function(e,t,n,r){var i=Dv?Dv+e:e;if(!this._events[i])return this;if(!t)return jv(this,i),this;var a=this._events[i];if(a.fn)a.fn===t&&(!r||a.once)&&(!n||a.context===n)&&jv(this,i);else{for(var o=0,s=[],c=a.length;o<c;o++)(a[o].fn!==t||r&&!a[o].once||n&&a[o].context!==n)&&s.push(a[o]);s.length?this._events[i]=s.length===1?s[0]:s:jv(this,i)}return this},Mv.prototype.removeAllListeners=function(e){var t;return e?(t=Dv?Dv+e:e,this._events[t]&&jv(this,t)):(this._events=new Ov,this._eventsCount=0),this},Mv.prototype.off=Mv.prototype.removeListener,Mv.prototype.addListener=Mv.prototype.on,Mv.prefixed=Dv,Mv.EventEmitter=Mv,Tv=Mv;var Nv={};hv(Nv,`ConnectionType`,()=>Pv),hv(Nv,`PeerErrorType`,()=>Fv),hv(Nv,`BaseConnectionErrorType`,()=>Iv),hv(Nv,`DataConnectionErrorType`,()=>Lv),hv(Nv,`SerializationType`,()=>Rv),hv(Nv,`SocketEventType`,()=>zv),hv(Nv,`ServerMessageType`,()=>Bv);var Pv=function(e){return e.Data=`data`,e.Media=`media`,e}({}),Fv=function(e){return e.BrowserIncompatible=`browser-incompatible`,e.Disconnected=`disconnected`,e.InvalidID=`invalid-id`,e.InvalidKey=`invalid-key`,e.Network=`network`,e.PeerUnavailable=`peer-unavailable`,e.SslUnavailable=`ssl-unavailable`,e.ServerError=`server-error`,e.SocketError=`socket-error`,e.SocketClosed=`socket-closed`,e.UnavailableID=`unavailable-id`,e.WebRTC=`webrtc`,e}({}),Iv=function(e){return e.NegotiationFailed=`negotiation-failed`,e.ConnectionClosed=`connection-closed`,e}({}),Lv=function(e){return e.NotOpenYet=`not-open-yet`,e.MessageToBig=`message-too-big`,e}({}),Rv=function(e){return e.Binary=`binary`,e.BinaryUTF8=`binary-utf8`,e.JSON=`json`,e.None=`raw`,e}({}),zv=function(e){return e.Message=`message`,e.Disconnected=`disconnected`,e.Error=`error`,e.Close=`close`,e}({}),Bv=function(e){return e.Heartbeat=`HEARTBEAT`,e.Candidate=`CANDIDATE`,e.Offer=`OFFER`,e.Answer=`ANSWER`,e.Open=`OPEN`,e.Error=`ERROR`,e.IdTaken=`ID-TAKEN`,e.InvalidKey=`INVALID-KEY`,e.Leave=`LEAVE`,e.Expire=`EXPIRE`,e}({}),Vv=`1.5.5`,Hv=class extends Tv.EventEmitter{constructor(e,t,n,r,i,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];let o=e?`wss://`:`ws://`;this._baseUrl=o+t+`:`+n+r+`peerjs?key=`+i}start(e,t){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+`&version=1.5.5`),this._disconnected=!1,this._socket.onmessage=e=>{let t;try{t=JSON.parse(e.data),$.log(`Server message received:`,t)}catch{$.log(`Invalid server message`,e.data);return}this.emit(zv.Message,t)},this._socket.onclose=e=>{this._disconnected||($.log(`Socket closed.`,e),this._cleanup(),this._disconnected=!0,this.emit(zv.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),$.log(`Socket open`),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){$.log(`Cannot send heartbeat, because socket closed`);return}let e=JSON.stringify({type:Bv.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(zv.Error,`Invalid message`);return}if(!this._wsOpen())return;let t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||=(this._cleanup(),!0)}_cleanup(){this._socket&&=(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),void 0),clearTimeout(this._wsPingTimer)}},Uv=class{constructor(e){this.connection=e}startConnection(e){let t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Pv.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,r={ordered:!!e.reliable},i=t.createDataChannel(n.label,r);n._initializeDataChannel(i),this._makeOffer()}else this.handleSDP(`OFFER`,e.sdp)}_startPeerConnection(){$.log(`Creating RTCPeerConnection.`);let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,i=this.connection.provider;$.log(`Listening for ICE candidates.`),e.onicecandidate=e=>{!e.candidate||!e.candidate.candidate||($.log(`Received ICE candidates for ${t}:`,e.candidate),i.socket.send({type:Bv.Candidate,payload:{candidate:e.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case`failed`:$.log(`iceConnectionState is failed, closing connections to `+t),this.connection.emitError(Iv.NegotiationFailed,`Negotiation of connection to `+t+` failed.`),this.connection.close();break;case`closed`:$.log(`iceConnectionState is closed, closing connections to `+t),this.connection.emitError(Iv.ConnectionClosed,`Connection to `+t+` closed.`),this.connection.close();break;case`disconnected`:$.log(`iceConnectionState changed to disconnected on the connection with `+t);break;case`completed`:e.onicecandidate=()=>{}}this.connection.emit(`iceStateChanged`,e.iceConnectionState)},$.log(`Listening for data channel`),e.ondatachannel=e=>{$.log(`Received data channel`);let r=e.channel;i.getConnection(t,n)._initializeDataChannel(r)},$.log(`Listening for remote stream`),e.ontrack=e=>{$.log(`Received remote stream`);let r=e.streams[0],a=i.getConnection(t,n);if(a.type===Pv.Media){let e=a;this._addStreamToMediaConnection(r,e)}}}cleanup(){$.log(`Cleaning up PeerConnection to `+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=e.signalingState!==`closed`,n=!1,r=this.connection.dataChannel;r&&(n=!!r.readyState&&r.readyState!==`closed`),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);$.log(`Created offer.`),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform==`function`&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),$.log(`Set localDescription:`,n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Pv.Data){let e=this.connection;r={...r,label:e.label,reliable:e.reliable,serialization:e.serialization}}t.socket.send({type:Bv.Offer,payload:r,dst:this.connection.peer})}catch(e){e!=`OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer`&&(t.emitError(Fv.WebRTC,e),$.log(`Failed to setLocalDescription, `,e))}}catch(e){t.emitError(Fv.WebRTC,e),$.log(`Failed to createOffer, `,e)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();$.log(`Created answer.`),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform==`function`&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),$.log(`Set localDescription:`,n,`for:${this.connection.peer}`),t.socket.send({type:Bv.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(e){t.emitError(Fv.WebRTC,e),$.log(`Failed to setLocalDescription, `,e)}}catch(e){t.emitError(Fv.WebRTC,e),$.log(`Failed to create answer, `,e)}}async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,r=this.connection.provider;$.log(`Setting remote description`,t);let i=this;try{await n.setRemoteDescription(t),$.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e===`OFFER`&&await i._makeAnswer()}catch(e){r.emitError(Fv.WebRTC,e),$.log(`Failed to setRemoteDescription, `,e)}}async handleCandidate(e){$.log(`handleCandidate:`,e);try{await this.connection.peerConnection.addIceCandidate(e),$.log(`Added ICE candidate for:${this.connection.peer}`)}catch(e){this.connection.provider.emitError(Fv.WebRTC,e),$.log(`Failed to handleCandidate, `,e)}}_addTracksToConnection(e,t){if($.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return $.error(`Your browser does't support RTCPeerConnection#addTrack. Ignored.`);e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){$.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}},Wv=class extends Tv.EventEmitter{emitError(e,t){$.error(`Error:`,t),this.emit(`error`,new Gv(`${e}`,t))}},Gv=class extends Error{constructor(e,t){typeof t==`string`?super(t):(super(),Object.assign(this,t)),this.type=e}},Kv=class extends Wv{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}},qv=class e extends Kv{static#e=this.ID_PREFIX=`mc_`;get type(){return Pv.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(t,n,r){super(t,n,r),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||e.ID_PREFIX+Cv.randomToken(),this._negotiator=new Uv(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{$.log(`DC#${this.connectionId} dc connection success`),this.emit(`willCloseOnRemote`)},this.dataChannel.onclose=()=>{$.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){$.log(`Receiving stream`,e),this._remoteStream=e,super.emit(`stream`,e)}handleMessage(e){let t=e.type,n=e.payload;switch(e.type){case Bv.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Bv.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:$.warn(`Unrecognized message type:${t} from peer:${this.peer}`)}}answer(e,t={}){if(this._localStream){$.warn(`Local stream already exists on this MediaConnection. Are you answering a call twice?`);return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let e of n)this.handleMessage(e);this._open=!0}close(){this._negotiator&&=(this._negotiator.cleanup(),null),this._localStream=null,this._remoteStream=null,this.provider&&=(this.provider._removeConnection(this),null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit(`close`))}},Jv=class{constructor(e){this._options=e}_buildRequest(e){let t=this._options.secure?`https`:`http`,{host:n,port:r,path:i,key:a}=this._options,o=new URL(`${t}://${n}:${r}${i}${a}/${e}`);return o.searchParams.set(`ts`,`${Date.now()}${Math.random()}`),o.searchParams.set(`version`,Vv),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest(`id`);if(e.status!==200)throw Error(`Error. Status:${e.status}`);return e.text()}catch(e){$.error(`Error retrieving ID`,e);let t=``;throw this._options.path===`/`&&this._options.host!==Cv.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),Error(`Could not get an ID from the server.`+t)}}async listAllPeers(){try{let e=await this._buildRequest(`peers`);if(e.status!==200){if(e.status===401){let e=``;throw e=this._options.host===Cv.CLOUD_HOST?`It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.`:"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",Error(`It doesn't look like you have permission to list peers IDs. `+e)}throw Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw $.error(`Error retrieving list peers`,e),Error(`Could not get list peers from the server.`+e)}}},Yv=class e extends Kv{static#e=this.ID_PREFIX=`dc_`;static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Pv.Data}constructor(t,n,r){super(t,n,r),this.connectionId=this.options.connectionId||e.ID_PREFIX+xv(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Uv(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{$.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit(`open`)},this.dataChannel.onmessage=e=>{$.log(`DC#${this.connectionId} dc onmessage:`,e.data)},this.dataChannel.onclose=()=>{$.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:`close`}});return}this._negotiator&&=(this._negotiator.cleanup(),null),this.provider&&=(this.provider._removeConnection(this),null),this.dataChannel&&=(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,null),this.open&&(this._open=!1,super.emit(`close`))}send(e,t=!1){if(!this.open){this.emitError(Lv.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case Bv.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Bv.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:$.warn(`Unrecognized message type:`,e.type,`from peer:`,this.peer)}}},Xv=class extends Yv{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType=`arraybuffer`,this.dataChannel.addEventListener(`message`,e=>this._handleDataMessage(e))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Yv.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(e){return $.error(`DC#:${this.connectionId} Error when sending:`,e),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:`close`}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}},Zv=class extends Xv{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new gv,this.serialization=Rv.Binary,this._chunkedData={}}_handleDataMessage({data:e}){let t=i_(e),n=t.__peerData;if(n){if(n.type===`close`){this.close();return}this._handleChunk(t);return}this.emit(`data`,t)}_handleChunk(e){let t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];let e=_v(n.data);this._handleDataMessage({data:e})}}_send(e,t){let n=a_(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){let t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){let t=this.chunker.chunk(e);$.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let e of t)this.send(e,!0)}},Qv=class extends Xv{_handleDataMessage({data:e}){super.emit(`data`,e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Rv.None}},$v=class extends Xv{_handleDataMessage({data:e}){let t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type===`close`){this.close();return}this.emit(`data`,t)}_send(e,t){let n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Cv.chunkedMTU){this.emitError(Lv.MessageToBig,`Message too big for JSON channel`);return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Rv.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}},ey=class e extends Wv{static#e=this.DEFAULT_KEY=`peerjs`;get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(t,n){super(),this._serializers={raw:Qv,json:$v,binary:Zv,"binary-utf8":Zv,default:Zv},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let r;if(t&&t.constructor==Object?n=t:t&&(r=t.toString()),n={debug:0,host:Cv.CLOUD_HOST,port:Cv.CLOUD_PORT,path:`/`,key:e.DEFAULT_KEY,token:Cv.randomToken(),config:Cv.defaultConfig,referrerPolicy:`strict-origin-when-cross-origin`,serializers:{},...n},this._options=n,this._serializers={...this._serializers,...this.options.serializers},this._options.host===`/`&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!==`/`&&(this._options.path=`/`+this._options.path),this._options.path[this._options.path.length-1]!==`/`&&(this._options.path+=`/`)),this._options.secure===void 0&&this._options.host!==Cv.CLOUD_HOST?this._options.secure=Cv.isSecure():this._options.host==Cv.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&$.setLogFunction(this._options.logFunction),$.logLevel=this._options.debug||0,this._api=new Jv(n),this._socket=this._createServerConnection(),!Cv.supports.audioVideo&&!Cv.supports.data){this._delayedAbort(Fv.BrowserIncompatible,`The current browser does not support WebRTC`);return}if(r&&!Cv.validateId(r)){this._delayedAbort(Fv.InvalidID,`ID "${r}" is invalid`);return}r?this._initialize(r):this._api.retrieveId().then(e=>this._initialize(e)).catch(e=>this._abort(Fv.ServerError,e))}_createServerConnection(){let e=new Hv(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(zv.Message,e=>{this._handleMessage(e)}),e.on(zv.Error,e=>{this._abort(Fv.SocketError,e)}),e.on(zv.Disconnected,()=>{this.disconnected||(this.emitError(Fv.Network,`Lost connection to server.`),this.disconnect())}),e.on(zv.Close,()=>{this.disconnected||this._abort(Fv.SocketClosed,`Underlying socket is already closed.`)}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){let t=e.type,n=e.payload,r=e.src;switch(t){case Bv.Open:this._lastServerId=this.id,this._open=!0,this.emit(`open`,this.id);break;case Bv.Error:this._abort(Fv.ServerError,n.msg);break;case Bv.IdTaken:this._abort(Fv.UnavailableID,`ID "${this.id}" is taken`);break;case Bv.InvalidKey:this._abort(Fv.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Bv.Leave:$.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Bv.Expire:this.emitError(Fv.PeerUnavailable,`Could not connect to peer ${r}`);break;case Bv.Offer:{let e=n.connectionId,t=this.getConnection(r,e);if(t&&(t.close(),$.warn(`Offer received for existing Connection ID:${e}`)),n.type===Pv.Media){let i=new qv(r,this,{connectionId:e,_payload:n,metadata:n.metadata});t=i,this._addConnection(r,t),this.emit(`call`,i)}else if(n.type===Pv.Data){let i=new this._serializers[n.serialization](r,this,{connectionId:e,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});t=i,this._addConnection(r,t),this.emit(`connection`,i)}else{$.warn(`Received malformed connection type:${n.type}`);return}let i=this._getMessages(e);for(let e of i)t.handleMessage(e);break}default:{if(!n){$.warn(`You received a malformed message from ${r} of type ${t}`);return}let i=n.connectionId,a=this.getConnection(r,i);a&&a.peerConnection?a.handleMessage(e):i?this._storeMessage(i,e):$.warn(`You received an unrecognized message:`,e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){let t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:`default`,...t},this.disconnected){$.warn(`You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.`),this.emitError(Fv.Disconnected,`Cannot connect to new Peer after disconnecting from server.`);return}let n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){$.warn(`You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.`),this.emitError(Fv.Disconnected,`Cannot connect to new Peer after disconnecting from server.`);return}if(!t){$.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let r=new qv(e,this,{...n,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){$.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){let t=this._connections.get(e.peer);if(t){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){let n=this._connections.get(e);if(!n)return null;for(let e of n)if(e.connectionId===t)return e;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){$.error(`Aborting!`),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||($.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(`close`))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){let t=this._connections.get(e);if(t)for(let e of t)e.close()}disconnect(){if(this.disconnected)return;let e=this.id;$.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(`disconnected`,e)}reconnect(){if(this.disconnected&&!this.destroyed)$.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else if(this.destroyed)throw Error(`This peer cannot reconnect to the server. It has already been destroyed.`);else if(!this.disconnected&&!this.open)$.error(`In a hurry? We're still trying to make the initial connection!`);else throw Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}listAllPeers(e=e=>{}){this._api.listAllPeers().then(t=>e(t)).catch(e=>this._abort(Fv.ServerError,e))}},ty=32,ny=10,ry=.2,iy={front:1,side:2,rear:3},ay={0:null,1:`front`,2:`side`,3:`rear`},oy=16;function sy(e){let t=e.units.length,n=e.projectiles.length,r=e.squads.length,i=new ArrayBuffer(8+t*ny+n*6+r),a=new DataView(i);a.setFloat32(0,e.time,!0),a.setUint16(4,t,!0),a.setUint16(6,n,!0);let o=8;for(let t of e.units){a.setInt16(o,Math.round(t.x*ty),!0),a.setInt16(o+2,Math.round(t.y*ty),!0),a.setInt16(o+4,Math.round(t.facing),!0),a.setInt16(o+6,t.alive?Math.max(1,Math.ceil(t.hp)):0,!0);let e=Math.max(0,Math.min(ry,t.hitFlash)),n=e>0&&t.hitDirection?iy[t.hitDirection]:0;a.setUint8(o+8,n|(t.action>0?oy:0)),a.setUint8(o+9,Math.round(e/ry*255)),o+=ny}for(let t of e.projectiles)a.setInt16(o,Math.round(t.x*ty),!0),a.setInt16(o+2,Math.round(t.y*ty),!0),a.setInt16(o+4,Math.round(Math.atan2(t.vx,-t.vy)*180/Math.PI),!0),o+=6;for(let t of e.squads)a.setUint8(o,Math.max(0,Math.min(255,Math.round(t.chargeSec*10)))),o+=1;return i}function cy(e){return{time:0,duration:e.duration,worldW:e.worldW,worldH:e.worldH,units:e.units.map(e=>({...e,x:0,y:0,px:0,py:0,facing:0,hp:e.maxHp,alive:!0,hitFlash:0,hitDirection:null,action:0})),squads:e.squads.map(e=>({...e,order:null,chargeSec:0,pursuit:null})),players:e.players,projectiles:[],result:null}}function ly(e,t){let n=new DataView(t);e.time=n.getFloat32(0,!0);let r=n.getUint16(4,!0),i=n.getUint16(6,!0),a=8,o=Math.min(r,e.units.length);for(let t=0;t<o;t++){let r=e.units[t];r.px=r.x,r.py=r.y,r.x=n.getInt16(a,!0)/ty,r.y=n.getInt16(a+2,!0)/ty,r.facing=n.getInt16(a+4,!0),r.hp=n.getInt16(a+6,!0);let i=n.getUint8(a+8);r.action=(i&oy)===0?0:1,r.hitDirection=ay[i&3]??null,r.hitFlash=n.getUint8(a+9)/255*ry,(!r.hitDirection||r.hitFlash<=0)&&(r.hitDirection=null,r.hitFlash=0),r.px===0&&r.py===0&&(r.px=r.x,r.py=r.y),r.alive=r.hp>0,a+=ny}a=8+r*ny;let s=[];for(let e=0;e<i;e++){let e=n.getInt16(a,!0)/ty,t=n.getInt16(a+2,!0)/ty,r=n.getInt16(a+4,!0)*Math.PI/180;s.push({x:e,y:t,px:e,py:t,vx:Math.sin(r),vy:-Math.cos(r)}),a+=6}e.projectiles=s;for(let r=0;r<e.squads.length;r++)e.squads[r].chargeSec=a<t.byteLength?n.getUint8(a)/10:0,a+=1}function uy(){let e=``;for(let t=0;t<6;t++)e+=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`[Math.floor(Math.random()*32)];return e}var dy=`webgames-rts-`,fy={urls:`stun:stun.l.google.com:19302`},py=[];function my(){if(py.length!==0)return[fy,...py]}var hy=3e3;function gy(){let e=window.__rtsPeerConfig;if(e)return e;let t=my();return t?{config:{iceServers:t}}:void 0}var _y=class{peer;lobby=[];state=null;timers=[];started=!1;finished=!1;resultAt=0;code=``;maxPlayers=4;settings={mode:`ffa`,durationSec:180,moveSpeedMul:1};cb;constructor(e,t,n,r){this.cb=r,this.code=uy(),this.lobby.push({conn:null,name:e,army:t,squads:n}),this.peer=new ey(dy+this.code,gy()),this.peer.on(`open`,()=>r.onOpen(this.code)),this.peer.on(`error`,()=>r.onError(`peer`)),this.peer.on(`connection`,e=>this.handleConnection(e))}handleConnection(e){e.on(`data`,t=>{let n=t;if(!(n instanceof ArrayBuffer)){if(n.t===`join`&&!this.started){if(this.lobby.length>=this.maxPlayers){e.close();return}this.lobby.push({conn:e,name:n.name,army:n.army,squads:n.squads}),this.emitLobby()}else if(n.t===`order`&&this.state&&!this.finished&&!this.state.result){let t=this.lobby.findIndex(t=>t.conn===e),r=this.state.squads[n.squadId];t>0&&r&&r.playerId===t&&(typeof n.target==`number`?lr(this.state,n.squadId,n.target):sr(this.state,n.squadId,n.x,n.y))}}}),e.on(`close`,()=>{this.started||(this.lobby=this.lobby.filter(t=>t.conn!==e),this.emitLobby())})}emitLobby(){this.cb.onLobbyChange(this.lobby.map(e=>e.name));let e={t:`lobby`,names:this.lobby.map(e=>e.name),mode:this.settings.mode,canStart:this.lobby.length>=2,maxPlayers:this.maxPlayers,durationSec:this.settings.durationSec,moveSpeedMul:this.settings.moveSpeedMul};this.broadcastJson(e)}setMaxPlayers(e){this.maxPlayers=Math.max(this.lobby.length,Math.max(2,Math.min(4,e))),this.emitLobby()}setRules(e){this.settings={...this.settings,...e},this.emitLobby()}get playerCount(){return this.lobby.length}start(e){return this.started=!0,this.lobby.map((t,n)=>({name:t.name,color:Kh(n),army:t.army,squads:t.squads,team:e===`team`?n<2?0:1:n}))}attachState(e){this.state=e;let t=e.units.map(e=>({id:e.id,playerId:e.playerId,team:e.team,squadId:e.squadId,type:e.type,isStrategist:e.isStrategist,maxHp:e.maxHp})),n=e.players.map(e=>({id:e.id,name:e.name,color:e.color,team:e.team})),r=e.squads.map(e=>({id:e.id,playerId:e.playerId,unitIds:e.unitIds,name:e.name}));this.lobby.forEach((i,a)=>{if(!i.conn)return;let o={t:`init`,playerId:a,worldW:e.worldW,worldH:e.worldH,duration:e.duration,players:n,units:t,squads:r};i.conn.send(o)}),this.timers.push(window.setInterval(()=>{this.finished||(this.broadcastBinary(sy(e)),e.result&&(this.resultAt===0?(this.resultAt=Date.now(),this.broadcastJson(this.buildMeta(e))):Date.now()-this.resultAt>=hy&&this.finish()))},100)),this.timers.push(window.setInterval(()=>{this.finished||this.broadcastJson(this.buildMeta(e))},500))}buildMeta(e){return{t:`meta`,time:e.time,players:e.players.map(e=>({aliveSoldiers:e.aliveSoldiers,strategistAlive:e.strategistAlive,eliminated:e.eliminated})),result:e.result}}finish(){if(this.finished)return;this.finished=!0,this.stopTimers();let e=this.state;if(e){this.broadcastBinary(sy(e));let t=this.buildMeta(e);this.broadcastJson(t),this.broadcastJson({t:`end`,meta:t})}window.setTimeout(()=>this.closeConnections(),600)}stopTimers(){for(let e of this.timers)clearInterval(e);this.timers=[]}closeConnections(){for(let e of this.lobby)e.conn?.close();window.setTimeout(()=>this.peer.destroy(),200)}broadcastJson(e){for(let t of this.lobby)t.conn?.send(e)}broadcastBinary(e){for(let t of this.lobby)t.conn?.send(e)}destroy(){if(this.finished){this.peer.destroy();return}this.finished=!0,this.broadcastJson({t:`abort`}),this.stopTimers(),window.setTimeout(()=>this.peer.destroy(),200)}},vy=class{peer;conn=null;gs=null;finished=!1;ended=!1;lastSnapshotAt=0;playerId=-1;cb;constructor(e,t,n,r,i){this.cb=i;let a=gy();this.peer=a?new ey(a):new ey,this.peer.on(`error`,()=>{this.finished||i.onError()}),this.peer.on(`open`,()=>{let a=this.peer.connect(dy+e.toUpperCase(),{reliable:!0});this.conn=a,a.on(`open`,()=>{i.onConnected(),a.send({t:`join`,name:t,army:n,squads:r})}),a.on(`close`,()=>{this.finished||i.onAbort()}),a.on(`error`,()=>{this.finished||i.onError()}),a.on(`data`,e=>this.handleData(e))})}handleData(e){window.__rtsDebug&&(window.__rtsGuestState=this.gs,window.__rtsLastData=e?.constructor?.name);let t=e instanceof ArrayBuffer?e:ArrayBuffer.isView(e)?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(t){if(this.gs){ly(this.gs,t),this.lastSnapshotAt=performance.now();for(let e of this.gs.squads){if(e.pursuit===null)continue;let t=cr(this.gs,e.pursuit);t?e.order=t:(e.pursuit=null,e.order=null)}}return}let n=e;n.t===`lobby`?this.cb.onLobby(n):n.t===`init`?(this.playerId=n.playerId,this.gs=cy(n),this.cb.onInit(this.gs,n.playerId)):n.t===`meta`?this.applyMeta(n):n.t===`end`?(this.applyMeta(n.meta),this.markFinished()):n.t===`abort`&&(this.finished||this.cb.onAbort())}applyMeta(e){this.gs&&(this.gs.time=e.time,this.gs.result=e.result),e.result&&(this.finished=!0),this.cb.onMeta(e)}markFinished(){this.gs&&!this.gs.result||this.ended||(this.ended=!0,this.finished=!0,this.closeQuietly(),this.cb.onFinish())}closeQuietly(){try{this.conn?.close()}catch{}this.conn=null,this.peer.destroy()}sendOrder(e,t,n){if(this.finished)return;this.conn?.send({t:`order`,squadId:e,x:t,y:n});let r=this.gs?.squads[e];r&&(r.order={x:t,y:n},r.pursuit=null)}sendAttack(e,t){if(this.finished||!this.gs)return;let n=cr(this.gs,t);if(!n)return;this.conn?.send({t:`order`,squadId:e,x:n.x,y:n.y,target:t});let r=this.gs.squads[e];r&&(r.order=n,r.pursuit=t)}destroy(){this.finished=!0,this.ended=!0,this.closeQuietly()}},yy=`rts_queue`,by=9e4,xy=3e4,Sy=10,Cy=5,wy=250;async function Ty(e=()=>!1){if(!c().capabilities.firebaseMatchmaking)return{kind:`unavailable`};let t=null;try{t=await te()}catch{return{kind:`unavailable`}}if(!t)return{kind:`unavailable`};let n=await Ey(t,e);return n.kind!==`empty`||e()?n:(await new Promise(e=>setTimeout(e,wy+Math.random()*1e3)),e()?{kind:`empty`}:await Ey(t,e))}async function Ey(e,t){try{let{Timestamp:n,collection:r,deleteDoc:i,getDocs:a,limit:o,orderBy:c,query:l,startAfter:u}=await s(async()=>{let{Timestamp:e,collection:t,deleteDoc:n,getDocs:r,limit:i,orderBy:a,query:o,startAfter:s}=await import(`./index.esm-C_1Xwdl4.js`);return{Timestamp:e,collection:t,deleteDoc:n,getDocs:r,limit:i,orderBy:a,query:o,startAfter:s}},__vite__mapDeps([0,1])),d=r(e.db,yy),f=null;for(let r=0;r<Cy;r++){let r=await a(f?l(d,c(`createdAt`),u(f),o(Sy)):l(d,c(`createdAt`),o(Sy)));if(r.empty)return{kind:`empty`};let s=Date.now();for(let a of r.docs){let r=a.data();if((r.expireAt instanceof n?r.expireAt.toMillis():0)<=s){i(a.ref).catch(()=>{});continue}if(r.hostUid!==e.uid&&typeof r.joined==`number`&&typeof r.maxPlayers==`number`&&!(r.joined>=r.maxPlayers)){if(t())return{kind:`empty`};if(await Oy(e,a.ref))return{kind:`joined`,code:typeof r.code==`string`?r.code:a.id,hostName:typeof r.hostName==`string`&&r.hostName?r.hostName:`HOST`}}}if(r.docs.length<Sy)return{kind:`empty`};f=r.docs[r.docs.length-1]}return{kind:`empty`}}catch{return{kind:`unavailable`}}}async function Dy(e){try{let{collection:t,deleteDoc:n,getDocs:r,query:i,where:a}=await s(async()=>{let{collection:e,deleteDoc:t,getDocs:n,query:r,where:i}=await import(`./index.esm-C_1Xwdl4.js`);return{collection:e,deleteDoc:t,getDocs:n,query:r,where:i}},__vite__mapDeps([0,1])),o=await r(i(t(e.db,yy),a(`hostUid`,`==`,e.uid)));await Promise.all(o.docs.map(e=>n(e.ref).catch(()=>{})))}catch{}}async function Oy(e,t){try{let{Timestamp:n,runTransaction:r}=await s(async()=>{let{Timestamp:e,runTransaction:t}=await import(`./index.esm-C_1Xwdl4.js`);return{Timestamp:e,runTransaction:t}},__vite__mapDeps([0,1]));return await r(e.db,async e=>{let r=await e.get(t);if(!r.exists())throw Error(`closed`);let i=r.data(),a=Number(i.joined),o=Number(i.maxPlayers);if(!Number.isFinite(a)||!Number.isFinite(o)||a>=o)throw Error(`full`);if(!(i.expireAt instanceof n)||i.expireAt.toMillis()<=Date.now())throw Error(`expired`);e.update(t,{joined:a+1,expireAt:n.fromMillis(Date.now()+by)})}),!0}catch{return!1}}function ky(e,t,n){if(!c().capabilities.firebaseMatchmaking)return{sync:()=>{},close:()=>{}};let r=!1,i=1,a=n,o=null,l=0,u=async()=>{if(!(r||!o))try{let{Timestamp:e,updateDoc:t}=await s(async()=>{let{Timestamp:e,updateDoc:t}=await import(`./index.esm-C_1Xwdl4.js`);return{Timestamp:e,updateDoc:t}},__vite__mapDeps([0,1]));await t(o,{joined:i,maxPlayers:a,expireAt:e.fromMillis(Date.now()+by)})}catch{}},d=async e=>{try{let{deleteDoc:t}=await s(async()=>{let{deleteDoc:e}=await import(`./index.esm-C_1Xwdl4.js`);return{deleteDoc:e}},__vite__mapDeps([0,1]));await t(e)}catch{}};return(async()=>{try{let n=await te();if(!n||r||(await Dy(n),r))return;let{Timestamp:c,doc:f,serverTimestamp:p,setDoc:m}=await s(async()=>{let{Timestamp:e,doc:t,serverTimestamp:n,setDoc:r}=await import(`./index.esm-C_1Xwdl4.js`);return{Timestamp:e,doc:t,serverTimestamp:n,setDoc:r}},__vite__mapDeps([0,1])),h=f(n.db,yy,e);if(await m(h,{code:e,hostUid:n.uid,hostName:t.slice(0,10)||`HOST`,joined:i,maxPlayers:a,createdAt:p(),expireAt:c.fromMillis(Date.now()+by)}),r){d(h);return}o=h,l=window.setInterval(()=>{u()},xy)}catch{}})(),{sync(e,t){i=e,a=t,u()},close(){r||(r=!0,l&&window.clearInterval(l),o&&d(o))}}}function Ay({lang:e,onExit:t}){let n=(t,n)=>F(e,t,n),r=c().capabilities.firebaseMatchmaking,i=Pe(),[a,s]=(0,M.useState)({name:`menu`}),[l,u]=(0,M.useState)(i.armies.find(En)?.id??null),[d,f]=(0,M.useState)(``),[p,m]=(0,M.useState)(null),[h,g]=(0,M.useState)([]),[_,v]=(0,M.useState)(`ffa`),[y,b]=(0,M.useState)(2),[x,S]=(0,M.useState)(180),[C,w]=(0,M.useState)(1),[T,E]=(0,M.useState)(4),D=(0,M.useRef)(null);(0,M.useEffect)(()=>{o()},[a]);let O=(0,M.useRef)(null),k=(0,M.useRef)(null),[A,ee]=(0,M.useState)(!1),te=(0,M.useRef)(0),j=(0,M.useRef)(!1);(0,M.useEffect)(()=>()=>{D.current?.destroy(),O.current?.destroy(),k.current?.close()},[]);let N=e=>{let t=i.armies.find(t=>t.id===e);return t?{army:t,squads:i.squads.filter(e=>t.slots.includes(e.id))}:null},P=(e,t=!1)=>{if(D.current)return;let n=N(e);if(!n)return;m(null),g([Le()]),ee(t);let r=new _y(Le(),n.army,n.squads,{onOpen:e=>{m(e),t&&(k.current=ky(e,Le(),r.maxPlayers))},onLobbyChange:e=>{g(e),k.current?.sync(e.length,r.maxPlayers)},onError:()=>s({name:`error`,key:`multi.errPeer`})});D.current=r,r.setMaxPlayers(y),s({name:`hostLobby`,armyId:e})},ne=async e=>{if(!r||j.current)return;j.current=!0;let t=++te.current;ee(!1),s({name:`searching`,armyId:e});let n=await Ty(()=>t!==te.current);if(j.current=!1,t===te.current){if(n.kind===`unavailable`){s({name:`error`,key:`multi.errOffline`});return}if(n.kind===`joined`){I(e,n.code);return}P(e,!0)}},re=()=>{te.current++,j.current=!1,s({name:`menu`})},I=(e,t)=>{let n=N(e);n&&(O.current=new vy(t.trim(),Le(),n.army,n.squads,{onConnected:()=>s({name:`guestWait`}),onLobby:e=>{g(e.names),E(e.maxPlayers??4),v(e.mode),typeof e.durationSec==`number`&&S(e.durationSec),typeof e.moveSpeedMul==`number`&&w(e.moveSpeedMul)},onInit:(e,t)=>s(O.current?{name:`guestBattle`,gs:e,myId:t,session:O.current}:{name:`error`,key:`multi.errPeer`}),onMeta:()=>{},onFinish:()=>{O.current=null},onAbort:()=>s(e=>e.name===`guestBattle`&&e.gs.result?e:e.name===`guestBattle`||e.name===`guestWait`?{name:`error`,key:`multi.aborted`}:e),onError:()=>s(e=>e.name===`codeInput`||e.name===`guestWait`||e.name===`searching`?{name:`error`,key:`multi.errPeer`}:e)}))},L=()=>{let e=D.current;if(!e||e.playerCount<2)return;k.current?.close(),k.current=null;let t=e.start(e.playerCount===4?_:`ffa`);s({name:`hostBattle`,configs:t,session:e,durationSec:x,moveSpeedMul:C})},ie=()=>{te.current++,j.current=!1,k.current?.close(),k.current=null,D.current?.destroy(),O.current?.destroy(),t()};return a.name===`hostBattle`?(0,W.jsx)(t_,{lang:e,netConfigs:a.configs,netSession:a.session,durationSec:a.durationSec,moveSpeedMul:a.moveSpeedMul,onExit:t}):a.name===`guestBattle`?(0,W.jsx)(My,{lang:e,gs:a.gs,myId:a.myId,session:a.session,onExit:ie}):(0,W.jsxs)(`div`,{className:`rts-screen`,children:[(0,W.jsxs)(qe,{children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,onClick:ie,children:n(`common.back`)}),(0,W.jsx)(`h2`,{children:n(`multi.title`)}),(0,W.jsx)(`span`,{className:`rts-count`})]}),a.name===`menu`&&(0,W.jsxs)(`ul`,{className:`rts-list center`,children:[r&&(0,W.jsxs)(`li`,{onClick:()=>s({name:`armySelect`,role:`random`}),children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:n(`multi.random`)}),(0,W.jsx)(`span`,{className:`rts-item-meta`,children:n(`multi.random.desc`)})]}),(0,W.jsxs)(`li`,{onClick:()=>s({name:`armySelect`,role:`host`}),children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:n(`multi.host`)}),(0,W.jsx)(`span`,{className:`rts-item-meta`,children:n(`multi.host.desc`)})]}),(0,W.jsxs)(`li`,{onClick:()=>s({name:`armySelect`,role:`guest`}),children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:n(`multi.join`)}),(0,W.jsx)(`span`,{className:`rts-item-meta`,children:n(`multi.join.desc`)})]})]}),a.name===`armySelect`&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{className:`rts-hint`,children:n(`single.selectArmy`)}),(0,W.jsx)(`ul`,{className:`rts-list`,children:i.armies.map(e=>{let t=En(e);return(0,W.jsxs)(`li`,{onClick:()=>{t&&u(e.id)},className:l===e.id?`selected`:void 0,style:{opacity:t?1:.45},children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:e.name}),(0,W.jsx)(`span`,{className:`rts-item-meta`,children:!t&&(0,W.jsx)(`span`,{className:`rts-warn-text`,children:n(`single.notReady`)})})]},e.id)})}),(0,W.jsx)(`div`,{className:`rts-actions center`,children:(0,W.jsx)(`button`,{className:`rts-btn primary`,disabled:!l,onClick:()=>{l&&(a.role===`random`?ne(l):a.role===`host`?P(l):s({name:`codeInput`,armyId:l}))},children:n(`common.ok`)})})]}),a.name===`searching`&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{className:`rts-hint`,children:n(`multi.searching`)}),(0,W.jsx)(`div`,{className:`rts-actions center`,children:(0,W.jsx)(`button`,{className:`rts-btn`,onClick:re,children:n(`common.cancel`)})})]}),a.name===`codeInput`&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{className:`rts-hint`,children:n(`multi.codeInput`)}),(0,W.jsxs)(`div`,{className:`rts-name-row`,children:[(0,W.jsx)(`input`,{value:d,maxLength:6,autoCapitalize:`characters`,onChange:e=>f(e.target.value.toUpperCase()),placeholder:`ABC123`}),(0,W.jsx)(`button`,{className:`rts-btn primary`,disabled:d.trim().length!==6,onClick:()=>I(a.armyId,d),children:n(`multi.connect`)})]})]}),a.name===`hostLobby`&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`rts-room-code`,children:[(0,W.jsx)(`span`,{children:n(`multi.roomCode`)}),(0,W.jsx)(`strong`,{children:p??n(`multi.creating`)})]}),(0,W.jsx)(`p`,{className:`rts-hint`,children:n(A?`multi.randomWaiting`:`multi.codeShare`)}),(0,W.jsxs)(`div`,{className:`rts-sel-panel rts-single-config`,children:[(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.players`)}),(0,W.jsx)(`div`,{className:`rts-option-controls`,children:[2,3,4].map(e=>(0,W.jsx)(`button`,{className:`rts-btn small${y===e?` active`:``}`,disabled:e<h.length,onClick:()=>{b(e),e!==4&&(v(`ffa`),D.current?.setRules({mode:`ffa`})),D.current?.setMaxPlayers(e)},children:e},e))})]}),y===4&&(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.mode`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`button`,{className:`rts-btn small${_===`ffa`?` active`:``}`,onClick:()=>{v(`ffa`),D.current?.setRules({mode:`ffa`})},children:n(`mode.ffa`)}),(0,W.jsx)(`button`,{className:`rts-btn small${_===`team`?` active`:``}`,onClick:()=>{v(`team`),D.current?.setRules({mode:`team`})},children:n(`mode.team`)})]})]}),(0,W.jsxs)(`label`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.duration`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`output`,{children:x}),(0,W.jsx)(`input`,{type:`range`,min:120,max:300,step:10,value:x,onChange:e=>{let t=Number(e.target.value);S(t),D.current?.setRules({durationSec:t})}})]})]}),(0,W.jsxs)(`label`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.moveSpeed`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`output`,{children:C.toFixed(1)}),(0,W.jsx)(`input`,{type:`range`,min:1,max:2,step:.1,value:C,onChange:e=>{let t=Number(e.target.value);w(t),D.current?.setRules({moveSpeedMul:t})}})]})]})]}),(0,W.jsxs)(`p`,{className:`rts-hint`,children:[n(`multi.players`),`: `,h.length,` / `,y]}),(0,W.jsx)(`ul`,{className:`rts-list`,children:h.map((e,t)=>(0,W.jsx)(`li`,{style:{cursor:`default`},children:(0,W.jsx)(`span`,{className:`rts-item-name`,children:t===0?e:`${e} ${t}`})},t))}),(0,W.jsx)(`div`,{className:`rts-actions center`,children:(0,W.jsx)(`button`,{className:`rts-btn primary`,disabled:h.length<2,onClick:L,children:n(`multi.start`)})})]}),a.name===`guestWait`&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{className:`rts-hint`,children:n(`multi.waitingHost`)}),(0,W.jsxs)(`div`,{className:`rts-sel-panel rts-single-config rts-readonly`,"aria-label":n(`multi.hostRules`),children:[(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.players`)}),(0,W.jsx)(`div`,{className:`rts-option-controls`,children:[2,3,4].map(e=>(0,W.jsx)(`button`,{className:`rts-btn small${T===e?` active`:``}`,disabled:!0,"aria-disabled":`true`,children:e},e))})]}),T===4&&(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.mode`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`button`,{className:`rts-btn small${_===`ffa`?` active`:``}`,disabled:!0,"aria-disabled":`true`,children:n(`mode.ffa`)}),(0,W.jsx)(`button`,{className:`rts-btn small${_===`team`?` active`:``}`,disabled:!0,"aria-disabled":`true`,children:n(`mode.team`)})]})]}),(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.duration`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`output`,{children:x}),(0,W.jsx)(`input`,{type:`range`,min:120,max:300,step:10,value:x,disabled:!0,readOnly:!0,tabIndex:-1})]})]}),(0,W.jsxs)(`div`,{className:`rts-option-row`,children:[(0,W.jsx)(`span`,{className:`rts-sel-label`,children:n(`single.moveSpeed`)}),(0,W.jsxs)(`div`,{className:`rts-option-controls`,children:[(0,W.jsx)(`output`,{children:C.toFixed(1)}),(0,W.jsx)(`input`,{type:`range`,min:1,max:2,step:.1,value:C,disabled:!0,readOnly:!0,tabIndex:-1})]})]})]}),(0,W.jsxs)(`p`,{className:`rts-hint`,children:[n(`multi.players`),`: `,h.length,` / `,T]}),(0,W.jsx)(`ul`,{className:`rts-list`,children:h.map((e,t)=>(0,W.jsx)(`li`,{style:{cursor:`default`},children:(0,W.jsx)(`span`,{className:`rts-item-name`,children:t===0?e:`${e} ${t}`})},t))})]}),a.name===`error`&&(0,W.jsx)(nt,{title:n(`multi.title`),actions:(0,W.jsx)(`button`,{className:`rts-btn primary`,onClick:ie,children:n(`battle.returnTop`)}),children:n(a.key)})]})}var jy=5e3;function My({lang:e,gs:t,myId:n,session:r,onExit:i}){let a=(t,n)=>F(e,t,n),[o,s]=(0,M.useState)(null),[c,l]=(0,M.useState)(null),[u,d]=(0,M.useState)({time:0}),[f,p]=(0,M.useState)(!1),[m,h]=(0,M.useState)(!0),g=(0,M.useRef)(()=>{}),[_,v]=(0,M.useState)([]),y=(0,M.useRef)([]),b=(0,M.useRef)(0),[x,S]=(0,M.useState)(!1),[C,w]=(0,M.useState)(!1),T=(0,M.useRef)(!1),E=new Set(t.players.map(e=>e.team)).size<t.players.length,D=(0,M.useRef)(()=>t.squads.map(e=>({key:e.id,armyName:t.players[e.playerId]?.name??``,squadName:e.name??``,color:t.players[e.playerId]?.color??`#f4efe2`,alive:e.unitIds.some(e=>t.units[e]?.alive)}))).current,O=(0,M.useRef)((t,n)=>F(e,`battle.squadWiped`,{army:t,squad:n})).current;(0,M.useEffect)(()=>(bi(null),()=>bi(`title`)),[]),(0,M.useEffect)(()=>{let e=o;if(!e||!c)return;let i=qg(e,c),a=Yg(e,{w:t.worldW,h:t.worldH},{pickSquad:(e,r)=>Jh(t,e,r,n),onOrder:(e,t,n)=>{r.sendOrder(e,t,n),Ci(`orderConfirm`)},onSelect:()=>Ci(`squadSelect`),pickEnemySquad:(e,r)=>Yh(t,e,r,e=>t.players[e]?.team!==t.players[n]?.team),onAttack:(e,t)=>{r.sendAttack(e,t),Ci(`orderConfirm`)},enemyCentroid:e=>cr(t,e),isBlocked:()=>t.result!==null||!E&&!t.units.some(e=>e.playerId===n&&e.alive&&e.isStrategist),projector:i}),s={current:null};g.current=e=>{if(s.current)return;let r=Kg(t,n);r&&(s.current={region:r,startedAt:e,reducedMotion:window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches===!0})};let l=0,u=performance.now(),f=16,p=!1,m=()=>{let e=performance.now();f=f*.93+(e-u)*.07,u=e,!p&&f>40&&(p=!0);let o=Math.min(1,(e-r.lastSnapshotAt)/100),c=a.selection(),d=s.current;i.render(t,a.cam,o,{selectedSquad:c.selectedSquad,dragTarget:c.dragTarget,focusEnemy:c.focusEnemy,myPlayerId:n,lowSpec:p,groundLight:d?{...d,now:e}:void 0}),l=requestAnimationFrame(m)};l=requestAnimationFrame(m);let h=window.setInterval(()=>{d({time:t.time})},200);return()=>{cancelAnimationFrame(l),clearInterval(h),a.cleanup(),i.dispose(),g.current=()=>{}}},[o,c]);let k=t.players.map(e=>{let n=t.units.filter(t=>t.playerId===e.id&&t.alive&&!t.isStrategist).length,r=t.units.some(t=>t.playerId===e.id&&t.alive&&t.isStrategist);return{name:e.name,color:e.color,alive:n,strategistAlive:r}});(0,M.useEffect)(()=>{if(k.length===0||E)return;let e=y.current,t=k.filter(e=>e.strategistAlive).length,n=k.filter((t,n)=>!t.strategistAlive&&(e[n]??!0));y.current=k.map(e=>e.strategistAlive),!(e.length===0||n.length===0||t<2)&&v(e=>[...e,...n.map(e=>({id:b.current++,text:a(`battle.eliminated`,{name:e.name})}))])},[u.time]),(0,M.useEffect)(()=>{if(_.length===0)return;let e=window.setTimeout(()=>v(e=>e.slice(1)),jy);return()=>window.clearTimeout(e)},[_]);let A=t.result!==null;(0,M.useEffect)(()=>{if(!A||T.current)return;T.current=!0,S(!0);let e=window.setTimeout(()=>{S(!1),w(!0)},ji);return()=>window.clearTimeout(e)},[A]);let ee=Math.max(0,t.duration-u.time),te=String(Math.floor(ee/60)),j=String(Math.floor(ee%60)).padStart(2,`0`),N=t.result;return(0,W.jsxs)(`div`,{className:`rts-battle`,children:[(0,W.jsx)(`canvas`,{ref:s,className:`rts-battle-canvas`}),(0,W.jsx)(`canvas`,{ref:l,className:`rts-battle-canvas rts-battle-overlay`,"aria-hidden":`true`}),(0,W.jsxs)(`div`,{className:`rts-battle-hud`,children:[(0,W.jsx)(`button`,{className:`rts-btn small`,onClick:()=>p(!0),children:a(`battle.exit`)}),(0,W.jsxs)(`span`,{className:`rts-battle-timer`,children:[te,`:`,j]}),(0,W.jsx)(`span`,{className:`rts-battle-counts`,children:k.map((e,t)=>(0,W.jsxs)(`span`,{style:{color:e.color,opacity:e.alive===0&&!e.strategistAlive?.45:1},children:[e.strategistAlive?`⚑`:`✝`,` `,e.name,` `,e.alive]},t))})]}),(0,W.jsx)(`p`,{className:`rts-battle-hint`,children:a(`battle.hint`)}),_.length>0&&(0,W.jsx)(`div`,{className:`rts-battle-notices`,role:`status`,children:_.map(e=>(0,W.jsx)(`span`,{className:`rts-battle-notice`,children:e.text},e.id))}),u.time>0&&(0,W.jsx)(ki,{source:D,format:O}),x&&(0,W.jsx)(Mi,{text:a(`battle.decided`)}),m&&(0,W.jsx)(Pi,{lang:e,entrants:t.players.map(e=>({name:e.name,color:e.color,team:e.team})),teamMode:E,onStart:()=>{g.current(performance.now()),bi(`battle`)}}),N&&C&&(0,W.jsx)(Ri,{lang:e,players:t.players.map(e=>({id:e.id,name:e.name,color:e.color})),result:N,onExit:i}),f&&!N&&(0,W.jsx)(nt,{title:a(`battle.exit`),actions:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{className:`rts-btn`,onClick:()=>p(!1),children:a(`common.cancel`)}),(0,W.jsx)(`button`,{className:`rts-btn danger`,onClick:()=>{h(!1),i()},children:a(`common.ok`)})]}),children:a(`battle.exitConfirm`)})]})}var Ny=`/assets/tutorial_step_01_units-4koEJQ4B.webp`,Py=`/assets/tutorial_step_02_formations-BK7kfehu.webp`,Fy=`/assets/tutorial_step_03_move-Z9nm_jDq.webp`,Iy=`/assets/tutorial_step_04_flank_rear-DW8yU1dI.webp`,Ly=`/assets/tutorial_step_05_victory-BYViwN_F.webp`,Ry=`/assets/howto_adv_02_charge-KVe7oSJn.webp`,zy=`/assets/howto_adv_03_archers-D6CsPMx1.webp`,By=`/assets/howto_adv_04_strategist_squad-I0GzVWl9.webp`,Vy=[`basic`,`advanced`],Hy=e=>Number.isInteger(e)?String(e):e.toFixed(1),Uy=R.combat,Wy=R.unitTypes,Gy={basic:[{key:`step1`,image:Ny,vars:{maxCost:R.formation.maxSquadCost}},{key:`step2`,image:Py,note:!0,vars:{slots:R.formation.armySlots,hpMul:Hy(Uy.strategistHpBuffMul)}},{key:`step3`,image:Fy},{key:`step4`,image:Ly}],advanced:[{key:`step1`,image:Iy,vars:{side:Hy(Uy.sideDamageMul),rear:Hy(Uy.rearDamageMul)}},{key:`step2`,image:Ry,vars:{chargeSec:Hy(Uy.chargeMinSec),chargeMax:Hy(Uy.chargeMaxMul)}},{key:`step3`,image:zy,vars:{range:Wy.inf_bow.range,cavArrow:Hy(Wy.cav_sword.arrowMul),infArrow:Hy(Wy.inf_sword.arrowMul),shieldArrow:Hy(Wy.inf_shield.arrowMul)}},{key:`step4`,image:By,vars:{hpMul:Hy(Uy.strategistHpBuffMul),strategistSpeed:Hy(Wy.strategist.moveSpeed)}}]};function Ky({lang:e,onBack:t}){let[n,r]=(0,M.useState)(`basic`),i=(t,n)=>F(e,t,n),a=Gy[n];return(0,W.jsxs)(`main`,{className:`rts-screen rts-how-to`,children:[(0,W.jsxs)(qe,{className:`rts-how-to-head`,children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,onClick:t,children:i(`common.back`)}),(0,W.jsx)(`h2`,{children:i(`howTo.title`)}),(0,W.jsx)(`span`,{"aria-hidden":`true`})]}),(0,W.jsx)(`div`,{className:`rts-list-tabs rts-how-to-tabs`,role:`tablist`,"aria-label":i(`howTo.title`),children:Vy.map(e=>(0,W.jsx)(`button`,{role:`tab`,id:`rts-how-to-tab-${e}`,"aria-selected":n===e,"aria-controls":`rts-how-to-panel-${e}`,className:n===e?`active`:void 0,"data-se":`se003`,onClick:()=>r(e),children:i(`howTo.tab.${e}`)},e))}),(0,W.jsx)(`ol`,{className:`rts-how-to-list`,role:`tabpanel`,id:`rts-how-to-panel-${n}`,"aria-labelledby":`rts-how-to-tab-${n}`,"data-tab":n,children:a.map((e,t)=>{let r=`howTo.${n}.${e.key}`;return(0,W.jsxs)(`li`,{className:`rts-how-to-card`,children:[(0,W.jsxs)(`div`,{className:`rts-how-to-copy`,children:[(0,W.jsx)(`span`,{className:`rts-how-to-number`,"aria-hidden":`true`,children:t+1}),(0,W.jsx)(`h3`,{children:i(`${r}.title`)}),i(`${r}.body`,e.vars).split(`

`).map((e,t)=>(0,W.jsx)(`p`,{children:e},t)),e.note?(0,W.jsx)(`p`,{className:`rts-how-to-note`,children:(0,W.jsx)(`strong`,{children:i(`${r}.note`,e.vars)})}):null]}),(0,W.jsx)(`img`,{src:e.image,width:`1536`,height:`1024`,loading:t===0?`eager`:`lazy`,decoding:t===0?`sync`:`async`,alt:i(`${r}.imageAlt`)})]},`${n}-${e.key}`)})})]})}var qy={_comment:`軍師大戦のバージョン。タイトル画面ヘッダー中央の [vX.Y.Z] と、更新時のおしらせ（src/home_news.json）の根拠になる正本。上げるときはここだけを直す。形式は MAJOR.MINOR.PATCH（遊びの内容が変わる追加=MINOR、修正だけ=PATCH）。`,version:`0.5.0`},Jy=(e,t)=>({x:e.x-t,y:e.y-t,w:e.w+t*2,h:e.h+t*2}),Yy=3,Xy=16,Zy=10,Qy=(e,t,n,r)=>`M${e.toFixed(1)} ${t.toFixed(1)}H${(e+n).toFixed(1)}V${(t+r).toFixed(1)}H${e.toFixed(1)}Z`,$y=()=>Math.round(Math.min(178,Math.max(116,window.innerWidth*.155))+24),eb=(e,t)=>e.length===t.length&&e.every((e,n)=>Math.abs(e.x-t[n].x)<.5&&Math.abs(e.y-t[n].y)<.5&&Math.abs(e.w-t[n].w)<.5&&Math.abs(e.h-t[n].h)<.5);function tb({lang:e}){let{snapshot:t,progress:n}=mt(),[r,i]=(0,M.useState)([]),[a,o]=(0,M.useState)({w:0,h:0}),s=n.done?void 0:Kt[n.step],c=n.step,l=s?.screen===`battle`&&s.advance===`wait`&&t.battle?.result===!0,u=s?.advance===`wait`&&s.done?.(t)===!0||l===!0,d=s!==void 0&&s.screen===t.screen,f=(0,M.useRef)(s);(0,M.useEffect)(()=>{f.current=s}),(0,M.useEffect)(()=>{u&&bt(c+1)},[u,c]);let p=s!==void 0&&!n.done;(0,M.useEffect)(()=>{if(!p)return;let e=e=>{e.button!==0&&(e.preventDefault(),e.stopPropagation())},t=e=>e.preventDefault(),n={capture:!0};return document.addEventListener(`pointerdown`,e,n),document.addEventListener(`mousedown`,e,n),document.addEventListener(`auxclick`,e,n),document.addEventListener(`contextmenu`,t,n),()=>{document.removeEventListener(`pointerdown`,e,n),document.removeEventListener(`mousedown`,e,n),document.removeEventListener(`auxclick`,e,n),document.removeEventListener(`contextmenu`,t,n)}},[p]),(0,M.useEffect)(()=>{let e=window;e.__rtsDebug&&(e.__rtsTutorialStep={index:c,id:s?.id??null,screen:s?.screen??null})});let m=!n.done&&c>=Kt.length;if((0,M.useEffect)(()=>{m&&xt()},[m]),(0,M.useEffect)(()=>{if(!d)return;let e=$y();return document.body.style.setProperty(`--rts-tutorial-band`,`${e}px`),document.body.classList.add(`rts-tutorial-space`),()=>{document.body.classList.remove(`rts-tutorial-space`),document.body.style.removeProperty(`--rts-tutorial-band`)}},[d,a.w]),(0,M.useEffect)(()=>{if(!d||!s)return;let e=typeof s.targets==`function`?s.targets(t):s.targets??[],n=e.length===0?null:document.querySelector(e[0]);if(!n)return;let r=$y(),i=()=>{let e=n.getBoundingClientRect(),t=window.innerHeight-r-12;if(e.top>=56&&e.bottom<=t)return;let i=e.bottom>t?e.bottom-t:e.top-56;window.scrollBy({top:i,behavior:`smooth`})};i();let a=window.setTimeout(i,420);return()=>window.clearTimeout(a)},[c,d]),(0,M.useEffect)(()=>{if(!d){i([]);return}let e=0,n=()=>{let r=f.current;if(r){o(e=>e.w===window.innerWidth&&e.h===window.innerHeight?e:{w:window.innerWidth,h:window.innerHeight});let e=[],n=typeof r.targets==`function`?r.targets(t):r.targets??[];for(let t of n)for(let n of document.querySelectorAll(t)){let t=n.getBoundingClientRect();(t.width!==0||t.height!==0)&&e.push({x:t.left,y:t.top,w:t.width,h:t.height})}let a=r.battleTargets?.(t);if(a)for(let t of wt([...a.mine??[],...a.enemies??[]]))e.push(Jy({x:t.x,y:t.y,w:t.w,h:t.h},Xy));i(t=>eb(t,e)?t:e)}e=requestAnimationFrame(n)};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)},[d,t]),!s||!d||a.w===0||t.battle?.intro===!0)return null;let h=Zt(s.id,e),g=s.advance===`tap`,_=g?void 0:`path(evenodd, "${Qy(0,0,a.w,a.h)}${r.map(e=>Qy(e.x,e.y,e.w,e.h)).join(``)}")`,v=r.map(e=>Jy(e,Yy)),y=`rts-tutorial-mask`;return(0,W.jsxs)(`div`,{className:`rts-tutorial`,children:[(0,W.jsx)(`div`,{className:`rts-tutorial-block`,style:{clipPath:_},onPointerDown:g?e=>{e.button===0&&bt(c+1)}:void 0,"aria-hidden":!0}),(0,W.jsxs)(`svg`,{className:`rts-tutorial-dim`,viewBox:`0 0 ${a.w} ${a.h}`,width:a.w,height:a.h,preserveAspectRatio:`none`,"aria-hidden":!0,children:[(0,W.jsx)(`defs`,{children:(0,W.jsxs)(`mask`,{id:y,children:[(0,W.jsx)(`rect`,{x:`0`,y:`0`,width:a.w,height:a.h,fill:`#fff`}),v.map((e,t)=>(0,W.jsx)(`rect`,{x:e.x,y:e.y,width:e.w,height:e.h,rx:Zy,ry:Zy,fill:`#000`},t))]})}),(0,W.jsx)(`rect`,{x:`0`,y:`0`,width:a.w,height:a.h,fill:`#1a1006`,opacity:.58,mask:`url(#${y})`}),v.map((e,t)=>(0,W.jsx)(`rect`,{className:`rts-tutorial-ring${g?``:` act`}`,x:e.x,y:e.y,width:e.w,height:e.h,rx:Zy,ry:Zy},t)),!g&&v.map((e,t)=>(0,W.jsx)(`rect`,{className:`rts-tutorial-pulse`,x:e.x,y:e.y,width:e.w,height:e.h,rx:Zy,ry:Zy},`p${t}`))]}),h!==``&&(0,W.jsxs)(`div`,{className:`rts-tutorial-guide bottom${g?` tappable`:``}`,onClick:g?()=>bt(c+1):void 0,role:g?`button`:void 0,children:[(0,W.jsx)(`img`,{className:`rts-tutorial-bust`,src:`/assets/tutorial_strategist_bust-BSnIXK9h.webp`,alt:``,"aria-hidden":!0}),(0,W.jsxs)(`div`,{className:`rts-tutorial-window`,children:[(0,W.jsxs)(`div`,{className:`rts-tutorial-balloon`,children:[(0,W.jsx)(`p`,{children:h}),(0,W.jsx)(`span`,{className:`rts-tutorial-tap`,children:Qt(g?`tapToContinue`:`waiting`,e)})]}),(0,W.jsx)(`button`,{type:`button`,className:`rts-tutorial-skip`,onClick:e=>{e.stopPropagation(),xt()},children:Qt(`skip`,e)})]})]})]})}function nb(){let e=Pe(),t=e.settings.lang,n=(e,n)=>F(t,e,n),[r,i]=(0,M.useState)({name:`top`});(0,M.useEffect)(()=>{o()},[r]),(0,M.useEffect)(()=>{vt()&&(yt(),We(),i({name:`squads`}))},[]),(0,M.useEffect)(()=>{(r.name===`top`||r.name===`squads`||r.name===`armies`||r.name===`single`)&&dt({screen:r.name})},[r]),(0,M.useEffect)(()=>{let e=document.title;return document.title=F(t,`app.title`),C(t),()=>{document.title=e}},[t]),(0,M.useEffect)(()=>(bi(`title`),()=>bi(null)),[]),(0,M.useEffect)(()=>{w()},[]);let a=t=>{let n=e.armies.find(e=>e.id===t);return n?{army:n,squads:e.squads.filter(e=>n.slots.includes(e.id))}:null};return(0,W.jsxs)(`div`,{className:`rts-page`,onContextMenu:e=>e.preventDefault(),onClick:e=>{let t=e.target?.closest(`button, .rts-list li`);if(!t||t.getAttribute(`aria-disabled`)===`true`||t.tagName===`LI`&&getComputedStyle(t).cursor!==`pointer`)return;let n=t.dataset.se;oi(n===`se001`||n===`se003`?n:`se002`)},children:[r.name===`top`&&(0,W.jsxs)(`div`,{className:`rts-top-bar`,children:[(0,W.jsx)(O,{label:n(`app.backToPark`)}),(0,W.jsx)(j,{version:qy.version}),!1,(0,W.jsx)(`span`,{className:`rts-lang`,role:`group`,"aria-label":n(`top.lang`),children:[`ja`,`en`].map(e=>(0,W.jsx)(`button`,{className:t===e?`active`:``,onClick:()=>{Fe(e),l(`language_change`,{lang:e,from:`strategists-war`})},children:e.toUpperCase()},e))}),(0,W.jsx)(v,{lang:t,className:`rts-sound-btn`,onToggle:e=>l(`sound_toggle`,{muted:e,from:`strategists-war`})}),(0,W.jsx)(ee,{game:`strategists-war`,lang:t,className:`rts-help-btn`,onOpen:()=>l(`open_guide`,{from:`strategists-war`,lang:t})})]}),r.name===`top`&&(0,W.jsxs)(`div`,{className:`rts-menu rts-top-menu`,children:[(0,W.jsxs)(`h1`,{className:`rts-title-scroll`,children:[(0,W.jsx)(`img`,{src:t===`ja`?`/assets/rts-title-ja-gunshi-daisen-DQIWYflU.webp`:`/assets/rts-title-en-strategists-war-DlOrZDph.webp`,alt:``,"aria-hidden":`true`}),(0,W.jsx)(`span`,{className:`rts-visually-hidden`,children:n(`app.title`)})]}),(0,W.jsxs)(`div`,{className:`rts-name-row rts-player-name`,children:[(0,W.jsx)(`label`,{children:n(`top.playerName`)}),(0,W.jsx)(`input`,{value:e.settings.playerName,maxLength:16,onChange:e=>Ie(e.target.value),onBlur:e=>{e.target.value.trim()===``&&Ie(`Player`)},"aria-label":n(`top.playerName`)})]}),(0,W.jsxs)(`button`,{className:`rts-menu-btn`,"data-se":`se001`,"data-tut":`menu-single`,onClick:()=>{l(`select_content`,{content_type:`menu`,item_id:`single`}),i({name:`single`})},children:[(0,W.jsx)(`span`,{className:`rts-menu-icon`,children:(0,W.jsx)(`img`,{src:`/assets/menu_icon_single_swords-BR0ehGWR.webp`,alt:``,"aria-hidden":`true`,width:`512`,height:`512`,draggable:`false`})}),(0,W.jsxs)(`span`,{className:`rts-menu-body`,children:[(0,W.jsx)(`h2`,{children:n(`top.single`)}),(0,W.jsx)(`p`,{children:n(`top.single.desc`)})]}),(0,W.jsxs)(`span`,{className:`rts-menu-art single`,"aria-hidden":`true`,children:[(0,W.jsx)(`i`,{className:`rts-tactical-arrow`,children:`→`}),(0,W.jsx)(`i`,{className:`rts-tactical-dots enemy`})]})]}),(0,W.jsxs)(`button`,{className:`rts-menu-btn`,"data-se":`se001`,onClick:()=>{l(`select_content`,{content_type:`menu`,item_id:`multi`}),i({name:`multi`})},children:[(0,W.jsx)(`span`,{className:`rts-menu-icon`,children:(0,W.jsx)(`img`,{src:`/assets/menu_icon_multi_flag-ClL0CTmh.webp`,alt:``,"aria-hidden":`true`,width:`512`,height:`512`,draggable:`false`})}),(0,W.jsxs)(`span`,{className:`rts-menu-body`,children:[(0,W.jsx)(`h2`,{children:n(`top.multi`)}),(0,W.jsx)(`p`,{children:n(`top.multi.desc`)})]}),(0,W.jsxs)(`span`,{className:`rts-menu-art multi`,"aria-hidden":`true`,children:[(0,W.jsx)(`i`,{children:`→`}),(0,W.jsx)(`i`,{children:`←`})]})]}),(0,W.jsxs)(`button`,{className:`rts-menu-btn`,"data-se":`se001`,"data-tut":`menu-formation`,onClick:()=>{l(`select_content`,{content_type:`menu`,item_id:`formation`}),i({name:`squads`})},children:[(0,W.jsx)(`span`,{className:`rts-menu-icon`,children:(0,W.jsx)(`img`,{src:`/assets/menu_icon_formation_wedge-DcR4CQzm.webp`,alt:``,"aria-hidden":`true`,width:`512`,height:`512`,draggable:`false`})}),(0,W.jsxs)(`span`,{className:`rts-menu-body`,children:[(0,W.jsx)(`h2`,{children:n(`top.formation`)}),(0,W.jsx)(`p`,{children:n(`top.formation.desc`)})]}),(0,W.jsxs)(`span`,{className:`rts-menu-art formation`,"aria-hidden":`true`,children:[(0,W.jsx)(`i`,{className:`rts-tactical-up`,children:`↑`}),(0,W.jsx)(`i`,{className:`rts-tactical-dots wedge`})]})]}),(0,W.jsxs)(`button`,{className:`rts-menu-btn`,onClick:()=>{l(`select_content`,{content_type:`menu`,item_id:`how_to`}),i({name:`howTo`})},children:[(0,W.jsx)(`span`,{className:`rts-menu-icon`,children:(0,W.jsx)(`img`,{src:`/assets/menu_icon_how_to_question-DPt0xzWR.webp`,alt:``,"aria-hidden":`true`,width:`512`,height:`512`,draggable:`false`})}),(0,W.jsxs)(`span`,{className:`rts-menu-body`,children:[(0,W.jsx)(`h2`,{children:n(`top.howTo`)}),(0,W.jsx)(`p`,{children:n(`top.howTo.desc`)})]}),(0,W.jsx)(`span`,{className:`rts-menu-art how-to`,"aria-hidden":`true`,children:(0,W.jsx)(`img`,{src:`/assets/menu_art_how_to_feather_fan-CFpvqJd7.webp`,alt:``,"aria-hidden":`true`,width:`512`,height:`512`,draggable:`false`})})]})]}),r.name===`squads`&&(0,W.jsxs)(`div`,{className:`rts-screen`,children:[(0,W.jsxs)(qe,{className:`rts-list-head`,children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,"data-tut":`back`,onClick:()=>i({name:`top`}),children:n(`common.back`)}),(0,W.jsxs)(`div`,{className:`rts-list-tabs`,role:`tablist`,"aria-label":n(`formation.title`),children:[(0,W.jsx)(`button`,{className:`active`,role:`tab`,"aria-selected":`true`,children:n(`formation.squads`)}),(0,W.jsx)(`button`,{role:`tab`,"aria-selected":`false`,"data-tut":`tab-armies`,onClick:()=>i({name:`armies`}),children:n(`formation.armies`)})]}),(0,W.jsx)(`span`,{className:`rts-count`,children:n(`squadList.count`,{n:e.squads.length,max:R.formation.maxSquads})})]}),(0,W.jsxs)(`ul`,{className:`rts-list`,"data-tut":`squad-list`,children:[e.squads.map(e=>(0,W.jsxs)(`li`,{"data-squad":e.id,onClick:()=>i({name:`squadEdit`,id:e.id}),children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:e.name}),(0,W.jsxs)(`span`,{className:`rts-item-meta`,children:[n(`squadList.unitCount`,{n:e.units.length}),` / Cost `,B(e)]}),(0,W.jsx)(Qe,{units:e.units,label:e=>n(`unit.${e}`)})]},e.id)),e.squads.length<R.formation.maxSquads&&(0,W.jsx)(`li`,{className:`rts-new-item`,children:(0,W.jsxs)(`button`,{"data-tut":`squad-new`,onClick:()=>i({name:`squadEdit`,id:null}),children:[(0,W.jsx)(`span`,{className:`rts-new-plus`,"aria-hidden":`true`,children:`＋`}),(0,W.jsx)(`span`,{children:n(`common.new`)})]})})]}),e.squads.length>=R.formation.maxSquads?(0,W.jsx)(`p`,{className:`rts-hint`,children:n(`squadList.full`,{max:R.formation.maxSquads})}):null]}),r.name===`squadEdit`&&(0,W.jsx)(gn,{lang:t,squadId:r.id,onBack:()=>i({name:`squads`})}),r.name===`armies`&&(0,W.jsxs)(`div`,{className:`rts-screen`,children:[(0,W.jsxs)(qe,{className:`rts-list-head`,children:[(0,W.jsx)(`button`,{className:`rts-btn small`,"data-se":`se003`,"data-tut":`back`,onClick:()=>i({name:`top`}),children:n(`common.back`)}),(0,W.jsxs)(`div`,{className:`rts-list-tabs`,role:`tablist`,"aria-label":n(`formation.title`),children:[(0,W.jsx)(`button`,{role:`tab`,"aria-selected":`false`,"data-tut":`tab-squads`,onClick:()=>i({name:`squads`}),children:n(`formation.squads`)}),(0,W.jsx)(`button`,{className:`active`,role:`tab`,"aria-selected":`true`,children:n(`formation.armies`)})]}),(0,W.jsx)(`span`,{className:`rts-count`,children:n(`armyList.count`,{n:e.armies.length,max:R.formation.maxArmies})})]}),(0,W.jsxs)(`ul`,{className:`rts-list`,children:[e.armies.map(e=>{let t=e.slots.filter(Boolean).length,r=e.strategistSlot!==null&&e.strategistCell!==null&&e.slots[e.strategistSlot]!==null;return(0,W.jsxs)(`li`,{"data-army":e.id,onClick:()=>i({name:`armyEdit`,id:e.id}),children:[(0,W.jsx)(`span`,{className:`rts-item-name`,children:e.name}),(0,W.jsxs)(`span`,{className:`rts-item-meta`,children:[n(`armyList.squadCount`,{n:t,slots:R.formation.armySlots}),!r&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`br`,{}),(0,W.jsx)(`span`,{className:`rts-warn-text`,children:n(`armyList.noStrategist`)})]})]})]},e.id)}),e.armies.length<R.formation.maxArmies&&(0,W.jsx)(`li`,{className:`rts-new-item`,children:(0,W.jsxs)(`button`,{"data-tut":`army-new`,onClick:()=>i({name:`armyEdit`,id:null}),children:[(0,W.jsx)(`span`,{className:`rts-new-plus`,"aria-hidden":`true`,children:`＋`}),(0,W.jsx)(`span`,{children:n(`common.new`)})]})})]}),e.armies.length>=R.formation.maxArmies?(0,W.jsx)(`p`,{className:`rts-hint`,children:n(`armyList.full`,{max:R.formation.maxArmies})}):null]}),r.name===`armyEdit`&&(0,W.jsx)(Tn,{lang:t,armyId:r.id,onBack:()=>i({name:`armies`})}),r.name===`single`&&(0,W.jsx)(Dn,{lang:t,onBack:()=>i({name:`top`}),onStart:e=>i({name:`battle`,config:e})}),r.name===`battle`&&(()=>{let e=a(r.config.playerArmyId);return e?(0,W.jsx)(t_,{lang:t,playerArmy:e,playerCount:r.config.playerCount,mode:r.config.mode,durationSec:r.config.durationSec,moveSpeedMul:r.config.moveSpeedMul,onExit:()=>i({name:`top`})}):(i({name:`single`}),null)})(),r.name===`multi`&&(0,W.jsx)(Ay,{lang:t,onExit:()=>i({name:`top`})}),r.name===`howTo`&&(0,W.jsx)(Ky,{lang:t,onBack:()=>i({name:`top`})}),(0,W.jsx)(tb,{lang:t})]})}export{nb as default};