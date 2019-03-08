const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=5&playlistId=UUTI5S0PqpgB0DbYgcgRU6QQ&key=AIzaSyCx75gK9xHzgfnvP0X1KGSR3N0C1qlNAxk";

const vm = new Vue({
        el: '#customAPP',
        data: {
          results: [],
		  staticContent:'https://www.youtube.com/watch?v=',
		  staticChannelLink:'https://www.youtube.com/channel/'
        },
		
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data.items
          })
        }
      });
	  