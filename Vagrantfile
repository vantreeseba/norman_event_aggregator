VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config| 
  config.vm.define "web" do |web|
    #box config
    web.vm.box = "precise32"
    web.vm.box_url = "http://files.vagrantup.com/precise32.box"

    #network config
    web.vm.hostname = "web"
    web.vm.network "private_network", ip: "10.0.0.10"
    web.vm.network "private_network", ip: "10.10.0.10", virtualbox__intnet: "web_worker_net"

    #provisioning
    web.vm.provision :shell, :path => "bootstrap/web-bootstrap.sh"
  end

  config.vm.define "db1" do |db1|
    #box config
    db1.vm.box = "precise32"
    db1.vm.box_url = "http://files.vagrantup.com/precise32.box"

    #network config
    db1.vm.hostname = "db1"
    db1.vm.network "private_network", ip: "10.0.0.20"
    db1.vm.network "private_network", ip: "10.10.0.20", virtualbox__intnet: "web_worker_net"

    #provisioning
    db1.vm.provision :shell, :path => "bootstrap/db-bootstrap.sh"
  end

  config.vm.define "mq1" do |mq1|
    #box config
    mq1.vm.box = "precise32"
    mq1.vm.box_url = "http://files.vagrantup.com/precise32.box"

    #network config
    mq1.vm.hostname = "mq1"
    mq1.vm.network "private_network", ip: "10.0.0.30"
    mq1.vm.network "private_network", ip: "10.10.0.30", virtualbox__intnet: "web_worker_net"

    #provisioning
    mq1.vm.provision :shell, :path => "bootstrap/mq-bootstrap.sh"
  end
end
