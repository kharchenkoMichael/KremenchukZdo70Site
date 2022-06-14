SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactsData](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](Max) NULL,
	[Value] [nvarchar](Max) NULL,
	);
