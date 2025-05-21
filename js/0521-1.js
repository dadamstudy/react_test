function Mall () {
      return <p>코엑스몰점</p>
    };
    function Saturday({shop}) {
      return (
        <h3>친구들과 {shop} <Mall />에서 쇼핑도 하고 식사도 하며 즐거운 시간을 보냈습니다.</h3>
      );
    }

const myApp = ReactDOM.createRoot(document.getElementById('root'));
myApp.render(<Saturday shop="스타필드"/>);