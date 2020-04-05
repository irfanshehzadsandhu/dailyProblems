namespace :safe_browsing_api do
  desc 'safe browsing api'
  task :test => :environment do
    key = "AIzaSyAA4x7dwpekzlX4F3Bz7d9uCbu4DHaLCwU"
    url = "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=#{key}"
  
    response = HTTParty.post(url, 
      :body => {
        :client=>{
          :clientId=>"yourcompanyname",
          :clientVersion=>"1.5.2"
        },
        :threatInfo=> {
          :threatTypes=>["MALWARE", "SOCIAL_ENGINEERING"],
          :threatEntryTypes=>["URL"],
          :threatEntries=>[
            {:url=>"http://www.urltocheck.org/"},
            {:url=> "http://www.urltocheck2.org/"},
            {:url=>"http://www.urltocheck3.com/"}
          ]
        }
      }.to_json,
      :headers => { 'Content-Type' => 'application/json' } )
    puts '**********************' , response.inspect
    #binding.pry
  end
end