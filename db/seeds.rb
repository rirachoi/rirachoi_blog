Week.destroy_all
Day.destroy_all
Homework.destroy_all
Project.destroy_all

w1 = Week.create(:name => 'Week1', :study => ['Commandline','Ruby','Debugging','Git'])
w2 = Week.create(:name => 'Week2', :study => ['HTML','CSS','Sinatra','API'])
w3 = Week.create(:name => 'Week3', :study => ['Sinatra with SQL', 'Active Record'])
w4 = Week.create(:name => 'Week4', :study => ['Ruby on Rails', 'Deployment'])
w5 = Week.create(:name => 'Week5', :study => ['First Project'])
w6 = Week.create(:name => 'Week6', :study => ['Javascript'])
w7 = Week.create(:name => 'Week7', :study => ['jQuery'])
w8 = Week.create(:name => 'Week8', :study => ['Second Project'])
w9 = Week.create(:name => 'Week9', :study => ['Backbone', 'Test.rb'])
w10 = Week.create(:name => 'Week10', :study => [])
w11 = Week.create(:name => 'Week11', :study => [])
w12 = Week.create(:name => 'Week12', :study => ['Last Project'])


p1 = Project.create(
  title: 'Happytails',
  date: 'Week1 Day5',
  program: 'Ruby',
  image: "assets/image/mta/main.png",
  image_description: [
      "assets/image/mta/main.png",
      "assets/image/mta/result.png",
      "assets/image/mta/result_with_map.png",
      "assets/image/mta/map.gif"
    ]
  )

p2 = Project.create(
  title: 'Trip Planer',
  date: 'Week2 Day4',
  program: 'Ruby with Sinatra',
  image: "assets/image/mta/main.png",
  image_description: [
      "assets/image/mta/main.png",
      "assets/image/mta/result.png",
      "assets/image/mta/result_with_map.png",
      "assets/image/mta/map.gif"
    ]
  )
p3 = Project.create(
  title: 'Butterflies in AUS',
  date: 'Week3 Day2',
  program: 'Sinatra with SQL',
  image: "assets/image/butterflies/main.png",
  image_description: [
      "assets/image/butterflies/main.png",
      "assets/image/butterflies/display.png",
      "assets/image/butterflies/butterfly.png",
      "assets/image/butterflies/display_state.png"
    ]
  )

p4 = Project.create(
  title: 'ALLS Watch',
  date: 'Week3 Day3',
  program: 'Sinatra with SQL and Active Record',
  image: "assets/image/alls_watch/main.png",
  image_description: [
    "assets/image/alls_watch/main_with_hover.png",
    "assets/image/alls_watch/list.png",
    "assets/image/alls_watch/category.png",
    "assets/image/alls_watch/category_list.png"
    ]
  )

p5 = Project.create(
  title: 'MS Finder',
  date: 'Week4 Day1',
  program: 'Ruby On Rails with API',
  image: "assets/image/ms_finder/main.png",
  image_description: [
      "assets/image/ms_finder/movie_search.png",
      "assets/image/ms_finder/quick_result.png",
      "assets/image/ms_finder/quick_result_with_plot.png",
      "assets/image/ms_finder/movie_list.png",
      "assets/image/ms_finder/movie_list_result.png",
      "assets/image/ms_finder/stock_search.png",
      "assets/image/ms_finder/stock_result.png"
    ]
  )

p6 = Project.create(
  title: 'SOLUHO Calendar',
  date: 'Week5',
  program: 'Ruby on Rails with Enrico Public Holiday API, SQL and Lunar Calendar csv file',
  image: "assets/image/book_keeper/main.png",
  image_description: [
    "assets/image/book_keeper/books.png",
    "assets/image/book_keeper/book_info.png",
    "assets/image/book_keeper/book_info2.png",
    "assets/image/book_keeper/authors.png",
    "assets/image/book_keeper/author_info.png",
    "assets/image/book_keeper/author_info_with_hover.png"
    ]
  )

p7 = Project.create(
  title: 'Fire Ball-Game Part',
  date: 'Week8',
  program: 'Javascript, jQuery with Google translate API and Ajax',
  image: "assets/image/fireball/game_main.png",
  image_description: [
      "assets/image/fireball/game_lang.png",
      "assets/image/fireball/game_play.png",
      "assets/image/fireball/game_play2.png",
      "assets/image/fireball/game_finish1.png",
      "assets/image/fireball/game_finish2.png",
      "assets/image/fireball/game_finish4.png",
      "assets/image/fireball/chat.png",
      "assets/image/fireball/chat_lang.png",
      "assets/image/fireball/edit.png",
      "assets/image/fireball/index.png"
    ]
  )

w1.projects << p1
w2.projects << p2
w3.projects << p3 << p4
w4.projects << p5
w5.projects << p6
w8.projects << p7
