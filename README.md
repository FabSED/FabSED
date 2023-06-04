# FabSED
Secure Exchange of Data over Fabric Network.

Follow the steps to bring the network up:
0- export PATH=/path/to/bin:$PATH

1- Create the cryptographic materials for the project we'll use cryptogen in our case
  using command: 
```bash
cd cryptogen
cryptogen generate --config=./crypto-config-orderer.yaml --output=../organizations
cryptogen generate --config=./crypto-config-org1.yaml --output=../organizations
cryptogen generate --config=./crypto-config-org2.yaml --output=../organizations
cd ../
```
  
2- Create the genesis block using configtx tool:
```bash
configtxgen -profile TwoOrgsApplicationGenesis  -outputBlock ./channel-artifacts/genesis.block -channelID mychannel 
```
3- Type in the command cli now after steps 1, 2 :
```bash
source ./envVar.sh
```
4- Bring the containers UP using 
```bash
docker-compose -f compose/compose-sedob-gov.yaml -f compose/docker/docker-compose-sedob-gov.yaml up -d 2>&1   
```
5- Now let's create the application channel first let's check that we don't have any channels by typing :
```bash
osnadmin channel list -o orderer.sedob.gov:7053 --ca-file $ORDERER_ROOT_CERT  --client-cert $ORDERER_TLS_SIGN_CERT --client-key $ORDERER_TLS_PRIVATE_KEY # it should give systemchannels : null, applicationCahnnels: null

# this commmand created the channel called mychannel in our case- it could be any name-:
osnadmin channel join -c $CHANNEL_NAME --config-block $BLOCKFILE -o orderer.sedob.gov:7053 --ca-file $ORDERER_ROOT_CERT  --client-cert $ORDERER_TLS_SIGN_CERT --client-key $ORDERER_TLS_PRIVATE_KEY
```

6- Now if you want to invoke the chaincode on this channel follow the exact steps in the hyperledger fabric docs in how to deploy the chaincode 
: https://hyperledger-fabric.readthedocs.io/en/release-2.5/deploy_chaincode.html

7- And that's it Thanks for reading :)
