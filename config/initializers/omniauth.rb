# OmniAuth.config.logger = Rails.logger
# OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE #solves SSL error on windows
# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :google_oauth2, Rails.application.credentials.email[:client_id], Rails.application.credentials.email[:client_secret], {
#       :scope => 'email,profile'
#   }
# end

# gmail = Gmail.connect(:xoauth, "crm.study.project@gmail.com", 
#   :token           => Rails.application.credentials.email[:client_id],
#   :secret          => Rails.application.credentials.email[:client_secret],
#   :consumer_key    => Rails.application.credentials.email[:client_id],
#   :consumer_secret => Rails.application.credentials.email[:client_secret]
# )