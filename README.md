# friends-mvp

App name tentative.

### Usage

```
git clone https://github.com/hrla29-just-friends-mvp/friends-mvp.git
cd friends-mvp

git checkout -b your_github_handle
yarn install
yarn run db:generate
```

#### To run the app in Expo:
```
yarn start
```

#### In case you need to reset database
```
yarn run db:regenerate
```

#### To update to current develop commit:
```
git checkout develop
git pull origin develop
git checkout your_github_handle
git rebase develop
git pull origin your_github_handle
```
The last line of code will update/fix the HEAD of your_github_handle

Please message in Slack if pull request is made. tyty.