SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[JobTitle](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](255) NULL,
	);

GO
CREATE TABLE [dbo].[Employee](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[FirstName] [nvarchar](255) NOT NULL,
	[SecondName] [nvarchar](255) NOT NULL,
	[LastName] [nvarchar](255) NOT NULL,
	[SmallImageUrl] [nvarchar](Max) NULL,
	[FullImageUrl] [nvarchar](Max) NULL
	);

	
GO
CREATE TABLE [dbo].[EmployeeToJobTitle](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[EmployeeId] [int] NOT NULL,
	[JobTitleId] [int] NOT NULL,
	FOREIGN KEY (EmployeeId) REFERENCES [Employee](Id),
	FOREIGN KEY (JobTitleId) REFERENCES [JobTitle](Id)
	);

