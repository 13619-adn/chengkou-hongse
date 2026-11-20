/* 城口红迹 · AR场景数据（共享模块） */
const sceneData = {
  blacksmith: {
    title: '打铁铺 · 地下联络点',
    date: '1930—1934年',
    desc: '地下党员伪装成打铁师傅，借打造农具之名搜集情报，以喝茶碰面交换消息。打铁铺与理发店互通，突发情况可快速撤离。',
    color: '#FF6B35',
    content: `
      <!-- 石质基座 -->
      <a-cylinder position="0 0 0" radius="1.2" height="0.08" color="#3D2B1F"></a-cylinder>
      <a-cylinder position="0 0 0" radius="1.15" height="0.1" color="#2D1B0F"></a-cylinder>

      <!-- 炉灶主体 -->
      <a-box position="-0.4 0.35 -0.2" width="0.55" height="0.7" depth="0.5" color="#3A2818"></a-box>
      <a-box position="-0.4 0.75 -0.2" width="0.45" height="0.12" depth="0.4" color="#1A0A00"></a-box>
      <!-- 烟囱 -->
      <a-box position="-0.4 1.1 -0.2" width="0.25" height="0.6" depth="0.25" color="#2A1810"></a-box>

      <!-- 火焰效果 -->
      <a-sphere position="-0.4 0.7 -0.2" radius="0.16" color="#FF3300"
        animation="property: material.color; from: #CC1100; to: #FFAA00; dur: 700; dir: alternate; loop: true"
        animation__scale="property: scale; from: 0.7 0.7 0.7; to: 1.3 1.3 1.3; dur: 500; dir: alternate; loop: true">
      </a-sphere>
      <a-sphere position="-0.4 0.8 -0.15" radius="0.1" color="#FFD700"
        material="opacity: 0.8; transparent: true"
        animation="property: material.opacity; from: 0.4; to: 0.95; dur: 400; dir: alternate; loop: true"
        animation__pos="property: position; from: -0.4 0.7 -0.2; to: -0.4 0.9 -0.15; dur: 600; dir: alternate; loop: true">
      </a-sphere>
      <a-sphere position="-0.35 0.65 -0.25" radius="0.07" color="#FF8800"
        material="opacity: 0.7; transparent: true"
        animation="property: position; from: -0.35 0.6 -0.25; to: -0.3 0.85 -0.1; dur: 800; dir: alternate; loop: true">
      </a-sphere>

      <!-- 火星粒子 -->
      <a-sphere position="-0.4 0.9 -0.2" radius="0.015" color="#FFD700"
        animation="property: position; from: -0.4 0.7 -0.2; to: -0.15 1.8 0; dur: 2000; loop: true; easing: linear"
        animation__opacity="property: material.opacity; from: 1; to: 0; dur: 2000; loop: true; easing: linear"
        material="opacity: 1; transparent: true">
      </a-sphere>
      <a-sphere position="-0.4 0.9 0" radius="0.015" color="#FFAA00"
        animation="property: position; from: -0.4 0.7 -0.15; to: 0.1 1.6 0.1; dur: 2500; loop: true; easing: linear"
        animation__opacity="property: material.opacity; from: 1; to: 0; dur: 2500; loop: true; easing: linear"
        material="opacity: 1; transparent: true">
      </a-sphere>
      <a-sphere position="-0.4 0.9 0" radius="0.012" color="#FFDD00"
        animation="property: position; from: -0.45 0.7 -0.18; to: -0.25 2 0.05; dur: 1800; loop: true; easing: linear"
        animation__opacity="property: material.opacity; from: 1; to: 0; dur: 1800; loop: true; easing: linear"
        material="opacity: 1; transparent: true">
      </a-sphere>

      <!-- 炉火光照 -->
      <a-light type="point" position="-0.4 1 -0.2" color="#FF6600" intensity="2.5" distance="3.5"
        animation="property: light.intensity; from: 1.8; to: 3; dur: 400; dir: alternate; loop: true">
      </a-light>

      <!-- 铁砧 -->
      <a-box position="0.35 0.2 0.15" width="0.18" height="0.2" depth="0.18" color="#2A2A2A"></a-box>
      <a-box position="0.35 0.35 0.15" width="0.35" height="0.06" depth="0.15" color="#3A3A3A"></a-box>
      <a-box position="0.35 0.38 0.07" width="0.08" height="0.04" depth="0.04" color="#2A2A2A"></a-box>

      <!-- 铁锤（摆动动画）-->
      <a-entity position="0.35 0.5 0.15">
        <a-cylinder radius="0.025" height="0.35" rotation="0 0 70" color="#8B4513"
          animation="property: rotation; from: 0 0 40; to: 0 0 100; dur: 700; dir: alternate; loop: true; easing: easeInOutQuad">
        </a-cylinder>
        <a-box position="0.16 0.08 0" width="0.12" height="0.08" depth="0.06" rotation="0 0 70" color="#4A4A4A"
          animation="property: rotation; from: 0 0 40; to: 0 0 100; dur: 700; dir: alternate; loop: true; easing: easeInOutQuad">
        </a-box>
      </a-entity>

      <!-- 正在锻造的铁条（红热）-->
      <a-cylinder position="0.35 0.42 0.15" radius="0.018" height="0.3" rotation="0 0 90" color="#FF3300"
        material="emissive: #FF2200; emissiveIntensity: 0.8"
        animation="property: material.emissiveIntensity; from: 0.5; to: 1; dur: 600; dir: alternate; loop: true">
      </a-cylinder>

      <!-- 风箱 -->
      <a-cone position="-0.4 0.4 -0.55" radius-bottom="0.12" radius-top="0.18" height="0.35" rotation="90 0 0" color="#5C3A20"
        material="opacity: 0.85; transparent: true"
        animation="property: scale; from: 0.9 0.9 0.9; to: 1.1 1.1 1.1; dur: 800; dir: alternate; loop: true">
      </a-cone>

      <!-- 隐藏情报信封（周期出现）-->
      <a-plane position="0.5 0.55 0.2" width="0.18" height="0.12" rotation="-20 30 0" color="#F5E6C8"
        material="opacity: 0; transparent: true; side: double"
        animation="property: material.opacity; from: 0; to: 0.9; dur: 1500; dir: alternate; loop: true; delay: 2000">
      </a-plane>
      <a-text position="0.5 0.58 0.22" value="情报" rotation="-20 30 0" color="#8B0000" width="0.8" align="center"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 1; dur: 1500; dir: alternate; loop: true; delay: 2000">
      </a-text>

      <!-- 浮动信息 -->
      <a-text position="0 2.2 0" value="打铁铺 · 地下联络点" align="center" color="#C9A961" width="4" position="0 2.4 0"></a-text>
      <a-text position="0 1.9 0" value="1930—1934年" align="center" color="#FF6B35" width="3"></a-text>

      <!-- 环境光 -->
      <a-light type="ambient" color="#3A2010" intensity="0.4"></a-light>
    `
  },

  guangxingzhan: {
    title: '毛主席借宿 · 广兴栈',
    date: '1934年11月6日',
    desc: '毛主席在广兴栈借宿一晚，铺开地图研究红军行动方案。提议北上入湘桂东再转回井冈山，避开湘江正面交战。计划被三人团否决。',
    color: '#E5C76B',
    content: `
      <!-- 木质地板 -->
      <a-plane position="0 0 0" rotation="-90 0 0" width="2.4" height="2" color="#4A3020"></a-plane>
      <a-plane position="0 0 0.01" rotation="-90 0 0" width="2.2" height="1.8" color="#3A2515"></a-plane>

      <!-- 后墙 -->
      <a-plane position="0 1 -0.8" width="2.4" height="2" color="#5C4A35"
        material="side: back"></a-plane>
      <!-- 侧墙 -->
      <a-plane position="-1 1 0.2" rotation="0 90 0" width="2" height="2" color="#4A3A25"
        material="side: back"></a-plane>

      <!-- 窗户（夜色）-->
      <a-plane position="0.5 1.2 -0.79" width="0.5" height="0.5" color="#0A0A2A"></a-plane>
      <a-plane position="0.5 1.2 -0.78" width="0.46" height="0.46" color="#0D0D35"
        material="opacity: 0.8; transparent: true"></a-plane>
      <!-- 窗框 -->
      <a-box position="0.5 1.2 -0.78" width="0.52" height="0.02" depth="0.02" color="#3A2810"></a-box>
      <a-box position="0.5 1.2 -0.78" width="0.02" height="0.52" depth="0.02" color="#3A2810"></a-box>

      <!-- 桌子 -->
      <a-box position="0 0.35 0" width="0.8" height="0.05" depth="0.5" color="#3A2515"></a-box>
      <a-box position="-0.35 0.17 0.2" width="0.05" height="0.35" depth="0.05" color="#2A1810"></a-box>
      <a-box position="0.35 0.17 0.2" width="0.05" height="0.35" depth="0.05" color="#2A1810"></a-box>
      <a-box position="-0.35 0.17 -0.2" width="0.05" height="0.35" depth="0.05" color="#2A1810"></a-box>
      <a-box position="0.35 0.17 -0.2" width="0.05" height="0.35" depth="0.05" color="#2A1810"></a-box>

      <!-- 桌上的地图 -->
      <a-plane position="0 0.39 0" rotation="-90 0 0" width="0.65" height="0.38" color="#E8D8B0"
        material="side: double"></a-plane>
      <!-- 地图线条（简化路线）-->
      <a-cylinder position="-0.15 0.04 0" rotation="0 0 45" radius="0.003" height="0.3" color="#CC0000"></a-cylinder>
      <a-cylinder position="0.1 0.04 0.05" rotation="0 0 -20" radius="0.003" height="0.25" color="#CC0000"></a-cylinder>
      <a-sphere position="-0.2 0.042 0" radius="0.02" color="#FF0000"></a-sphere>
      <a-sphere position="0.15 0.042 0.05" radius="0.02" color="#FF0000"></a-sphere>
      <a-sphere position="0 0.042 -0.1" radius="0.02" color="#0000FF"></a-sphere>

      <!-- 油灯 -->
      <a-cylinder position="0.28 0.45 0" radius="0.05" height="0.06" color="#3A2810"></a-cylinder>
      <a-cylinder position="0.28 0.52 0" radius="0.03" height="0.08" color="#C9A961"
        material="opacity: 0.7; transparent: true; metalness: 0.5"></a-cylinder>
      <a-sphere position="0.28 0.57 0" radius="0.025" color="#FFD700"
        material="emissive: #FFCC00; emissiveIntensity: 1.5"
        animation="property: material.emissiveIntensity; from: 1; to: 2; dur: 300; dir: alternate; loop: true"
        animation__scale="property: scale; from: 0.9 0.9 0.9; to: 1.1 1.1 1.1; dur: 300; dir: alternate; loop: true">
      </a-sphere>

      <!-- 油灯光照 -->
      <a-light type="point" position="0.28 0.6 0" color="#FFCC44" intensity="1.5" distance="2.5"
        animation="property: light.intensity; from: 1.2; to: 1.8; dur: 400; dir: alternate; loop: true">
      </a-light>

      <!-- 椅子 -->
      <a-box position="0 0.22 0.5" width="0.35" height="0.04" depth="0.35" color="#3A2515"></a-box>
      <a-box position="0 0.4 0.65" width="0.35" height="0.4" depth="0.04" color="#2A1810"></a-box>
      <a-box position="-0.15 0.1 0.5" width="0.04" height="0.2" depth="0.04" color="#2A1810"></a-box>
      <a-box position="0.15 0.1 0.5" width="0.04" height="0.2" depth="0.04" color="#2A1810"></a-box>

      <!-- 人物（简化）-->
      <a-cylinder position="0 0.65 0.5" radius="0.12" height="0.35" color="#1A1A3A"></a-cylinder>
      <a-sphere position="0 0.9 0.5" radius="0.09" color="#D4A574"></a-sphere>
      <a-cylinder position="0 0.55 0.35" radius="0.03" height="0.15" rotation="30 0 0" color="#D4A574"></a-cylinder>

      <!-- 浮动军事计划文本 -->
      <a-text position="0 1.6 0" value="北上计划" align="center" color="#FFD700" width="2.5"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 0.9; dur: 2000; dir: alternate; loop: true; delay: 1000">
      </a-text>
      <a-text position="0 1.4 0" value="进入湘桂东 → 井冈山" align="center" color="#C9A961" width="3"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 0.8; dur: 2000; dir: alternate; loop: true; delay: 1500">
      </a-text>

      <!-- 标题 -->
      <a-text position="0 2.6 0" value="毛主席借宿 · 广兴栈" align="center" color="#C9A961" width="4"></a-text>
      <a-text position="0 2.3 0" value="1934年11月6日" align="center" color="#E5C76B" width="3"></a-text>

      <!-- 环境光 -->
      <a-light type="ambient" color="#2A2010" intensity="0.3"></a-light>
    `
  },

  sloganWall: {
    title: '红军标语墙',
    date: '1934年11月初',
    desc: '1934年11月初红军留下的标语墨宝。建国后部分被白色涂料掩盖，原貌已做拓印保存于博物馆。墙上的标语是红军宣传革命纲领的重要载体。',
    color: '#C8102E',
    content: `
      <!-- 砖墙基底 -->
      <a-plane position="0 0.8 -0.3" width="2" height="1.6" color="#8B7355"
        material="side: double"></a-plane>
      <a-plane position="0 0.8 -0.29" width="1.95" height="1.55" color="#7B6345"
        material="side: double"></a-plane>

      <!-- 砖缝纹理 -->
      <a-box position="0 1.4 -0.28" width="1.96" height="0.015" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0 1.1 -0.28" width="1.96" height="0.015" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0 0.8 -0.28" width="1.96" height="0.015" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0 0.5 -0.28" width="1.96" height="0.015" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0 0.2 -0.28" width="1.96" height="0.015" depth="0.005" color="#6B5335"></a-box>
      <a-box position="-0.5 1.25 -0.28" width="0.015" height="0.3" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0.5 1.25 -0.28" width="0.015" height="0.3" depth="0.005" color="#6B5335"></a-box>
      <a-box position="-0.5 0.95 -0.28" width="0.015" height="0.3" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0.5 0.95 -0.28" width="0.015" height="0.3" depth="0.005" color="#6B5335"></a-box>
      <a-box position="-0.5 0.65 -0.28" width="0.015" height="0.3" depth="0.005" color="#6B5335"></a-box>
      <a-box position="0.5 0.65 -0.28" width="0.015" height="0.3" depth="0.005" color="#6B5335"></a-box>

      <!-- 红军标语文字（逐条出现）-->
      <a-text position="0 1.25 -0.27" value="打倒土豪劣绅" align="center" color="#CC0000" width="3"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 0.95; dur: 1500; loop: false; delay: 500">
      </a-text>
      <a-text position="0 0.95 -0.27" value="红军是工农自己的军队" align="center" color="#CC0000" width="3.5"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 0.95; dur: 1500; loop: false; delay: 1500">
      </a-text>
      <a-text position="0 0.65 -0.27" value="废除苛捐杂税" align="center" color="#CC0000" width="3"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 0.95; dur: 1500; loop: false; delay: 2500">
      </a-text>
      <a-text position="0 0.35 -0.27" value="共产党是人民的救星" align="center" color="#CC0000" width="3.5"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 0.95; dur: 1500; loop: false; delay: 3500">
      </a-text>

      <!-- 白色涂料覆盖层（交替显现/消失）-->
      <a-plane position="0 0.8 -0.26" width="1.9" height="1.5" color="#F0F0F0"
        material="opacity: 0; transparent: true; side: double"
        animation="property: material.opacity; from: 0; to: 0.75; dur: 2000; dir: alternate; loop: true; delay: 5000">
      </a-plane>

      <!-- 日期标记 -->
      <a-text position="0 1.8 -0.27" value="1934年11月" align="center" color="#C9A961" width="2.5"
        material="opacity: 0; transparent: true"
        animation="property: material.opacity; from: 0; to: 1; dur: 1000; loop: false; delay: 200">
      </a-text>

      <!-- 标题 -->
      <a-text position="0 2.4 0" value="红军标语墙" align="center" color="#C9A961" width="4"></a-text>
      <a-text position="0 2.1 0" value="1934年11月初" align="center" color="#E5C76B" width="3"></a-text>

      <!-- 环境光 -->
      <a-light type="ambient" color="#404040" intensity="0.5"></a-light>
      <a-light type="directional" position="1 2 1" color="#FFFFFF" intensity="0.6"></a-light>
    `
  },

  tongguling: {
    title: '铜鼓岭战役纪念碑',
    date: '1934年11月初',
    desc: '突破国民党第二道封锁线的关键战斗。红军英勇攻克铜鼓岭制高点，为主力部队过境打开通道。纪念碑铭记牺牲将士，传承革命精神。',
    color: '#C8102E',
    content: `
      <!-- 地面 -->
      <a-plane position="0 0 0" rotation="-90 0 0" width="3" height="3" color="#2A3A20"></a-plane>

      <!-- 山体基座 -->
      <a-cone position="0 0.5 0" radius-bottom="1.5" radius-top="0.6" height="1" color="#3A4A30"
        material="flatShading: true"></a-cone>

      <!-- 纪念碑基座 -->
      <a-box position="0 1.1 0" width="0.6" height="0.25" depth="0.6" color="#5A5A5A"></a-box>
      <a-box position="0 1.3 0" width="0.5" height="0.15" depth="0.5" color="#6A6A6A"></a-box>

      <!-- 纪念碑主体 -->
      <a-box position="0 2.1 0" width="0.35" height="1.4" depth="0.35" color="#7A7A7A"
        material="metalness: 0.3; roughness: 0.7"></a-box>

      <!-- 碑顶 -->
      <a-cone position="0 3.1 0" radius-bottom="0.25" radius-top="0.02" height="0.4" color="#8A8A8A"></a-cone>

      <!-- 碑上红色五角星 -->
      <a-plane position="0 2.3 0.18" width="0.15" height="0.15" color="#C8102E"
        material="side: double"></a-plane>

      <!-- 文字铭文 -->
      <a-text position="0 1.9 0.18" value="铜鼓岭战役" align="center" color="#C8102E" width="0.8"
        material="side: double"></a-text>
      <a-text position="0 1.7 0.18" value="纪念碑" align="center" color="#C8102E" width="0.6"
        material="side: double"></a-text>

      <!-- 花圈/花环 -->
      <a-torus position="0.7 1.15 0.3" radius="0.15" tube="0.03" color="#C8102E"
        rotation="0 30 0"></a-torus>
      <a-torus position="-0.6 1.15 0.4" radius="0.12" tube="0.025" color="#FFD700"
        rotation="0 -20 0"></a-torus>

      <!-- 红旗飘扬 -->
      <a-plane position="0.8 2.8 0.5" width="0.4" height="0.25" color="#C8102E"
        material="side: double"
        animation="property: rotation; from: 0 30 -5; to: 0 30 5; dur: 2000; dir: alternate; loop: true; easing: easeInOutSine">
      </a-plane>
      <a-cylinder position="0.65 2.65 0.5" radius="0.01" height="0.6" color="#3A2810"></a-cylinder>

      <!-- 战场红光效果 -->
      <a-light type="point" position="0 2 0" color="#FF4444" intensity="1.2" distance="3"
        animation="property: light.intensity; from: 0.8; to: 1.5; dur: 1500; dir: alternate; loop: true">
      </a-light>

      <!-- 浮动粒子（象征革命精神）-->
      <a-sphere position="0.5 1.5 0.3" radius="0.02" color="#FFD700"
        material="opacity: 0.8; transparent: true"
        animation="property: position; from: 0.5 1.2 0.3; to: 0.5 3 0.3; dur: 3000; loop: true; easing: easeOutSine"
        animation__opacity="property: material.opacity; from: 1; to: 0; dur: 3000; loop: true">
      </a-sphere>
      <a-sphere position="-0.3 1.3 0.4" radius="0.015" color="#FF6644"
        material="opacity: 0.8; transparent: true"
        animation="property: position; from: -0.3 1.2 0.4; to: -0.3 2.8 0.4; dur: 4000; loop: true; easing: easeOutSine; delay: 500"
        animation__opacity="property: material.opacity; from: 1; to: 0; dur: 4000; loop: true; delay: 500">
      </a-sphere>
      <a-sphere position="0.2 1.4 -0.3" radius="0.018" color="#FFAA00"
        material="opacity: 0.8; transparent: true"
        animation="property: position; from: 0.2 1.2 -0.3; to: 0.2 2.9 -0.3; dur: 3500; loop: true; easing: easeOutSine; delay: 1000"
        animation__opacity="property: material.opacity; from: 1; to: 0; dur: 3500; loop: true; delay: 1000">
      </a-sphere>

      <!-- 标题 -->
      <a-text position="0 3.8 0" value="铜鼓岭战役纪念碑" align="center" color="#C9A961" width="4"></a-text>
      <a-text position="0 3.5 0" value="1934年11月初" align="center" color="#C8102E" width="3"></a-text>

      <!-- 环境光 -->
      <a-light type="ambient" color="#3A3A2A" intensity="0.5"></a-light>
      <a-light type="directional" position="1 2 1" color="#FFE4B0" intensity="0.5"></a-light>
    `
  }
};

const hiroMarkerSVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <rect x="2" y="2" width="96" height="96" fill="white" stroke="none"/>
  <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" stroke-width="4"/>
  <rect x="14" y="14" width="72" height="72" fill="none" stroke="black" stroke-width="3"/>
  <rect x="25" y="25" width="50" height="50" fill="white" stroke="black" stroke-width="2"/>
  <rect x="35" y="30" width="30" height="8" fill="black"/>
  <rect x="35" y="30" width="8" height="35" fill="black"/>
  <rect x="57" y="45" width="8" height="20" fill="black"/>
  <rect x="50" y="45" width="15" height="8" fill="black"/>
  <circle cx="40" cy="55" r="6" fill="black"/>
</svg>`;
