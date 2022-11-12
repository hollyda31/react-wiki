import React from "react";

function Aws() {
  return (
    <div>
      <div class="main">
        <h1>Coding Wiki AWS Page</h1>
        <div class="contents">
          <ul>
            <li>
              <a href="#certifiedpractitionerexamnotes">
                Notes for the AWS Certified Cloud Practitioner Exam Prep
              </a>
            </li>
            <ul>
              <li>
                <a href="#module1">Module 1: Cloud Concepts</a>
              </li>
              <ul>
                <li>
                  <a href="#cloudeconomics">Cloud Economics</a>
                </li>
                <li>
                  <a href="#cloudarchitecture">
                    Cloud Architecture Design Principles
                  </a>
                </li>
                <ul>
                  <li>
                    <a href="#designfailure">Design for Failure</a>
                  </li>
                  <li>
                    <a href="#decouplecomponents">
                      Decouple components vs monolithic architecture
                    </a>
                  </li>
                  <li>
                    <a href="#elasticity">
                      Implement elasticity in the cloud vs. on-premises
                    </a>
                  </li>
                  <li>
                    <a href="#thinkparallel">Think Parallel</a>
                  </li>
                </ul>
              </ul>
              <li>
                <a href="#module2">Module 2: Security & Compliance</a>
              </li>
              <ul>
                <li>
                  <a href="#sharedresponsibility">
                    The AWS Security Shared Responsibility Model
                  </a>
                </li>
                <li>
                  <a href="#cloudsecurity">AWS Cloud Security</a>
                </li>
                <li>
                  <a href="#accessmanagement">
                    AWS Access Management Capabilities
                  </a>
                </li>
                <li>
                  <a href="#securitysupport">Resources for Security Support</a>
                </li>
              </ul>
              <li>
                <a href="#module3">Module 3: Technology</a>
              </li>
              <ul>
                <li>
                  <a href="#deployingoperating">
                    Methods of Deploying & Operating in the AWS Cloud
                  </a>
                </li>
                <li>
                  <a href="#globalinfrastructure">AWS Global Infrastructure</a>
                </li>
                <li>
                  <a href="#coreservices">Core AWS Services</a>
                </li>
                <li>
                  <a href="#resourcestech">Resources for Technology Support</a>
                </li>
              </ul>
            </ul>
          </ul>
        </div>
        <h2 id="certifiedpractitionerexamnotes">
          Notes for the AWS Certified Cloud Practitioner Exam Prep
        </h2>
        <h3 id="module1">Module 1: Cloud Concepts</h3>
        <h4 id="cloudeconomics">Cloud Economics</h4>
        <p>What are the costs of on-premises operations?</p>
        <ul>
          <li>
            Opex: Operating Expenses - things like printer toner, paper, etc.
          </li>
          <li>
            Capex: Capital Expenses - servers, power backups, long-term expenses
          </li>
          <li>
            Labor Costs: Labor costs associated with on-premises operations.
            Network center technicians, etc.
          </li>
          <li>
            Software licensing: What are the costs of your current software
            licenses? Can they be moved to the cloud? Will they be needed on the
            cloud or can they be replaced with a different cloud software? etc.
          </li>
        </ul>
        <p>What operations will reduce costs by moving to the cloud?</p>
        <ul>
          <li>
            Right-sizing infrastructure: Making the infrastructure flexible so
            it can meet peak demand, while not wasting extra infrastructure
            during periods of normal demand
          </li>
          <li>
            Automation: Automating regular tasks and reporting while also
            automating scaling
          </li>
          <li>
            Reduce compliance scope: Data segmentation & targeted reporting can
            help to reduce the scope of your compliance & save time during
            audits.
          </li>
          <li>Managed services: Helps to reduce workload & costs</li>
        </ul>
        <h4 id="cloudarchitecture">Cloud Architecture Design Principles</h4>
        <h5 id="designfailure">Design for Failure</h5>
        <p>
          Understand what and how components fail, and build around failures to
          add resiliency
        </p>
        <h5 id="decouplecomponents">
          Decouple components vs monolithic architecture
        </h5>
        <p>
          Monolithic architecture is when all the processes are tightly coupled
          or connected and running as a single service. Decoupling the
          components allows for greater flexibility. For example, a spike in
          demand for one component doesn't need to create a spike for the entire
          application.
        </p>
        <h5 id="elasticity">
          Implement elasticity in the cloud vs. on-premises
        </h5>
        <p>
          In an on-premises environment, if demand rises beyond that which
          you've deployed, it's very hard to meet additional demand. If demand
          falls below what you've expected, you're wasting money.
        </p>
        <p>
          With the AWS Cloud, you can dynamically change your capacity based on
          your demand, growing and shrinking your capacity as your demand
          changes.
        </p>
        <h5 id="thinkparallel">Think parallel</h5>
        <p>
          Serial and sequential processing - much like monolithic architectures
          - are incredibly limited and limiting. A dependency can make or break
          the process and break down the entire thing.
        </p>
        <div id="sidenote">
          <aside>
            <strong>Holly's Note:</strong>
            <br />
            Is this similar to the way of thinking required for Web3? With the
            idea of decoupling and distributing processes on a blockchain?
          </aside>
        </div>
        <p>
          Thinking parallel means that you look at how to divide a job into its
          simplest form, them distribute the load to multiple components to
          handle the demand.
        </p>
        <h3 id="module2">Module 2: Security & Compliance</h3>
        <h4 id="sharedresponsibility">
          The AWS Security Shared Responsibility Model
        </h4>
        <p>
          <img src="assets/images/sharedresponsibilitymodel.png" width="80%" />
        </p>
        <p>
          For the exam, you'll need to understand encryption and have an idea of
          which AWS services you can use to protect your data in transit and at
          rest.
        </p>
        <h4 id="cloudsecurity">AWS Cloud Security</h4>
        <p>
          It's important to know where to find the information about how to make
          your different AWS services comply with different security standards,
          like GDPR. Different AWS services will require different steps and
          processes, depending on the standard required, and you can find this
          information in the documents for the services.
        </p>
        <p>
          <img src="assets/images/awscloudsecurity.png" width="80%" />
        </p>
        <p>
          All actions in AWS are carried out via API calls. Every API call is
          captured via AWS CloudTrail, so this logs all account activity.
        </p>
        <p>
          CloudWatch is a monitoring service that allows you to view your
          resources by statistics. It doesn't enable risk auditing, but it can
          let you see statistical overviews.
        </p>
        <p>
          AWS Config enables you to assess, audit, & evaluate the configuration
          of your AWS resources. It handles your configurations, but it doesn't
          actually monitor your account activity. It only logs changes to
          resource configuration.
        </p>
        <p>
          AWS Health provides ongoing visibility into AWS resource availability.
          It helps you look at resource performance, but it doesn't log any
          account activity.
        </p>
        <h4 id="accessmanagement">AWS Access Management Capabilities</h4>
        <p>Understand the need for user & identity management.</p>
        <p>
          Concept of least privilege: Only give users the least access they need
          to do their work and nothing more
        </p>
        <p>
          AWS Identity & Access Management (IAM): You should know its features,
          how it enables you to control access to your account, and when to use
          the different aspects of IAM based on use case.
        </p>
        <p>
          The root user is different from AWS IAM users. Root user has complete
          & unrestricted access to all resources in the AWS account, but you
          shouldn't be using this root user to carry out daily tasks.
        </p>
        <p>
          Know the different ways you can secure your root user to protect it.
          These include:
        </p>
        <ul>
          <li>Use multi-factor identification (MFA) for the root user</li>
          <li>Securely lock away root user credentials</li>
          <li>Rotate access keys & passwords for the root user</li>
          <li>Don't use the root user for daily tasks</li>
        </ul>
        <p>Different features of IAM:</p>
        <ul>
          <li>Users</li>
          <li>Groups</li>
          <li>Roles</li>
          <li>Policies</li>
        </ul>
        <p>You should be able to explain things like:</p>
        <ul>
          <li>How IAM users have associated usernames & passwords</li>
          <li>Access keys for programmatic access</li>
          <li>How users can have MFA enabled for their login</li>
          <li>
            How you can enforce password complexity & access key/password
            rotation
          </li>
        </ul>
        <p>
          Review how you can organize users into groups & how that affects
          permissions when AWS actions are taken. How can you apply IAM policies
          to users, groups, or roles, and how does that affect an entity's
          access?
        </p>
        <p>
          <strong>Roles:</strong> Roles are very, very important to learn. IAM
          roles are assumed identities that provide temporary credentials. They
          can be assigned to a user, a program, or can be used for cross-account
          access.
        </p>
        <p>
          There are managed or unmanaged IAM policies. Know the difference
          between each type of policy, who can create each type of policy, and
          who can manage or edit each type of policy. AWS creates and manages
          managed policies, but customers create & manage unmanaged policies.
        </p>
        <p>Amazon Inspector runs security assessments on EC2 instances.</p>
        <p>
          Security Groups are firewalls for controlling access to EC2 instances.
        </p>
        <h4 id="securitysupport">Resources for Security Support</h4>
        <p>You'll need to be able to answer basic questions about:</p>
        <ul>
          <li>Security groups</li>
          <li>Network Access Control Lists (ACLs)</li>
          <li>AWS Web Application Firewall (WAF)</li>
        </ul>
        <p>
          AWS Trusted Advisor or Amazon Inspector can help give you some
          recommendations about security, but there are also some third-party
          tools available in AWS Marketplace that might be a good option for you
          if you're not a security expert.
        </p>
        <p>
          Where to go for more information? AWS Knowledge Center, Security
          Center, AWS Security Blogs, and the AWS Security Forum.
        </p>
        <p>
          You don't need to know exactly how to do everything, but you should
          know the basics and identify use cases & functionality.
        </p>
        <p>
          AWS WAF can filter traffic based on:
          <ul>
            <li>IP Addresses</li>
            <li>HTTP headers</li>
            <li>HTTP body</li>
            <li>URI strings</li>
          </ul>
        </p>
        <p>
          Security groups are instance-level firewalls that can allow a request
          to access an EC2 instance. They allow or reject traffic based on:
        </p>
        <ul>
          <li>Port</li>
          <li>Protocol</li>
          <li>Source (for inbound rules)</li>
          <li>Destination (for outbound rules</li>
        </ul>
        <p>
          Security groups cannot filter out anything based on the content of the
          network request.
        </p>
        <p>Network ACLS control traffic based on:</p>
        <ul>
          <li>Traffic type</li>
          <li>Port</li>
          <li>Protocol</li>
          <li>Source (for inbound rules)</li>
          <li>Destination (for outbound rules</li>
        </ul>
        <p>
          The network ACL differs from the Security Group because a Security
          Group is an instance-level firewall, whereas ACLs are subnet-level
          firewalls. Network ACLs cannot inspect the contents of a network
          request.
        </p>
        <p>
          IAM policies attach to AWS entities, such as users, groups, or roles.
          They then determine which actions should or should not be taken. But
          this can't filter anything from an external source.
        </p>
        <h3 id="module3">Module 3: Technology</h3>
        <h4 id="deployingoperating">
          Methods of Deploying & Operating in the AWS Cloud
        </h4>
        <p>The technology section covers four parts. These are:</p>
        <div id="sidenote">
          <aside>
            <p>
              <strong>Holly's Note:</strong>
              <br />
              Technology is the weightiest part of the exam and makes up 1/3 of
              your score. This covers the services, infrastructure, &
              operations.
            </p>
          </aside>
        </div>
        <ul>
          <li>Define methods of deploying & operating in the AWS Cloud</li>
          <li>Define the AWS global infrastructure</li>
          <li>Identify the core AWS services</li>
          <li>Identify resources for technology support</li>
        </ul>
        <p>
          For this first section, we discuss the methods of deploying &
          operating in the AWS Cloud.
        </p>
        <p>
          There are several methods to communicate with the AWS Cloud. These
          include:
        </p>
        <div id="sidenote">
          <aside>
            <strong>Holly's Note:</strong>
            <br />
            Personally, I don't really know wtf some of these things are, so
            this will require a lot of research. WTF is an SDK? Must look that
            up
          </aside>
        </div>
        <ul>
          <li>Programmatic access to the APIs through the SDKs</li>
          <li>API access through the AWS Command Line Interface (CLI)</li>
          <li>Graphical interface through the AWS Management Console</li>
          <li>Infrastructure as code (IaC)</li>
        </ul>
        <p>
          You're supposed to think about the benefits and limitations of each.
        </p>

        <h4 id="#globalinfrastructure">AWS Global Infrastructure</h4>
        <p></p>

        <h4 id="#coreservices">Core AWS Services</h4>
        <p></p>

        <h4 id="#resourcestech">Resources for Technology Support</h4>
        <p></p>
      </div>
    </div>
  );
}

export default Aws;
