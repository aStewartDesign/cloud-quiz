What is an AWS region?
- a physical location in the world that consists of two or more availability zones

What is an AWS availability zone or AZ?
- one or more discrete data centers

What is an AWS edge location?
- endpoints which are used for caching content

What is IAM?
- Identity Access Management allows you to control permissions and users within AWS

What do IAM Users represent?
- End users such as people, or employees

What are IAM Groups?
- A collection of users. Each user in the group will inherit the permissions of the group

What are IAM Policies?
- Documents that describe permissions

What are IAM Roles?
- Create and assign roles to AWS resources so they can communicate with each other

Is IAM Universal?
- true

What is the "root account"?
- Account created when AWS was first set up.

How many permissions do new users have?
- None

What keys are created with a new user?
- Access key and Secret Access key

What are the access and secret access key used for?
- Programmatic access

Can you re-view a secret access key after it is first generated?
- No

IAM consists of which four key parts?
- Users, groups, roles, and policies

What is S3?
- Simple, scaleable object-based storage

How large can a file be in S3?
- 0 to 5 TB

There is unlimited storage in an S3 bucket
- true

What is the http response code of a successful S3 upload?
- 200

What is the minimum size of a file in S3?
- 0 bytes

S3 buckets are a universal name space
- true

What kinds of encryption are offered in S3?
- Server side encryption with S3 managed keys, server side with KMS, server side customer provided keys, client side encryption

How can you control access to S3 buckets?
- Bucket ACL or bucket policies

Are new S3 buckets private or public by default?
- private

Are new objects in an S3 bucket private or public by default?
- private

In S3 you have a public file in a bucket with versioning turned on. You upload a new version of the file. Is that file public or private?
- private

S3 versioning allows you to have MFA delete capability for added security.
- true

S3 will replicate delete markers from a source bucket to a destination bucket.
- false

S3 will replicate deleting individual versions of a file from a source bucket to a destination bucket.
- false

In S3, what must be enabled in both the source and destination bucket for cross-region replication to work?
- Versioning

In S3 cross-region replication existing files in the source bucket are not replicated automatically. Only subsequent updates will be replicated automatically.
- true

S3 lifecycle management only works with versioning enabled.
- false

S3 lifecycle management enables what three actions?
- Transition objects to infrequently accessed, archive objects to glacier, permanently delete objects

What are the two kinds of CloudFront distributions?
- Web distribution and RTMP (for media streaming)

What are CloudFront edge locations?
- Where content is cached.

An edge location is an availability zone.
- false

CloudFront origins can come from what four sources?
- S3 bucket, EC2 instance, elastic load balancer, or Route 53

What is a CloudFront distribution?
- The name given to the CDN which consists of a collection of edge locations.

Edge locations are read only.
- false

What specifies how long objects are cached in a CloudFront edge location?
- TTL (Time to live)

You are not charged to clear the CloudFront cache.
- false

S3 uses what kind of encryption in transit?
- SSL/TLS

S3 uses what three kinds of server-side encryption?
- S3 Managed keys (SSE-S3), AWS Key Management Service (SSE-KMS), Customer Provided Keys (SSE-C)

How can you control access to an S3 bucket?
- Bucket policies and access control lists

S3 buckets can be configured to create access logs which log all requests made to the bucket.
- true

What is AWS Storage Gateway?
- Software appliance in a private data center that securely connects that data center to AWS

What are the three main types of storage gateways?
- File Gateway (NFS), Volumes Gateway (iSCSI), tape gateway

File gateways (NFS) in AWS Storage Gateway is what kind of storage?
- Object storage (S3)

Volume gateways (iSCSI) in AWS Storage Gateway is what kind of storage?
- Block storage

Volume gateways (iSCSI) in AWS Storage Gateway has what two types?
- Stored volumes, cached volumes

Volume gateways, stored volumes only store parts of the data at a time.
- false

Volume gateways, cached volumes only store the most recently read data within the private data center, the rest of the data is stored in AWS.
- true

Tape gateways allow you to interface with old backup softwares and allow you to create virtual tapes.
- true

What is AWS Snowball?
- Petabyte data transfer that allows you to import and export large amounts of data from S3

What is the S3 static website address format?
- bucket name, s3-website, region, amazonaws.com

You can host websites that require database connections on S3.
- false

Overwrites in S3 are immediately available.
- false

What are the four S3 storage tiers?
- Standard, Infrequently Accessed (IA), One Zone IA, Glacier

What are the four general EC2 options?
- On demand, reserved, spot, dedicated hosts

Which EC2 instance option allows you to pay a fixed rate by the hour or second with no commitment?
- On demand

Which EC2 instance option is good for users who don't want to make up-front payments or have long-term commitments?
- On demand

Which EC2 instance option is good for applications with spiky or unpredictable workloads?
- On demand

Which EC2 instance option is good for applications in development or test?
- On demand

Which EC2 instance offers a significant discount on the hourly charge provided you sign a one to three year contract?
- Reserved instance

Which EC2 instance option is good for applications with steady state or predictable usage?
- Reserved instance

Which EC2 instance option is good for applications that require reserved capacity?
- Reserved instance

Which EC2 instance option is good when users can make up-front payments?
- Reserved instance

Which EC2 instance allows you to bid whatever price you want for instance capacity?
- Spot instance

Which EC2 instance option is good for applications that have flexible start and end times?
- Spot instance

Which EC2 instance option is good for applications that are only feasible at very low compute prices?
- Spot instance

Which EC2 instance option is good for users with an urgent need for large amounts of additional computing capacity?
- Spot instance

Which EC2 instance provides a physical server only for your use?
- Dedicated hosts

Which EC2 instance option is good for meeting regulatory requirements that might not support multi-tenant virtualization?
- Dedicated hosts

Which EC2 instance option is good for licensing that does not support multi-tenancy or cloud deployments?
- Dedicated hosts

EC2 dedicated hosts can be purchased on demand.
- true

Which service allows you to create storage volumes and attach them to EC2 instances?
- Amazon Elastic Block Storage (EBS)

If Amazon terminates your spot instance part way through a paid hour, you will be charged the remainder of the hour.
- false

If you terminate your spot instance part way through a paid hour, you will be charged the remainder of the hour.
- true

Which EBS storage system balances price and performance for a wide variety of workloads?
- General purpose SSD

Which EBS storage system is the highest performance?
- Provisioned IOPS SSD

Which EBS storage system is low cost and designed for frequent accessed, throughput-intensive workloads?
- Throughput Optimized HDD

Which EBS storage system is low cost and designed for less frequently access work loads?
- Cold HDD

Which EBS storage system is a previous generation boot volume?
- Magnetic

When creating an EC2 instance, termination protection is turned off by default.
- true

On an EBS-backed EC2 instance, the default action is for the root EBS volume to be deleted when the instance is terminated.
- true

EBS root volumes of default AMI's cannot be encrypted but additional volumes can be.
- true

How long does it take for changes to an EC2 security group to take effect?
- immediately

EC2 security groups are stateful meaning any inbound rules also automatically create an outbound rule for that rule.
- true

EC2 security groups allow all inbound traffic by default.
- false

EC2 security groups allow all outbound traffic by default.
- true

An EC2 instance can only be assigned to one security group.
- false

You can have any number of EC2 instances within a security group.
- true

What do you use to block specific IP addresses from an EC2 instance?
- Network access control list

Security groups can specify allow rules but not deny rules.
- true

You can attach an EBS volume in one availability zone to an EC2 instance in a different availability zone.
- false

What do you have to do in order to transfer an EBS volume from one availability zone to another?
- take a snapshot of the EBS volume

EBS snapshots are stored on S3.
- true

EBS snapshots are point in time copies of volumes.
- true

Snapshots are incremental; only changes since the last snapshot are saved in a snapshot.
- true

EBS volume sizes cannot be change on the fly.
- true

Encrypted EBS snapshots can be shared.
- false

EBS volumes restored from encrypted snapshots are encrypted automatically.
- true

EBS Snapshots of encrypted volumes are encrypted automatically.
- true

EBS snapshots can't be made public or sold.
- false

Instance store volumes, or ephemeral storage, cannot be stopped.
- true

What happens if the underlying host of an instance store volume fails?
- You will lose your data

Which can be stopped, instance store volume backed instances or EBS backed instances?
- EBS backed instances

If an EBS backed EC2 instance is stopped, will you lose your data?
- no

By default, both instance store root volumes and EBS root volumes will be deleted on termination.
- true

What are the three types of load balancers?
- Application load balancers, network load balancers, classic load balancers

If a load balancer responds with a 504 error, what does this mean?
- Gateway has timed out and the application is not responding.

How do you troubleshoot a load balancer that responds with a 504 error?
- Check the web server or database server

From a server behind an elastic load balancer, which header has the IPv4 address of the client?
- X-Forwarded-For header

Load balancers are identified by which address?
- DNS name

How do load balancers determine the status of instances?
- Health checks

CloudWatch standard monitoring logs how often?
- every 5 minutes

CloudWatch detailed monitoring logs how often?
- every 1 minute

What things can you do with CloudWatch?
- Dashboards, alarms, events, and logs

CloudWatch is for monitoring and CloudTrail is for auditing.
- true

You can attach an IAM role to an EC2 instance that is already created and running.
- true

What is the EC2 instance meta data url?
- http://169.254.169.254/latest/meta-data/

What are the two kinds of EC2 placement groups?
- Clustered placement groups, spread placement groups

A clustered placement group can span availability zones
- false

A spread placement group can span availability zones
- true

An EC2 placement group name must be unique within what?
- your aws account

You can make any type of EC2 instance part of a placement group
- false

You can merge placement groups
- false

You can connect multiple EC2 instances to Elastic File System
- true

Which service gives you scalable block storage?
- Elastic file system (EFS)

Lambda scales up, not out, automatically
- false

Lambda functions are independent, one function equals one event
- true

Which services are serverless?
- Lambda, S3, API gateway, Dynamo DB, EFS, SNS, SQS, Aurora Serverless

AWS X-Ray helps you debug what other service?
- Lambda

What needs to be enabled if you're having trouble accessing an API on another domain?
- CORS

What helps you remember the EC2 instance types?
- FIGHT DR MC PX

You can mount an EBS volume to multiple EC2 instances.
- false

You can use 3rd party tools to encrypt your EBS volume.
- true

Instance store volumes are also known as what?
- Ephemeral storage

You can launch an AMI stored in a different region.
- false

What security method do you want to used to give EC2 instances permissions to access other AWS services?
- Roles

AWS roles are region-specific.
- false

A reserved instance can be moved from one region to another.
- false

The use of a placement group is ideal for what situation?
- When you need high network throughput and low latency.

You can delete a snapshot of an EBS volume that is used as the root device of a registered AMI.
- false

What is the underlying hypervisor for EC2?
- Nitro and Xen

Which port does DNS operate on?
- 53

Which DNS record translates the name of a domain to an IP address?
- A record

What is the name for the length of time a DNS record is cached in the resolving server or in the client?
- Time to live (TTL)

Which DNS record resolves from one address to another?
- Canonical Name (CName)

Which DNS record allows you to map a domain name to aws resources?
- Alias records

You can use a CName for naked domains (eg: mywebsite.com).
- false

You can use an Alias record for naked domains (eg: mywebsite.com).
- true

Elastic Load Balancers must be resolved using a DNS name.
- true

Which DNS record is only defined once per DNS hosted zone?
- Start of authority (SOA) record

What are the six common DNS types?
- SOA records, NS records, A records, CNames, MX records, PTR records

What are the six DNS routing policies available on AWS?
- Simple, weighted, latency-based, failover, geolocation, multivalue

Which Route53 routing policy is best for when you have one web resource to access?
- Simple routing

Which Route53 routing policy allows you to divide a percentage of traffic to different resources?
- Weighted routing

Which Route53 routing policy allows traffic to be routed to the resource with the quickest response time?
- Latency routing

You can't mix Route53 routing policies.
- true

Which Route53 routing policy allows traffic to be re-routed in the event a resource fails?
- Failover routing

Which Route53 routing policy allows traffic to be routed based on their location?
- Geolocation routing

Which Route53 routing policy allows you to create multiple record sets with health checks and divides traffic across all healthy instances?
- Multivalue answer routing

How many domain names can you have in Route53 and can this limit be increased?
- 50 and yes

What are the six database types you can use in RDS?
- SQL, MySQL, PostgreSQL, Oracle, Aurora, MariaDB

What is the NoSQL database offering in AWS?
- DynamoDB

What service do you use to process large amounts of data in a data warehouse?
- RedShift

Which service do you use to cache database responses in memory?
- Elasticache

What are the two types of RDS backups?
- Automated backups and database snapshots

Database snapshots are done automatically.
- false

A restored RDS backup has the same DNS name.
- false

How do you create an encrypted RDS instance?
- Create a snapshot, copy it, and encrypt the copy. Then launch a new instance from the encrypted snapshot.

What allows you to have an exact copy of your production database in another availability zone for disaster recovery?
- Multi-AZ RDS

What allows you to push data out from one RDS database to other database instances to increase read performance?
- Read replica

How many read replicas can you have in an RDS database?
- Five

Each RDS read replica will have it's own DNS end point.
- true

You cannot have a read replica of a read replica.
- false

What do you want to use to scale an RDS database?
- Read replica

You must have automatic backups turned on in order to deploy a read replica.
- true

You can have a read replica of a database that also has multi-az.
- true

Read replicas can be promoted to be their own database.
- true

Read replicas can be in a different region.
- true

DynamoDb is stored on what kind of storage?
- SSD storage

What are the two read options available in DynamoDb?
- Eventual consistent reads and strongly consistent reads

What do you pay for when using DynamoDb?
- Read capacity, write capacity, and storage

What service do you use for analyzing large numbers of records?
- RedShift

What are the two kinds of RedShift configurations?
- Single node and multi-node

In RedShift, how many compute nodes can you have in a multi-node configuration?
- 128

Redshift uses what kind of data storage?
- Columnar data storage

Which service makes it easy to deploy, operate, and scale an in-memory cache in the cloud?
- Elasticache

What are the two types of caches you can use with Elasticache?
- Memcached and Redis

Which service can be used to alleviate a non-changing database under a lot of stress/load?
- Elasticache

Which service can be used to alleviate a database under stress due to excessive analytics processing?
- Redshift

RDS is what kind of database service?
- On line transaction processing (OLTP)

Redshift is what kind of database service?
- On line analytical processing (OLAP)

How many copies of your data does Amazon Aurora store?
- Six

What is the default port number for MySQL installations?
- 3306

In RDS, what is the maximum backup retention period?
- 35 days

When you add a rule to an RDS DB security group, you must specify a port number or protocol.
- false

With new RDS Db instances, automated backups are enabled by default.
- true

Which data formats does Amazon Athena support?
- JSON, Apache ORC, Apache Parquet

You can RDP or SSH in to an RDS instance to see what is going on with the operating system.
- false

In RDS, changes to the backup window take effect the next day.
- false

If you are using Amazon RDS Provisioned IOPS storage with a Microsoft SQL Server database engine, what is the maximum size RDS volume you can have by default?
- 16TB

Security groups can span subnets.
- true

All subnets in a default VPC have a route out to the internet.
- true

You can connect one VPC to another VPC even in a different AWS account.
- true

A VPC is a logical datacenter in AWS.
- true

One subnet can span availability zones.
- false

What makes up a VPC?
- Internet Gateways, virtual private gateways, route tables, network access control lists, subnets, and security groups.

Which IP addresses are reserved in an AWS VPC subnet?
- The first four and the last IP addresses

You can have multiple internet gateways attached to a VPC.
- false

Security groups span VPCs.
- false

You only need one NAT gateway across multiple availability zones.
- false

What must be disabled on a NAT instance in order for connected instances to access the internet through the NAT instance?
- Source/Destination check

NAT instances are located in a private subnet.
- false

What must be created from the private subnet to a NAT instance for the private instance to access the internet?
- Route out

What determines the amount of traffic a NAT instance can support?
- The size of the instance

A NAT instance is behind a security group.
- true

A NAT gateway is behind a security group.
- false

Are NAT instances or NAT gateways preferred by enterprises?
- NAT gateway

NAT gateways must be patched and updated.
- false

Do NAT instances or NAT gateways scale automatically?
- NAT gateways

What must be updated in order for NAT gateways or NAT instances to work?
- Route tables

NAT gateways are automatically assigned an IP address.
- true

Source/Destination checks must be disabled for NAT gateways.
- false

A subnet can be associated with multiple ACL's.
- false

What are the default access rules for inbound and outbound traffic in a new Network Access Control List (NACL)?
- Deny everything

What rule number does Amazon recommend starting at when creating rules in a Network Access Control List (NACL)?
- 100

Outbound rules are automatically created for each inbound rule in a Network Access Control List (NACL).
- false

A subnet can only be associated with one Network Access Control List (NACL).
- true

Network Access Control Lists are applied after security groups.
- false

The VPC's default NACL allows all inbound and outbound traffic by default.
- true

Custom NACL's allow all inbound and outbound traffic by default.
- false

You can associate a network ACL with multiple subnets.
- true

A subnet can only be associated with one network ACL at a time.
- true

Network ACL's are stateless meaning inbound and outbound rules must be defined.
- true

You can block IP addresses using security groups.
- false

You can block IP addresses using Network ACL's.
- true

VPC flow logs can be created at what levels?
- VPC, subnet, and network interface level

VPC flow logs allow you to monitor what?
- IP traffic flow information

Where are VPC flow logs recorded?
- CloudWatch

What must be created in CloudWatch to create a VPC flow log.
- A log group

You can tag a VPC flow log.
- false

Can you enable flow logs for an external VPC peered with your VPC?
- No, the peer VPC must be in your account

Once a flow log is created you cannot change it's configuration.
- true

All IP traffic is monitored with a VPC flow log.
- false

A NAT is used to provide internet traffic to EC2 instances in private subnets.
- true

A Bastion is used to securely administer EC2 instances in private subnets.
- true

VPC endpoints enable what function?
- Private subnets access to AWS resources

How many public subnets do you need to deploy an elastic load balancer in a VPC?
- Two

What are the two kinds of VPC endpoints?
- Gateways and interfaces

By default, how many VPCs are allowed in each AWS Region?
- Five

What is the purpose of an Egress-Only Internet Gateway?
- Allow IPv6 based traffic within a VPC to access the Internet, whilst denying any Internet based resources the possibility of initiating a connection back into the VPC

You have five VPCs in a 'hub and spoke' configuration, with VPC 'A' in the center and individually paired with VPCs 'B', 'C', 'D', and 'E', which make up the 'spokes'. There are no other VPC connections. Which of the following VPCs can VPC 'B' communicate with directly?
- VPC 'A'

By default, instances in new subnets in a custom VPC can communicate with each other across Availability Zones.
- true

What three things are created automatically when creating a custom VPC?
- Route table, access control list, security group

A subnet can span multiple Availability Zones.
- false

What is SQS?
- Simple Queue Service; a distributed message queueing service

SQS operates with what kind of system model?
- Pull-based

What service helps decouple the components of an application so they can run independently.
- SQS

What are the two types of SQS queues?
- Standard Queues and FIFO Queues

Standard SQS queues maintain the order in which messages are received.
- false

FIFO SQS queues maintain the order in which messages are received.
- true

How large can SQS messages be?
- 256 KB

How long can messages be kept in SQS?
- 1 minute to 14 days

What is the default retention period for SQS messages?
- 4 days

What is the SQS visibility timeout?
- The amount of time a message is invisible in the queue after the message is picked up.

What is the default SQS visibility timeout interval?
- 30 seconds

What is the maximum SQS visibility timeout?
- 12 hours

Which SQS type offers best-effort ordering and guarantees messages will be delivered at least once?
- Standard queues

Which SQS type offers strict order preservation and guarantees messages will only be delivered once?
- FIFO Queues

What are the two types of SQS polling?
- Short and long polling

Which SQS polling method returns immediately even if no messages are in the queue?
- Short polling

Which SQS polling method polls the queue periodically and only returns a response when a message is in the queue or the timeout is reached?
- Long polling

Which service operates a task-oriented API?
- Simple Workflow Service (SWF)

Which service operates a pull-based, message-oriented API?
- Simple Queue Service (SQS)

Which service ensures a task is assigned only once and never duplicated?
- Simple Workflow Service (SWF)

Which service leverages workers and deciders?
- Simple Workflow Service (SWF)

Which service follows the publish-subscribe messaging paradigm?
- Simple Notification Service (SNS)

Which service uses a "push" mechanism?
- Simple Notification Service (SNS)
