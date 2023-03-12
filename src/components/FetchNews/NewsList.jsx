import { Component } from 'react';
import Lodding from '../Loding/Loding';
import { toast } from 'react-toastify';
const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = '062bf34c983c4314afff4d4a61abca42';
class NewsList extends Component {
  state = {
    news: [],
    page: 1,
    lodding: false,
    error: '',
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  // loadMore = () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   fetch(
  //     `${BASE_URL}everything?q=${this.props.newsSearchValue}&page=${this.state.page}&pageSize=20`,
  //     {
  //       headers: {
  //         'X-Api-Key': API_KEY,
  //       },
  //     }
  //   )
  //     .then(resp => resp.json())
  //     .then(newData => {
  //       if (newData.status !== 'ok') {
  //         return Promise.reject(new Error('try again late'));
  //       }
  //       console.log(newData);
  //       this.setState({
  //         news: [...this.state.news, ...newData.articles],
  //       });
  //     })
  //     // не ловить помилки так якщо на  на помилку приходить не reject а  валідний обєкт
  //     // тому треба самим визивати Promise.reject(new Error('try again late')) шоб вона попала в catch

  //     .catch(error => this.setState({ error }))
  //     .finally(() =>
  //       this.setState({
  //         lodding: false,
  //       })
  //     );
  // };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.newsSearchValue !== this.props.newsSearchValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        lodding: true,
      });
      fetch(
        `${BASE_URL}everything?q=${this.props.newsSearchValue}&page=${this.state.page}&pageSize=20`,
        {
          headers: {
            'X-Api-Key': API_KEY,
          },
        }
      )
        .then(resp => resp.json())
        .then(data => {
          if (data.status !== 'ok') {
            return Promise.reject(new Error('try again late'));
          }
          console.log(data.articles);
          console.log(...this.state.news);

          this.setState({
            news: [...this.state.news, ...data.articles],
          });
        })
        // не ловить помилки так якщо на  на помилку приходить не reject а  валідний обєкт
        // тому треба самим визивати Promise.reject(new Error('try again late')) шоб вона попала в catch

        .catch(error => this.setState({ error }))
        .finally(() =>
          this.setState({
            lodding: false,
          })
        );
    }
  }

  render() {
    return (
      <div>
        {this.state.lodding && <Lodding />}
        {this.state.error && <p>{` we  are sorry ${this.state.error}`} </p>}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          {this.state.news &&
            this.state.news.map(({ author, title, url, urlToImage }) => {
              return (
                <li
                  key={url}
                  style={{
                    width: 300,
                    border: '1px solid black',
                  }}
                >
                  <div>
                    <img src={urlToImage} alt={title} width="200" />
                    <p> {author}</p>
                    <p>{title}</p>
                    <a href={url}> read more</a>
                  </div>
                </li>
              );
            })}
        </ul>
        {this.state.news && (
          <button
            onClick={this.loadMore}
            style={{
              width: 200,
              height: 50,
              background: 'purple ',
              color: 'white',
              borderRadius: 10,
              fontSize: 18,
            }}
          >
            Load More
          </button>
        )}
      </div>
    );
  }
}
export default NewsList;
//  author: "A.A. Newton",
//             title: "Four Reasons Your Cat Keeps Peeing Outside Their Litter Box",
//             description: "When your cat starts peeing outside the box, your first instinct might be to call the vet: Could it be a UTI? Kidney stones? Diabetes? Cancer? While it’s true that pee problems can be a sign of any of these health issues, in many cases, cats are simply lodgin…",
//             url: "https://lifehacker.com/four-reasons-your-cat-keeps-peeing-outside-their-litter-1850125397",
