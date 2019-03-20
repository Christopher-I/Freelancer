pragma solidity ^0.4.17;

contract SportsBetFactory{

   struct contractSummary{
    uint bid; string typeofSport; string dateTime; string homeAway;
     }

    contractSummary[] public deployedContracts;

    function createContract( uint bid, string typeofSport,string dateTime, string homeAway)public payable{

        address newSupplyContract = new SupplyContract(msg.sender,bid,typeofSport,dateTime,homeAway);

        contractSummary memory newSummary = contractSummary({
        bid:bid,
        typeofSport:typeofSport,
        dateTime : dateTime,
        homeAway: homeAway
        });

        deployedContracts.push(newSummary);
        }

        function getDeployedContractsLength() public view returns(uint){
          return deployedContracts.length;
        }
}

contract SupplyContract {

    struct Bid{
    string contactInfo; address sender; uint bid; bool winner;
     }
     struct Vote{
    bool winnersVote;bool managersVote;
     }

    Vote public nullifyBallot;
    Bid [] public allBids;
    Bid public bidWinner;
    address public manager;
    string private creatorsContactInfo;
    string public briefDescription;
    string public fullDescription;

    uint public timeStamp;
    uint public Bid;
    
    bool public bidClosed =false;
    bool public submitted =false;
    bool public completed =false;
    bool public nullify =false;
    
    mapping(address => bool) public validateBids;//this varaible isused to ensure that same address is not used to make multiple bids in differenct categories
    mapping(address => bool) public widthdrawnBids;//this variable isued to ensure that the same address is not used more than once to make a withdrawal.


    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    modifier restrictedWinner(){
        require(msg.sender == bidWinner.sender);
        _;
    }


    constructor(address sender,uint bid1, string typeofSport1,string dateTime1, string homeAway1

    ) public payable {
        manager = sender;
        typeofSport = typeofSport1;
        dateTime = dateTime1;
        homeAway= homeAway11;
        Bid = Bid1;
        timeStamp = now;
        }

     function bidOnJob(string contactInfo) public payable{
         
        require(nullify == false);
        require(!bidClosed);
        require(msg.sender != manager);
        require(!validateBids[msg.sender]);
        require(minOffer <= msg.value);
        require(msg.value <= Bid && msg.value > 1 wei);
        require(bytes(contactInfo).length > 3);

        Bid memory newBid = Bid({
        contactInfo:contactInfo,
        sender : msg.sender,
        bid : msg.value,
        winner: false
        });

        allBids.push(newBid);
        validateBids[msg.sender] = true;
    }


    function pickBidWinner(uint index) public restricted {
        Bid storage winBid = allBids[index];

        require(!bidWinner.winner);//ensure that a winner has not already been selected
        winBid.winner = true;
        bidWinner =winBid;
        bidClosed = true;
    }

    function getNumberOfBids() public view returns(uint){
        return allBids.length;
    }
    
    function submitJob() public restrictedWinner{
        submitted = true;
    }
    
     function rejectSubmission() public restricted{
        submitted = false;
    }
    
     function mangerVoteToNullifyContract() public restricted{
        nullifyBallot.managersVote = true;
    }
    
     function winnnerVoteToNullifyContract() public restrictedWinner{
        nullifyBallot.winnersVote = true;
    }
    
    function nullifyContractBeforeBidClosed() public restricted {
        require(nullify == false);
        require(bidClosed == false);

        nullify = true;
        bidClosed = true;
    }
    
    function nullifyContractAfterBidClosed() public restricted {
        require(nullify == false);
        require(bidClosed == true);
        require(nullifyBallot.winnersVote == true);
        require(nullifyBallot.managersVote == true);
       
        nullify = true;
        bidClosed = true;
    }
    
    
    function acceptSubmission() public restricted{
        require(submitted == true);
        if (Bid>bidWinner.bid){
            remainder = Bid - bidWinner.bid;
        }
        completed =true;
    }

    function winnerWithdrawFunds() public restrictedWinner{
        completed == true;
        bidWinner.sender.transfer(bidWinner.bid);
        bidWinner.sender.transfer(bidWinner.bid);
        widthdrawnBids[msg.sender]= true;
    }
    
    function managerWithdrawFunds() public restricted{
        require(completed == true);
        require(remainder > 0);
        
        manager.transfer(remainder);
        widthdrawnBids[msg.sender]= true;
    }

    function withdrawBid(uint index) public  {
        Bid storage tempBid = allBids[index];

        require (tempBid.sender != bidWinner.sender);
        require (validateBids[msg.sender]);
        require(!widthdrawnBids[msg.sender]);

        widthdrawnBids[msg.sender]= true;
        msg.sender.transfer(tempBid.bid);
    }
    
    function getSummary() public view returns(
       address,uint,string,string,uint,uint,bool,bool,bool,bool,uint,string
       ){
       return(
        manager,
        timeStamp,
        briefDescription,
        fullDescription,
        Bid,
        minOffer,
        bidClosed,
        submitted,
        completed,
        nullify, 
        remainder,
        creatorsContactInfo

         );
     }
}
