# FabSED
Secure Exchange of Data over Fabric Network.

First of all :
1- Export all the fabric binary files (e.g: configtxgen cryptogen ) using command: `export PATH=/path/to/bin:$PATH`

2- Create the cryptographic materials for the project we'll use cryptogen in our case
  using command: 
```bash
cryptogen generate --config=./crypto-config.yaml
```
  
3- Create the channel artifacts now using these two commands:
```bash
configtxgen -profile OrdererGenesis  -outputBlock ./channel-artifacts/genesis.block -channelID mychannel -asOrg Org1MSP -asOrg Org2MSP   // this will create the genesis block 
configtxgen -profile Test -channelID mychannel  -outputCreateChannelTx ./channel-artifacts/mychannel.tx // this will create the channel transaction file.
```

4- Bring the containers UP using 
```bash
docker-compose up -d // -d in detached mode
```
5- Enjoy !!!
