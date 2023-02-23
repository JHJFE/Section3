export const initialState =
{
  "items": [
    {
      "id": 1,
      "name": "노른자 분리기",
      "img": "../images/egg.png",
      "price": 9900
    },
    {
      "id": 2,
      "name": "2020년 달력",
      "img": "../images/2020.jpg",
      "price": 12000
    },
    {
      "id": 3,
      "name": "개구리 안대",
      "img": "../images/frog.jpg",
      "price": 2900
    },
    {
      "id": 4,
      "name": "뜯어온 보도블럭",
      "img": "../images/block.jpg",
      "price": 4900
    },
    {
      "id": 5,
      "name": "칼라 립스틱",
      "img": "../images/lip.jpg",
      "price": 2900
    },
    {
      "id": 6,
      "name": "잉어 슈즈",
      "img": "../images/fish.jpg",
      "price": 3900
    },
    {
      "id": 7,
      "name": "웰컴 매트",
      "img": "../images/welcome.jpg",
      "price": 6900
    },
    {
      "id": 8,
      "name": "강시 모자",
      "img": "../images/hat.jpg",
      "price": 9900
    }
  ],
  "cartItems": [ // 장바구니에 담긴 아이템들
    {
      "itemId": 1, // 제품 아이디
      "quantity": 1 // 수량 한개씩 늘리고 조회해서 총 장바구네에 담긴 수량을 나타낼 것으로 추정
    },
    {
      "itemId": 5,
      "quantity": 7
    },
    {
      "itemId": 2,
      "quantity": 3
    }
  ]
}
