import{s as R,n as x}from"./scheduler.B0JbnikJ.js";import{S as K,i as O,e as o,s as u,H as U,c as e,l,f as i,a as W,m as q,d as a,n as I,g as t}from"./index.CGQof9HY.js";function F(N){let p,A='<a href="https://school.programmers.co.kr/learn/courses/30/lessons/258712" rel="nofollow">문제링크</a>',y,k,L=`<strong>문제 설명</strong>
선물을 직접 전하기 힘들 때 카카오톡 선물하기 기능을 이용해 축하 선물을 보낼 수 있습니다. 당신의 친구들이 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달에 누가 선물을 많이 받을지 예측하려고 합니다.`,v,r,D="<li><em>두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.</em><ul><li>예를 들어 A가 B에게 선물을 5번 줬고, B가 A에게 선물을 3번 줬다면 다음 달엔 A가 B에게 선물을 하나 받습니다.</li></ul></li> <li><em>두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.</em><ul><li>선물 지수는 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.</li> <li>예를 들어 A가 친구들에게 준 선물이 3개고 받은 선물이 10개라면 A의 선물 지수는 -7입니다. B가 친구들에게 준 선물이 3개고 받은 선물이 2개라면 B의 선물 지수는 1입니다. 만약 A와 B가 선물을 주고받은 적이 없거나 정확히 같은 수로 선물을 주고받았다면, 다음 달엔 B가 A에게 선물을 하나 받습니다.</li> <li><em>만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.</em></li></ul></li>",b,f,M="위에서 설명한 규칙대로 다음 달에 선물을 주고받을 때, 당신은 선물을 가장 많이 받을 친구가 받을 선물의 수를 알고 싶습니다.",h,d,B="친구들의 이름을 담은 1차원 문자열 배열 friends 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts가 매개변수로 주어집니다. 이때, 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.",_,m,z="<strong>제한사항</strong>",C,g,P="<li>2 ≤ friends의 길이 = 친구들의 수 ≤ 50<ul><li>friends의 원소는 친구의 이름을 의미하는 알파벳 소문자로 이루어진 길이가 10 이하인 문자열입니다.</li> <li>이름이 같은 친구는 없습니다.</li></ul></li> <li>1 ≤ gifts의 길이 ≤ 10,000<ul><li>gifts의 원소는 “A B”형태의 문자열입니다. A는 선물을 준 친구의 이름을 B는 선물을 받은 친구의 이름을 의미하며 공백 하나로 구분됩니다.</li> <li>A와 B는 friends의 원소이며 A와 B가 같은 이름인 경우는 존재하지 않습니다.</li></ul></li>",S,c,E='<a href="#solution-code">solution code</a>',H,w,T,j=`<code class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;map></span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">solution</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span>string<span class="token operator">></span> friends<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span>string<span class="token operator">></span> gifts<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">int</span> answer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 선물 보낸 횟수</span>
    map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> sendScore<span class="token punctuation">;</span>
    <span class="token comment">// 선물 받은 횟수</span>
    map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> reciveScore<span class="token punctuation">;</span>
    <span class="token comment">// 선물 점수</span>
    map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> resultScore<span class="token punctuation">;</span>

    <span class="token comment">// 다음달에 받을 선물 갯수</span>
    map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> giftCnt<span class="token punctuation">;</span>

    <span class="token comment">// 친구1, 친구2, 선물 교환 숫자</span>
    map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">>></span> giftData<span class="token punctuation">;</span>

    <span class="token comment">// a b와 b c가 있는걸 방지하기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> j <span class="token operator">&lt;</span> friends<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> friends<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            string a <span class="token operator">=</span> friends<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            string b <span class="token operator">=</span> friends<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">&#123;</span>
                    giftData<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
                <span class="token keyword">else</span>
                <span class="token punctuation">&#123;</span>
                    <span class="token keyword">auto</span> finder <span class="token operator">=</span> giftData<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>finder <span class="token operator">==</span> giftData<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">&#123;</span>
                        giftData<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                    <span class="token punctuation">&#125;</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 보내고 받은게 0인 경우를 대비하여 미리 초기화</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> a <span class="token operator">:</span> friends<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        sendScore<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> a<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        reciveScore<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> a<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resultScore<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> a<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 선물 교환 횟수 구하기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> gift <span class="token operator">:</span> gifts<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// gift에서 보낸이와 받은이를 구하기 위해 substr을 이용하여 문자열 나누기</span>
        size_t slash <span class="token operator">=</span> gift<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        string sender <span class="token operator">=</span> gift<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> slash<span class="token punctuation">)</span><span class="token punctuation">;</span>
        string reciever <span class="token operator">=</span> gift<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>slash <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> gift<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 존재하는 곳에 데이터를 구하기 위해 find 사용</span>
        <span class="token keyword">auto</span> finder1 <span class="token operator">=</span> giftData<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// first key로 존재한다면</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>finder1 <span class="token operator">!=</span> giftData<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token comment">// first안에 second로 있는지 확인</span>
            <span class="token keyword">auto</span> finder2 <span class="token operator">=</span> giftData<span class="token punctuation">[</span>sender<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>reciever<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>finder2 <span class="token operator">!=</span> giftData<span class="token punctuation">[</span>sender<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                <span class="token comment">// 있다면 sender가 reciever에 준거니까 ++</span>
                giftData<span class="token punctuation">[</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>reciever<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">&#123;</span>
                <span class="token comment">// 없다면 reciever가 key1로 존재한다는 뜻이니 --</span>
                giftData<span class="token punctuation">[</span>reciever<span class="token punctuation">]</span><span class="token punctuation">[</span>sender<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">&#123;</span>
            <span class="token comment">// 없다면 reciver가 무조건 key라는 뜻이니 --</span>
            giftData<span class="token punctuation">[</span>reciever<span class="token punctuation">]</span><span class="token punctuation">[</span>sender<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 선물 점수 산정하기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>string gift <span class="token operator">:</span> gifts<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// 위와 같이 보낸이 받은이 분해 후</span>
        size_t slash <span class="token operator">=</span> gift<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        string sender <span class="token operator">=</span> gift<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> slash<span class="token punctuation">)</span><span class="token punctuation">;</span>
        string reciever <span class="token operator">=</span> gift<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>slash <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> gift<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 각 값에 맞게 ++</span>
        <span class="token operator">++</span>sendScore<span class="token punctuation">[</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token operator">++</span>reciveScore<span class="token punctuation">[</span>reciever<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 받은 횟수 보낸 횟수를 이용하여 선물점수 구하기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> result <span class="token operator">:</span> resultScore<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        resultScore<span class="token punctuation">[</span>result<span class="token punctuation">.</span>first<span class="token punctuation">]</span> <span class="token operator">=</span> sendScore<span class="token punctuation">[</span>result<span class="token punctuation">.</span>first<span class="token punctuation">]</span> <span class="token operator">-</span> reciveScore<span class="token punctuation">[</span>result<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 그동안 구한 값들을 이용하여 다음 달에 받을 선물 갯수 구하기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> a <span class="token operator">:</span> giftData<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> b <span class="token operator">:</span> a<span class="token punctuation">.</span>second<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">int</span> gift <span class="token operator">=</span> b<span class="token punctuation">.</span>second<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>gift <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                <span class="token comment">// a가 더 많이 줬다는 의미이니 a한테 ++</span>
                giftCnt<span class="token punctuation">[</span>a<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>gift <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                <span class="token comment">// b가 더 많이 줬다는 의미이니 b한테 ++</span>
                giftCnt<span class="token punctuation">[</span>b<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">&#123;</span>
                <span class="token comment">// 둘이 하나도 안주고 받았거나 둘이 똑같이 주고 받은거니 선물점수를 이용</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>resultScore<span class="token punctuation">[</span>a<span class="token punctuation">.</span>first<span class="token punctuation">]</span> <span class="token operator">></span> resultScore<span class="token punctuation">[</span>b<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">&#123;</span>
                    giftCnt<span class="token punctuation">[</span>a<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>resultScore<span class="token punctuation">[</span>a<span class="token punctuation">.</span>first<span class="token punctuation">]</span> <span class="token operator">&lt;</span> resultScore<span class="token punctuation">[</span>b<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">&#123;</span>
                    giftCnt<span class="token punctuation">[</span>b<span class="token punctuation">.</span>first<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 선물 갯수 최댓값 구하기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> cnt <span class="token operator">:</span> giftCnt<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>answer <span class="token operator">&lt;</span> cnt<span class="token punctuation">.</span>second<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            answer <span class="token operator">=</span> cnt<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){p=o("p"),p.innerHTML=A,y=u(),k=o("p"),k.innerHTML=L,v=u(),r=o("ul"),r.innerHTML=D,b=u(),f=o("p"),f.textContent=M,h=u(),d=o("p"),d.textContent=B,_=u(),m=o("p"),m.innerHTML=z,C=u(),g=o("ul"),g.innerHTML=P,S=u(),c=o("h2"),c.innerHTML=E,H=u(),w=o("pre"),T=new U(!1),this.h()},l(n){p=e(n,"P",{"data-svelte-h":!0}),l(p)!=="svelte-wa064n"&&(p.innerHTML=A),y=i(n),k=e(n,"P",{"data-svelte-h":!0}),l(k)!=="svelte-1p76exu"&&(k.innerHTML=L),v=i(n),r=e(n,"UL",{"data-svelte-h":!0}),l(r)!=="svelte-eokz40"&&(r.innerHTML=D),b=i(n),f=e(n,"P",{"data-svelte-h":!0}),l(f)!=="svelte-1uzv7ta"&&(f.textContent=M),h=i(n),d=e(n,"P",{"data-svelte-h":!0}),l(d)!=="svelte-oon1bf"&&(d.textContent=B),_=i(n),m=e(n,"P",{"data-svelte-h":!0}),l(m)!=="svelte-azgt2s"&&(m.innerHTML=z),C=i(n),g=e(n,"UL",{"data-svelte-h":!0}),l(g)!=="svelte-ct46gs"&&(g.innerHTML=P),S=i(n),c=e(n,"H2",{id:!0,"data-svelte-h":!0}),l(c)!=="svelte-1es0x5u"&&(c.innerHTML=E),H=i(n),w=e(n,"PRE",{class:!0});var s=W(w);T=q(s,!1),s.forEach(a),this.h()},h(){I(c,"id","solution-code"),T.a=null,I(w,"class","language-cpp")},m(n,s){t(n,p,s),t(n,y,s),t(n,k,s),t(n,v,s),t(n,r,s),t(n,b,s),t(n,f,s),t(n,h,s),t(n,d,s),t(n,_,s),t(n,m,s),t(n,C,s),t(n,g,s),t(n,S,s),t(n,c,s),t(n,H,s),t(n,w,s),T.m(j,w)},p:x,i:x,o:x,d(n){n&&(a(p),a(y),a(k),a(v),a(r),a(b),a(f),a(h),a(d),a(_),a(m),a(C),a(g),a(S),a(c),a(H),a(w))}}}const J={title:"프로그래머스 2024 KAKAO WINTER INTERNSHIP 가장 많이 받은 선물 C++",date:"2024-07-03T00:00:00.000Z",preview:"프로그래머스 > 2024 KAKAO WINTER INTERNSHIP > 가장 많이 받은 선물 C++ 풀이",headings:[{depth:2,value:"solution code",id:"solution-code"}]};class Q extends K{constructor(p){super(),O(this,p,null,F,R,{})}}export{Q as default,J as metadata};
