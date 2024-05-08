// Define NFID authentication logic here
use ic_cdk::api::wallet;

fn authentication_with_wallet() {
  let wallet = wallet::get_wallet();
}

authentication_with_wallet();
