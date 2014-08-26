Week.destroy_all
Day.destroy_all
Homework.destroy_all
Project.destroy_all

w1 = Week.create(:name => 'Week 1', :study => ['Command line','Ruby','Debugging','Git'])
w2 = Week.create(:name => 'Week 2', :study => ['HTML','CSS','Sinatra','APIs'])
w3 = Week.create(:name => 'Week 3', :study => ['Sinatra MVC' 'SQL', '','ActiveRecord','SQLite'])
w4 = Week.create(:name => 'Week 4', :study => ['Rails MVC', 'Deployment', 'Postgres', 'Associations'])
w5 = Week.create(:name => 'Week 5', :study => ['First Project'])
w6 = Week.create(:name => 'Week 6', :study => ['Computation','Javascript', 'DOM API', 'JSON'])
w7 = Week.create(:name => 'Week 7', :study => ['Javascript Framework','Underscore','jQuery', 'Geocoder'])
w8 = Week.create(:name => 'Week 8', :study => ['Second Project (Group)'])
w9 = Week.create(:name => 'Week 9', :study => ['Backbone', 'TDD', 'Minitest'])
w10 = Week.create(:name => 'Week 10', :study => ['Coffee Script','SCSS','Factory Girl','Rspec','Cucumber','Simplecov','Regular Experession'])
w11 = Week.create(:name => 'Week 11', :study => ['Computer Science'])
w12 = Week.create(:name => 'Week 12', :study => ['Last Project'])


p1 = Project.create(
  title: 'Happytails',
  date: 'Week 1 Day 5',
  program: 'Ruby',
  main_image: "/assets/image/mta/main.png",
  images: [
      "/assets/image/mta/main.png",
      "/assets/image/mta/result.png",
      "/assets/image/mta/result_with_map.png",
      "/assets/image/mta/map.gif"
    ],
  image_description: [
      "/assets/image_hover/mta/main.png",
      "/assets/image_hover/mta/result.png",
      "/assets/image_hover/mta/result_with_map.png",
      "/assets/image_hover/mta/map.gif"
    ]
  )

p2 = Project.create(
  title: 'Trip Planner',
  date: 'Week 2 Day 4',
  program: 'Ruby with Sinatra',
  main_image: "/assets/image/mta/main.png",
  images: [
      "/assets/image/mta/main.png",
      "/assets/image/mta/result.png",
      "/assets/image/mta/result_with_map.png",
      "/assets/image/mta/map.gif"
    ],
  image_description: [
      "/assets/image_hover/mta/main.png",
      "/assets/image_hover/mta/result.png",
      "/assets/image_hover/mta/result_with_map.png",
      "/assets/image_hover/mta/map.gif"
    ]
  )
p3 = Project.create(
  title: 'Butterflies in AUS',
  date: 'Week 3 Day 2',
  program: 'Sinatra with SQL',
  main_image: "/assets/image/butterflies/main.png",
  images: [
      "/assets/image/butterflies/main.png",
      "/assets/image/butterflies/display.png",
      "/assets/image/butterflies/butterfly.png",
      "/assets/image/butterflies/display_state.png"
    ],
  image_description: [
      "/assets/image_hover/butterflies/main.png",
      "/assets/image_hover/butterflies/display.png",
      "/assets/image_hover/butterflies/butterfly.png",
      "/assets/image_hover/butterflies/display_state.png"
    ]
  )

p4 = Project.create(
  title: 'ALLS Watch',
  date: 'Week 3 Day 3',
  program: 'Sinatra with SQL and Active Record',
  main_image: "/assets/image/alls_watch/main.png",
  images: [
    "/assets/image/alls_watch/main_with_hover.png",
    "/assets/image/alls_watch/list.png",
    "/assets/image/alls_watch/category.png",
    "/assets/image/alls_watch/category_list.png"
    ],
  image_description: [
    "/assets/image_hover/alls_watch/main_with_hover.png",
    "/assets/image_hover/alls_watch/list.png",
    "/assets/image_hover/alls_watch/category.png",
    "/assets/image_hover/alls_watch/category_list.png"
    ]
  )

p5 = Project.create(
  title: 'MS Finder',
  date: 'Week 4 Day 1',
  program: 'Ruby On Rails with API',
  main_image: "/assets/image/ms_finder/main.png",
  images: [
      "/assets/image/ms_finder/main.png",
      "/assets/image/ms_finder/movie_search.png",
      "/assets/image/ms_finder/quick_result.png",
      "/assets/image/ms_finder/quick_result_with_plot.png",
      "/assets/image/ms_finder/movie_list.png",
      "/assets/image/ms_finder/movie_list_result.png",
      "/assets/image/ms_finder/stock_search.png",
      "/assets/image/ms_finder/stock_result.png"
    ],
  image_description: [
      "/assets/image_hover/ms_finder/movie_search.png",
      "/assets/image_hover/ms_finder/quick_result.png",
      "/assets/image_hover/ms_finder/quick_result_with_plot.png",
      "/assets/image_hover/ms_finder/movie_list.png",
      "/assets/image_hover/ms_finder/movie_list_result.png",
      "/assets/image_hover/ms_finder/stock_search.png",
      "/assets/image_hover/ms_finder/stock_result.png"
    ]
  )

p6 = Project.create(
  title: 'Book Keeper',
  date: 'Week 4 day 3',
  program: 'Ruby On Rails with Database and Deployment',
  main_image: "/assets/image/book_keeper/main.png",
  images: [
    "/assets/image/book_keeper/books.png",
    "/assets/image/book_keeper/book_info.png",
    "/assets/image/book_keeper/book_info2.png",
    "/assets/image/book_keeper/authors.png",
    "/assets/image/book_keeper/author_info.png",
    "/assets/image/book_keeper/author_info_with_hover.png"
    ],
  image_description: [
    #"/assets/image_hover/book_keeper/main.png",
    "/assets/image_hover/book_keeper/books.png",
    "/assets/image_hover/book_keeper/book_info.png",
    "/assets/image_hover/book_keeper/book_info2.png",
    "/assets/image_hover/book_keeper/authors.png",
    "/assets/image_hover/book_keeper/author_info.png",
    "/assets/image_hover/book_keeper/author_info_with_hover.png"
    ]
  )



p7 = Project.create(
  title: 'SOLUHO Calendar',
  date: 'Week 5',
  program: 'Ruby on Rails with Postgres, Enrico Public Holiday API, Lunar Calendar CSV file',
  main_image: "/assets/image/soluho_calendar/main.png",
  images: [
    "/assets/image/soluho_calendar/user_calendar.png",
    "/assets/image/soluho_calendar/user_event_list.png",
    "/assets/image/soluho_calendar/user_details.png",
    "/assets/image/soluho_calendar/event_category.png",
    "/assets/image/soluho_calendar/int_public_holiday.png",
    "/assets/image/soluho_calendar/int_public_holiday_list.png"
    ],
  image_description: [
    "/assets/image_hover/soluho_calendar/main.png",
    "/assets/image_hover/soluho_calendar/user_calendar.png",
    "/assets/image_hover/soluho_calendar/user_event_list.png",
    "/assets/image_hover/soluho_calendar/user_details.png",
    "/assets/image_hover/soluho_calendar/event_category.png",
    "/assets/image_hover/soluho_calendar/int_public_holiday.png",
    "/assets/image_hover/soluho_calendar/int_public_holiday_list.png"
    ]
  )


p8 = Project.create(
  title: 'FireBall - Game Part',
  date: 'Week 8',
  program: 'Javascript, jQuery with Google translate API and Ajax',
  main_image: "/assets/image/fireball/game_main.png",
  images: [
      "/assets/image/fireball/game_lang.png",
      "/assets/image/fireball/game_play.png",
      "/assets/image/fireball/game_play2.png",
      "/assets/image/fireball/game_finish1.png",
      "/assets/image/fireball/game_finish2.png",
      "/assets/image/fireball/game_finish4.png",
      "/assets/image/fireball/chat.png",
      "/assets/image/fireball/chat_lang.png",
      "/assets/image/fireball/edit.png",
      "/assets/image/fireball/index.png"
    ],
  image_description: [
      "/assets/image_hover/fireball/game_main.png",
      "/assets/image_hover/fireball/game_lang.png",
      "/assets/image_hover/fireball/game_play.png",
      "/assets/image_hover/fireball/game_play2.png",
      "/assets/image_hover/fireball/game_finish1.png",
      "/assets/image_hover/fireball/game_finish2.png",
      "/assets/image_hover/fireball/game_finish4.png",
      "/assets/image_hover/fireball/chat.png",
      "/assets/image_hover/fireball/chat_lang.png",
      "/assets/image_hover/fireball/edit.png",
      "/assets/image_hover/fireball/index.png"
    ]
  )

w1.projects << p1
w2.projects << p2
w3.projects << p3 << p4
w4.projects << p5 << p6
w5.projects << p7
w8.projects << p8
