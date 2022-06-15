SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RegulatoryFramework](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](Max) NULL,
	[Href] [nvarchar](Max) NULL,
	);