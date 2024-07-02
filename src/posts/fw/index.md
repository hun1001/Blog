---
title: 프로그래머스 2024 KAKAO WINTER INTERNSHIP 가장 많이 받은 선물 C++
date: 2024-07-03
preview: 프로그래머스 > 2024 KAKAO WINTER INTERNSHIP > 가장 많이 받은 선물 C++ 풀이
---

[문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/258712)

**문제 설명**
 선물을 직접 전하기 힘들 때 카카오톡 선물하기 기능을 이용해 축하 선물을 보낼 수 있습니다. 당신의 친구들이 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달에 누가 선물을 많이 받을지 예측하려고 합니다.

- *두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.*
    - 예를 들어 A가 B에게 선물을 5번 줬고, B가 A에게 선물을 3번 줬다면 다음 달엔 A가 B에게 선물을 하나 받습니다.
- *두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.*
    - 선물 지수는 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.
    - 예를 들어 A가 친구들에게 준 선물이 3개고 받은 선물이 10개라면 A의 선물 지수는 -7입니다. B가 친구들에게 준 선물이 3개고 받은 선물이 2개라면 B의 선물 지수는 1입니다. 만약 A와 B가 선물을 주고받은 적이 없거나 정확히 같은 수로 선물을 주고받았다면, 다음 달엔 B가 A에게 선물을 하나 받습니다.
    - *만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.*  

위에서 설명한 규칙대로 다음 달에 선물을 주고받을 때, 당신은 선물을 가장 많이 받을 친구가 받을 선물의 수를 알고 싶습니다.

친구들의 이름을 담은 1차원 문자열 배열 friends 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts가 매개변수로 주어집니다. 이때, 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.

**제한사항**
- 2 ≤ friends의 길이 = 친구들의 수 ≤ 50
    - friends의 원소는 친구의 이름을 의미하는 알파벳 소문자로 이루어진 길이가 10 이하인 문자열입니다.
    - 이름이 같은 친구는 없습니다.
- 1 ≤ gifts의 길이 ≤ 10,000
    - gifts의 원소는 "A B"형태의 문자열입니다. A는 선물을 준 친구의 이름을 B는 선물을 받은 친구의 이름을 의미하며 공백 하나로 구분됩니다.
    - A와 B는 friends의 원소이며 A와 B가 같은 이름인 경우는 존재하지 않습니다.

solution code
---
```cpp
#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<string> friends, vector<string> gifts) {
    int answer = 0;

    // 선물 보낸 횟수
    map<string, int> sendScore;
    // 선물 받은 횟수
    map<string, int> reciveScore;
    // 선물 점수
    map<string, int> resultScore;

    // 다음달에 받을 선물 갯수
    map<string, int> giftCnt;

    // 친구1, 친구2, 선물 교환 숫자
    map<string, map<string, int>> giftData;

    // a b와 b c가 있는걸 방지하기
    for (int j = 0 ; j < friends.size() ; ++j)
    {
        for (int i = 0; i < friends.size(); ++i)
        {
            string a = friends[j];
            string b = friends[i];

            if (a != b)
            {
                if (j == 0)
                {
                    giftData[a][b] = 0;
                }
                else
                {
                    auto finder = giftData.find(b);

                    if (finder == giftData.end())
                    {
                        giftData[a][b] = 0;
                    }
                }
            }
        }
    }

    // 보내고 받은게 0인 경우를 대비하여 미리 초기화
    for (auto a : friends)
    {
        sendScore.insert({ a, 0 });
        reciveScore.insert({ a, 0 });
        resultScore.insert({ a, 0 });
    }

    // 선물 교환 횟수 구하기
    for (auto gift : gifts)
    {
        // gift에서 보낸이와 받은이를 구하기 위해 substr을 이용하여 문자열 나누기
        size_t slash = gift.find(" ");

        string sender = gift.substr(0, slash);
        string reciever = gift.substr(slash + 1, gift.size());

        // 존재하는 곳에 데이터를 구하기 위해 find 사용
        auto finder1 = giftData.find(sender);

        // first key로 존재한다면
        if (finder1 != giftData.end())
        {
            // first안에 second로 있는지 확인
            auto finder2 = giftData[sender].find(reciever);

            if (finder2 != giftData[sender].end())
            {
                // 있다면 sender가 reciever에 준거니까 ++
                giftData[sender][reciever]++;
            }
            else
            {
                // 없다면 reciever가 key1로 존재한다는 뜻이니 --
                giftData[reciever][sender]--;
            }
        }
        else
        {
            // 없다면 reciver가 무조건 key라는 뜻이니 --
            giftData[reciever][sender]--;
        }
    }

    // 선물 점수 산정하기
    for (string gift : gifts)
    {
        // 위와 같이 보낸이 받은이 분해 후
        size_t slash = gift.find(" ");

        string sender = gift.substr(0, slash);
        string reciever = gift.substr(slash + 1, gift.size());

        // 각 값에 맞게 ++
        ++sendScore[sender];
        ++reciveScore[reciever];
    }

    // 받은 횟수 보낸 횟수를 이용하여 선물점수 구하기
    for (auto result : resultScore)
    {
        resultScore[result.first] = sendScore[result.first] - reciveScore[result.first];
    }

    // 그동안 구한 값들을 이용하여 다음 달에 받을 선물 갯수 구하기
    for (auto a : giftData)
    {
        for (auto b : a.second)
        {
            int gift = b.second;

            if (gift > 0)
            {
                // a가 더 많이 줬다는 의미이니 a한테 ++
                giftCnt[a.first]++;
            }
            else if (gift < 0)
            {
                // b가 더 많이 줬다는 의미이니 b한테 ++
                giftCnt[b.first]++;
            }
            else
            {
                // 둘이 하나도 안주고 받았거나 둘이 똑같이 주고 받은거니 선물점수를 이용
                if (resultScore[a.first] > resultScore[b.first])
                {
                    giftCnt[a.first]++;
                }
                else if (resultScore[a.first] < resultScore[b.first])
                {
                    giftCnt[b.first]++;
                }
            }
        }
    }

    // 선물 갯수 최댓값 구하기
    for (auto cnt : giftCnt)
    {
        if (answer < cnt.second)
        {
            answer = cnt.second;
        }
    }

    return answer;
}
```