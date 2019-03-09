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
- Lambda, S3, API gateway, Dynamo DB

AWS X-Ray helps you debug what other service?
- Lambda