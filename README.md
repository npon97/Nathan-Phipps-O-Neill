# Nathan Phipps O'Neill - Personal Resume Site

## Run locally

### Install system dependencies

```bash
sudo apt update
sudo apt upgrade
sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline6-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
```

Follow the instructions from [here](https://jekyllrb.com/docs/installation/) with the
 exception of Ruby.

```bash
ruby -v
gem -v
g++ -v
gcc -v
make -v
git -v 
curl -v
```

If your version of Ruby is < 3.0.0 then you need to upgrade. Otherwise you may encounter
 errors. If one of the version commands above does not return a version, your installation
 process probably went wrong. Otherwise you're good!

### Upgrade Ruby

*ONLY DO THIS IF YOUR `ruby -v` command returns an invalid version of Ruby. You will be*
 *able to tell if this is the case because one of the `gem install <package>` will fail*
 *and complain about a bad Ruby version.*

First, grab the Ruby environment package:

```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL
```

Now install Ruby:

```bash
rbenv install 3.0.0
rbenv global 3.0.0
```

### Install the Jekyll server and the bundler dependency manager

Make sure that you have a `Gemfile` in the root of your directory.

```bash
gem install jekyll bundle --verbose
```

Again, if you meet any errors that mention Ruby versions, be sure to upgrade to the correct Ruby version.

### Initialize the Ruby project and start the server

```bash
bundle init
bundle exec jekyll serve
```